// Mind maps archive - unlisted pages for case study visualizations
// These are used in video production and preserved here for reference

export interface MindMapNode {
  title: string;
  subtitle: string;
}

export interface ReportNote {
  tech: string;
  ticket: string;
  score: string | null;
  status: "compliant" | "non-compliant" | "incomplete";
  details: string;
}

export interface SampleReport {
  date: string;
  summary: {
    assessed: number;
    compliant: number;
    nonCompliant: number;
    incomplete: number;
  };
  submitted: string[];
  missing: string[];
  notes: ReportNote[];
}

export interface MindMap {
  slug: string;
  title: string;
  caseStudy: string;
  createdAt: string;
  problems: MindMapNode[];
  solution: MindMapNode[];
  outputs: MindMapNode[];
  sampleReport?: SampleReport;
}

// ============================================
// ADD NEW MIND MAPS HERE
// ============================================

const MIND_MAPS: MindMap[] = [
  {
    slug: "field-tech-compliance",
    title: "Field Tech Compliance",
    caseStudy: "field-tech-compliance",
    createdAt: "2026-02-04",
    problems: [
      {
        title: "Written-Off Invoices",
        subtitle: "No record of who they spoke with or what they did",
      },
      {
        title: "Hours of Chasing",
        subtitle: "Ops manager hunting down details every week",
      },
      {
        title: "No Proof of Work",
        subtitle: "Customer disputes with nothing to back it up",
      },
    ],
    solution: [
      {
        title: "Ticketing System",
        subtitle: "Automated data pull",
      },
      {
        title: "AI Assessment",
        subtitle: "7-point checklist",
      },
      {
        title: "Daily Report",
        subtitle: "Scores & accountability",
      },
    ],
    outputs: [
      {
        title: "Ops Manager",
        subtitle: "Daily email with instant coaching",
      },
      {
        title: "Trend Database",
        subtitle: "Quarterly bonus tracking",
      },
    ],
    sampleReport: {
      date: "January 29, 2026",
      summary: {
        assessed: 8,
        compliant: 4,
        nonCompliant: 2,
        incomplete: 2,
      },
      submitted: ["Alex M.", "Chris P.", "Jordan L.", "Mike T.", "Sam R."],
      missing: ["Dave K.", "Ryan S."],
      notes: [
        {
          tech: "Alex M.",
          ticket: "#4521",
          score: "7/7",
          status: "compliant",
          details: "✓ All fields complete",
        },
        {
          tech: "Alex M.",
          ticket: "#4523",
          score: "7/7",
          status: "compliant",
          details: "✓ All fields complete",
        },
        {
          tech: "Chris P.",
          ticket: "#4518",
          score: "5/7",
          status: "non-compliant",
          details: "Missing: Contact name, Checked out",
        },
        {
          tech: "Jordan L.",
          ticket: "#4519",
          score: "7/7",
          status: "compliant",
          details: "✓ All fields complete",
        },
        {
          tech: "Jordan L.",
          ticket: "#4525",
          score: null,
          status: "incomplete",
          details: "Handed off to Chris, waiting on parts",
        },
        {
          tech: "Mike T.",
          ticket: "#4520",
          score: "4/7",
          status: "non-compliant",
          details: "Missing: Location, Materials, Installed equipment | ⚠️ Template not used",
        },
        {
          tech: "Sam R.",
          ticket: "#4522",
          score: "8/8",
          status: "compliant",
          details: "✓ All fields complete (work incomplete, next steps documented)",
        },
        {
          tech: "Sam R.",
          ticket: "#4524",
          score: null,
          status: "incomplete",
          details: "Empty template - photo upload only",
        },
      ],
    },
  },
];

// ============================================
// API FUNCTIONS
// ============================================

export function getMindMapBySlug(slug: string): MindMap | null {
  return MIND_MAPS.find((m) => m.slug === slug) || null;
}

export function getAllMindMapSlugs(): string[] {
  return MIND_MAPS.map((m) => m.slug);
}

export function getAllMindMaps(): MindMap[] {
  return MIND_MAPS;
}
