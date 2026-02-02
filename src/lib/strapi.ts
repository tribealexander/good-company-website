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
  resultsTimeframe: string | null;
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
  resultsTimeframe?: string;
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

// Extract video thumbnail URL from YouTube or Loom URLs
function getVideoThumbnail(videoUrl: string | null, videoType: 'youtube' | 'loom' | 'none'): string | undefined {
  if (!videoUrl) return undefined;

  // YouTube thumbnail extraction
  if (videoType === 'youtube' || videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
    // Extract video ID from various YouTube URL formats
    let videoId: string | null = null;

    if (videoUrl.includes('youtu.be/')) {
      videoId = videoUrl.split('youtu.be/')[1]?.split(/[?&#]/)[0] || null;
    } else if (videoUrl.includes('youtube.com/watch')) {
      const urlParams = new URL(videoUrl).searchParams;
      videoId = urlParams.get('v');
    } else if (videoUrl.includes('youtube.com/embed/')) {
      videoId = videoUrl.split('embed/')[1]?.split(/[?&#]/)[0] || null;
    }

    if (videoId) {
      // Use maxresdefault for highest quality, falls back gracefully
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
  }

  // Loom thumbnail extraction
  if (videoType === 'loom' || videoUrl.includes('loom.com')) {
    // Extract share ID from Loom URL
    const loomMatch = videoUrl.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
    if (loomMatch && loomMatch[1]) {
      return `https://cdn.loom.com/sessions/thumbnails/${loomMatch[1]}-with-play.gif`;
    }
  }

  return undefined;
}

// Proposal types
export interface StrapiProposal {
  id: number;
  documentId: string;
  slug: string;
  clientName: string;
  projectTitle: string;
  date: string;
  projectFee: string | null;
  monthlyHosting: string | null;
  launchTarget: string | null;
  summary: string | null;
  deliverables: { category: string; items: string }[] | null;
  whatsIncluded: string | null;
  notIncluded: string | null;
  clientResponsibilities: string | null;
  ownershipText: string | null;
  paymentMilestones: { milestone: string; amount: string }[] | null;
  signatureClientName: string | null;
  signatureConsultantName: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Proposal {
  id: string;
  slug: string;
  clientName: string;
  projectTitle: string;
  date: string;
  projectFee?: string;
  monthlyHosting?: string;
  launchTarget?: string;
  summary?: string;
  deliverables?: { category: string; items: string }[];
  whatsIncluded?: string;
  notIncluded?: string;
  clientResponsibilities?: string;
  ownershipText?: string;
  paymentMilestones?: { milestone: string; amount: string }[];
  signatureClientName?: string;
  signatureConsultantName?: string;
}

export async function getProposalBySlug(slug: string): Promise<Proposal | null> {
  const strapiUrl = getStrapiUrl();

  try {
    const res = await fetch(
      `${strapiUrl}/api/proposals?filters[slug][$eq]=${slug}&populate=*`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      console.error('Failed to fetch proposal:', res.status, res.statusText);
      return null;
    }

    const data: StrapiResponse<StrapiProposal> = await res.json();
    const proposal = data.data[0];

    if (!proposal) return null;

    return mapStrapiToProposal(proposal);
  } catch (error) {
    console.error('Error fetching proposal:', error);
    return null;
  }
}

// Helper to map Strapi response to our Proposal type
function mapStrapiToProposal(proposal: StrapiProposal): Proposal {
  return {
    id: proposal.slug || proposal.documentId,
    slug: proposal.slug,
    clientName: proposal.clientName,
    projectTitle: proposal.projectTitle,
    date: proposal.date,
    projectFee: proposal.projectFee || undefined,
    monthlyHosting: proposal.monthlyHosting || undefined,
    launchTarget: proposal.launchTarget || undefined,
    summary: proposal.summary || undefined,
    deliverables: proposal.deliverables || undefined,
    whatsIncluded: proposal.whatsIncluded || undefined,
    notIncluded: proposal.notIncluded || undefined,
    clientResponsibilities: proposal.clientResponsibilities || undefined,
    ownershipText: proposal.ownershipText || undefined,
    paymentMilestones: proposal.paymentMilestones || undefined,
    signatureClientName: proposal.signatureClientName || undefined,
    signatureConsultantName: proposal.signatureConsultantName || undefined,
  };
}

// Helper to map Strapi response to our CaseStudy type
function mapStrapiToCaseStudy(study: StrapiCaseStudy): CaseStudy {
  const strapiUrl = getStrapiUrl();

  // Handle thumbnail URL - Strapi returns relative URLs
  // Priority: 1) Uploaded thumbnail, 2) Video thumbnail, 3) undefined
  let thumbnailUrl: string | undefined;
  if (study.thumbnail?.url) {
    thumbnailUrl = study.thumbnail.url.startsWith('http')
      ? study.thumbnail.url
      : `${strapiUrl}${study.thumbnail.url}`;
  } else if (study.videoUrl) {
    // Fall back to video thumbnail if no custom thumbnail uploaded
    thumbnailUrl = getVideoThumbnail(study.videoUrl, study.videoType);
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
    resultsTimeframe: study.resultsTimeframe || undefined,
    videoUrl: study.videoUrl || undefined,
    videoType: study.videoType,
    thumbnailUrl,
    featured: study.featured,
    order: study.order,
  };
}
