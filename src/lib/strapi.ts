// Get Strapi URL at runtime, not module load time
function getStrapiUrl(): string {
  return process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
}

export interface StrapiCaseStudy {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  department: string;
  description: string;
  results: { text: string }[] | null;
  videoUrl: string | null;
  videoType: 'youtube' | 'loom' | 'none';
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface CaseStudy {
  id: string;
  department: string;
  title: string;
  description: string;
  results: string[];
  videoUrl?: string;
  videoType?: 'youtube' | 'loom' | 'none';
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
    console.log('Fetching from Strapi URL:', strapiUrl);
    const res = await fetch(
      `${strapiUrl}/api/case-studies?populate=*&sort=order:asc,createdAt:desc`,
      {
        cache: 'no-store', // Always fetch fresh data
      }
    );

    if (!res.ok) {
      console.error('Failed to fetch case studies:', res.status, res.statusText);
      return [];
    }

    const data: StrapiResponse<StrapiCaseStudy> = await res.json();

    // Map Strapi data to our component format
    return data.data.map((study) => ({
      id: study.slug || study.documentId,
      department: study.department,
      title: study.title,
      description: study.description,
      results: study.results?.map((r) => r.text) || [],
      videoUrl: study.videoUrl || undefined,
      videoType: study.videoType,
      featured: study.featured,
      order: study.order,
    }));
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

    return {
      id: study.slug || study.documentId,
      department: study.department,
      title: study.title,
      description: study.description,
      results: study.results?.map((r) => r.text) || [],
      videoUrl: study.videoUrl || undefined,
      videoType: study.videoType,
      featured: study.featured,
      order: study.order,
    };
  } catch (error) {
    console.error('Error fetching case study:', error);
    return null;
  }
}
