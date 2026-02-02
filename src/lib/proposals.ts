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
          <li><strong>Homepage</strong> — hero with product shot, stats bar, product categories, industry personas, process section, testimonials, CTA</li>
          <li><strong>About / Team</strong> — company overview, team headshots with names and titles, certifications</li>
          <li><strong>Products</strong> — self-framing buildings, insulated panels, rigid frame buildings with brief specs (dimensions, capacity)</li>
          <li><strong>Oil & Gas</strong> — industry-specific page linking to pre-filtered projects</li>
          <li><strong>Agriculture</strong> — industry-specific page linking to pre-filtered projects</li>
          <li><strong>Projects</strong> — filterable gallery with grayscale thumbnails, structured fields per project</li>
          <li><strong>Contact</strong> — simple inquiry form (name, email, phone, message) routing to projects@mmbi.ca</li>
          <li><strong>Careers</strong> — accessible via footer; simple job board maintained by internal team</li>
          <li><strong>Education / Resources</strong> — accessible via dropdown menu with Projects; launches with placeholder content</li>
        </ul>`,
      },
      {
        category: "CMS & Content Architecture",
        items: `<ul>
          <li>Strapi CMS with structured content types for projects, testimonials, team, careers, and education</li>
          <li>Admin panel access for Metalex team</li>
          <li>Content entry via form fields (no design skills required)</li>
          <li>Case studies and blog can be hidden at launch until content is ready</li>
        </ul>`,
      },
      {
        category: "Technical",
        items: `<ul>
          <li>Next.js frontend</li>
          <li>Responsive design (desktop, tablet, mobile)</li>
          <li>SEO fundamentals — meta tags, structured data, sitemap</li>
          <li>DNS cutover and SSL certificate (coordinated with Metalex IT)</li>
          <li>Contact form with email routing to projects@mmbi.ca</li>
        </ul>`,
      },
    ],
    whatsIncluded: `<ul>
      <li>Weekly revision cycles from kickoff through April 1 launch</li>
      <li>Collaborative iteration on copy, layout, and content via live staging instance</li>
      <li>AI-generated background and hero images as needed</li>
      <li>Icon-style product graphics for navigation and categories</li>
      <li>CMS training for designated team members</li>
      <li>30-day post-launch support window (bug fixes and minor adjustments)</li>
    </ul>`,
    notIncluded: `<ul>
      <li>Professional photography or headshots (coordinated by Metalex)</li>
      <li>Technical spec sheets and data sheets</li>
      <li>CRM integration</li>
      <li>Email marketing integration</li>
      <li>Ongoing content creation after launch (blog posts, case study write-ups)</li>
      <li>Structural changes or new feature development after launch</li>
      <li>Video production or editing</li>
    </ul>`,
    clientResponsibilities: `<ul>
      <li>Confirm team page roster (names, titles; coordinate headshots)</li>
      <li>Confirm board member inclusion on team page</li>
      <li>Provide or approve copy for industry vertical pages</li>
      <li>Provide testimonials (current ones used as placeholders; new ones from key customers)</li>
      <li>Provide project photos for gallery (can launch with placeholders)</li>
      <li>Provide logo files and brand assets via SharePoint</li>
      <li>Intro to IT contact for DNS access</li>
      <li>Timely feedback on revisions to maintain April 1 target</li>
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
