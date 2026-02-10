// Mind maps archive - unlisted pages for case study visualizations
// These are used in video production and preserved here for reference

// ===========================================
// VERTICAL FLOW LAYOUT (original)
// ===========================================

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

export interface VerticalMindMap {
  slug: string;
  title: string;
  caseStudy: string;
  createdAt: string;
  layout: "vertical";
  problems: MindMapNode[];
  solution: MindMapNode[];
  outputs: MindMapNode[];
  sampleReport?: SampleReport;
}

// ===========================================
// THREE-COLUMN FLOW LAYOUT (Problem → Solution → Results)
// Dark theme optimized for video recording
// ===========================================

export interface FlowCard {
  label: string;
  description: string;
  metric?: string; // For results like "100%", "1–2 hrs"
}

export interface ThreeColumnMindMap {
  slug: string;
  title: string;
  caseStudy?: string;
  createdAt: string;
  layout: "three-column";
  solutionEmphasis?: string; // e.g., "meeting people where they already are"
  problems: FlowCard[];
  solution: FlowCard[];
  results: FlowCard[];
  tagline?: {
    text: string;
    emphasis: string;
  };
}

// Union type for all mind map layouts
export type MindMap = VerticalMindMap | ThreeColumnMindMap;

// Type guard helpers
export function isVerticalMindMap(mindMap: MindMap): mindMap is VerticalMindMap {
  return mindMap.layout === "vertical";
}

export function isThreeColumnMindMap(mindMap: MindMap): mindMap is ThreeColumnMindMap {
  return mindMap.layout === "three-column";
}

// ============================================
// ADD NEW MIND MAPS HERE
// ============================================

const MIND_MAPS: MindMap[] = [
  // ===========================================
  // THREE-COLUMN LAYOUTS
  // ===========================================
  {
    slug: "task-pinger",
    title: "Task Pinger",
    caseStudy: "task-pinger",
    createdAt: "2026-02-10",
    layout: "three-column",
    solutionEmphasis: "meeting people where they already are",
    problems: [
      {
        label: "Manual Follow-up",
        description:
          "PM spent hours pinging people on Slack for status updates across multiple projects",
      },
      {
        label: "Stale Data",
        description:
          "Responses lived in Slack threads, never made it back to the project tracker",
      },
      {
        label: "Silent Slippage",
        description:
          "Tasks sat for weeks without movement because no one was asking",
      },
      {
        label: "Wasted Meetings",
        description:
          "Status meetings spent collecting updates instead of making decisions",
      },
    ],
    solution: [
      {
        label: "Meet Them Where They Are",
        description:
          "The sheet worked because it was simple, so we kept it. No new platforms, no migration, no retraining.",
      },
      {
        label: "Same Tools, One Tweak",
        description:
          "Connected their existing Google Sheet to Slack — the two tools the team already lived in",
      },
      {
        label: "Auto-Ping + Auto-Capture",
        description:
          "Open tasks get pinged daily with context. Replies flow back to the sheet automatically, no copy-pasting",
      },
      {
        label: "Persistent Until Done",
        description:
          "Keeps pinging daily until a response is received or the manager changes the status",
      },
    ],
    results: [
      {
        label: "Weekly PM Time Recovered",
        description: "From manual follow-up",
        metric: "1–2 hrs",
      },
      {
        label: "Shorter Status Meetings",
        description: "Team arrives already informed",
        metric: "50%",
      },
      {
        label: "Task Update Compliance",
        description: "Every item gets a response",
        metric: "100%",
      },
      {
        label: "Clear Record",
        description:
          "Every update timestamped and attributed — who said what, and when",
      },
    ],
  },

  // ===========================================
  // VERTICAL LAYOUTS
  // ===========================================
  {
    slug: "field-tech-compliance",
    title: "Field Tech Compliance",
    caseStudy: "field-tech-compliance",
    createdAt: "2026-02-04",
    layout: "vertical",
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
