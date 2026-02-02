// Local proposals data - no Strapi required
// Add new proposals to the PROPOSALS array below

export interface Proposal {
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

// ============================================
// ADD NEW PROPOSALS HERE
// ============================================

const PROPOSALS: Proposal[] = [
  {
    slug: "metalex-website-2026",
    clientName: "Metalex Metal Building Inc.",
    projectTitle: "Website Redevelopment",
    date: "2026-02-02",
    projectFee: "$15,000 CAD + HST",
    launchTarget: "2026-04-01",
    summary: `<p>Full redesign and redevelopment of the Metalex website using a headless CMS architecture (Strapi + Next.js + Vercel).</p>
<ul>
<li>Good Company handles all project management, design direction, CMS setup, frontend development, and deployment as a single point of contact</li>
<li>No third-party vendors involved</li>
</ul>`,
    deliverables: [
      {
        category: "Pages",
        items: `<ul>
<li>Homepage</li>
<li>About / Team</li>
<li>Products (self-framing buildings, insulated panels, rigid frame)</li>
<li>Industry pages (Oil & Gas, Agriculture)</li>
<li>Projects gallery with filtering</li>
<li>Contact form</li>
<li>Careers (footer link, internal job board)</li>
<li>Education / Resources (placeholder at launch)</li>
</ul>`,
      },
      {
        category: "CMS & Content Architecture",
        items: `<ul>
<li>Strapi CMS with structured content types</li>
<li>Admin panel access for Metalex team</li>
<li>No design skills required for content updates</li>
</ul>`,
      },
      {
        category: "Technical",
        items: `<ul>
<li>Next.js frontend, responsive design</li>
<li>SEO fundamentals (meta tags, structured data, sitemap)</li>
<li>DNS cutover and SSL certificate</li>
<li>Contact form routing to projects@mmbi.ca</li>
</ul>`,
      },
    ],
    whatsIncluded: `<ul>
<li>Weekly revision cycles through launch</li>
<li>Live staging instance for collaborative review</li>
<li>AI-generated imagery as needed</li>
<li>CMS training for your team</li>
<li>30-day post-launch support</li>
</ul>`,
    notIncluded: `<ul>
<li>Professional photography or headshots</li>
<li>Technical spec sheets</li>
<li>CRM or email marketing integration</li>
<li>Ongoing content creation after launch</li>
<li>New feature development after launch</li>
</ul>`,
    clientResponsibilities: `<ul>
<li>Team roster and headshots</li>
<li>Copy approval for industry pages</li>
<li>Testimonials and project photos</li>
<li>Logo files and brand assets</li>
<li>IT contact for DNS access</li>
<li>Timely feedback to maintain April 1 target</li>
</ul>`,
    ownershipText: `<p>Upon final payment, Metalex owns the full codebase and all project assets. Metalex is free to engage any developer for future work.</p>`,
    paymentMilestones: [
      { milestone: "Prior to launch", amount: "$15,000 + HST" },
    ],
    signatureClientName: "Jon DeCoste, Metalex Metal Building Inc.",
    signatureConsultantName: "Good Company",
  },
];

// ============================================
// API FUNCTIONS
// ============================================

export function getProposalBySlug(slug: string): Proposal | null {
  return PROPOSALS.find((p) => p.slug === slug) || null;
}

export function getAllProposalSlugs(): string[] {
  return PROPOSALS.map((p) => p.slug);
}
