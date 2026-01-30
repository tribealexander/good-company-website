// Strapi Cloud URL - hardcoded for now until env var issue is resolved
const STRAPI_CLOUD_URL = 'https://supportive-blessing-06262181b8.strapiapp.com';

// Get Strapi URL at runtime
function getStrapiUrl(): string {
  return process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || STRAPI_CLOUD_URL;
}

// Strapi media format
interface StrapiMedia {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface StrapiCaseStudy {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  department: string;
  description: string;
  problem: string | null;
  solution: string | null;
  results: { text: string; stat?: string }[] | null;
  videoUrl: string | null;
  videoType: 'youtube' | 'loom' | 'none';
  thumbnail: StrapiMedia | null;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  department: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  results: { text: string; stat?: string }[];
  videoUrl?: string;
  videoType?: 'youtube' | 'loom' | 'none';
  thumbnailUrl?: string;
  featured?: boolean;
  order?: number;
}

interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const strapiUrl = getStrapiUrl();

  try {
    const res = await fetch(
      `${strapiUrl}/api/case-studies?populate=*&sort=order:asc,createdAt:desc`,
      {
        next: { revalidate: 60 }, // Cache for 60 seconds, then revalidate
      }
    );

    if (!res.ok) {
      console.error('Failed to fetch case studies:', res.status, res.statusText);
      return [];
    }

    const data: StrapiResponse<StrapiCaseStudy> = await res.json();

    // Map Strapi data to our component format
    return data.data.map((study) => mapStrapiToCaseStudy(study));
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const strapiUrl = getStrapiUrl();

  try {
    const res = await fetch(
      `${strapiUrl}/api/case-studies?filters[slug][$eq]=${slug}&populate=*`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      console.error('Failed to fetch case study:', res.status, res.statusText);
      return null;
    }

    const data: StrapiResponse<StrapiCaseStudy> = await res.json();
    const study = data.data[0];

    if (!study) return null;

    return mapStrapiToCaseStudy(study);
  } catch (error) {
    console.error('Error fetching case study:', error);
    return null;
  }
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
  const strapiUrl = getStrapiUrl();

  try {
    const res = await fetch(
      `${strapiUrl}/api/case-studies?fields[0]=slug`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      return [];
    }

    const data: StrapiResponse<{ slug: string }> = await res.json();
    return data.data.map((study) => study.slug).filter(Boolean);
  } catch (error) {
    console.error('Error fetching case study slugs:', error);
    return [];
  }
}

// Helper to map Strapi response to our CaseStudy type
function mapStrapiToCaseStudy(study: StrapiCaseStudy): CaseStudy {
  const strapiUrl = getStrapiUrl();

  // Handle thumbnail URL - Strapi returns relative URLs
  let thumbnailUrl: string | undefined;
  if (study.thumbnail?.url) {
    thumbnailUrl = study.thumbnail.url.startsWith('http')
      ? study.thumbnail.url
      : `${strapiUrl}${study.thumbnail.url}`;
  }

  return {
    id: study.slug || study.documentId,
    slug: study.slug,
    department: study.department,
    title: study.title,
    description: study.description,
    problem: study.problem || undefined,
    solution: study.solution || undefined,
    results: study.results?.map((r) => ({
      text: r.text,
      stat: r.stat
    })) || [],
    videoUrl: study.videoUrl || undefined,
    videoType: study.videoType,
    thumbnailUrl,
    featured: study.featured,
    order: study.order,
  };
}
