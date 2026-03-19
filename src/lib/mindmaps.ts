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

export interface PeterAction {
  type: "sent" | "cc" | "calendar" | "slack";
  to?: string;
  from: string;
  subject: string;
  preview: string;
  time: string;
  autonomyLevel: 1 | 2 | 3;
}

export interface AutonomyLevel {
  level: number;
  name: string;
  description: string;
  example: string;
  trust: "none" | "monitored" | "full"; // controls visual styling
}

export interface AutonomySpectrum {
  intro: string;
  levels: AutonomyLevel[];
  rule: string; // the governing principle
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
  autonomySpectrum?: AutonomySpectrum; // optional tabbed view
  peterActions?: PeterAction[]; // optional "Peter in Action" tab
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
    slug: "the-come-up",
    title: "AI-Powered Editing for a Newsletter Publication",
    caseStudy: "the-come-up",
    createdAt: "2026-02-23",
    layout: "three-column",
    solutionEmphasis: "AI editing with human oversight",
    problems: [
      {
        label: "$500/Month + Overhead",
        description:
          "Contractor cost plus constant management: tracking, assigning, coaching, following up",
      },
      {
        label: "One Per Week Max",
        description:
          "Low-paid subcontractor = delays. Your side project isn't their priority. Scaling means scaling fees.",
      },
      {
        label: "Hard to Justify",
        description:
          "No revenue from this project. $500/month is hard to defend for a passion project.",
      },
    ],
    solution: [
      {
        label: "AI Editing, Not Writing",
        description:
          "18K words → 4K. Removes ums, rambles, repetition. Preserves voice exactly.",
      },
      {
        label: "Three Steps + Oversight",
        description:
          "1. Identify themes\n2. Edit into polished format\n3. Quality check\nHuman reviews before publish.",
      },
      {
        label: "Fully Automated Pipeline",
        description:
          "Guest books → transcript ready → AI processes → doc ready. Status tracked automatically.",
      },
    ],
    results: [
      {
        label: "Cost & Management",
        description: "From $500 + hours to near-zero",
        metric: "$0",
      },
      {
        label: "Throughput",
        description: "No longer bottlenecked by contractor",
        metric: "Unlimited",
      },
      {
        label: "My Only Touchpoints",
        description:
          "1. Conduct interview\n2. Review and send email\n3. Mark approved",
      },
    ],
    tagline: {
      text: "The 'passive' content project",
      emphasis: "is finally passive.",
    },
  },
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
          "Connected their existing Google Sheet to Slack. The two tools the team already lived in.",
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
          "Every update timestamped and attributed. Who said what, and when.",
      },
    ],
  },
  {
    slug: "ai-operating-system",
    title: "AI Operating System for Knowledge Compounding",
    caseStudy: "ai-operating-system",
    createdAt: "2026-03-02",
    layout: "three-column",
    solutionEmphasis: "explicit context routing, not magic AI",
    problems: [
      {
        label: "Knowledge Evaporation",
        description:
          "Strategic conversations disappeared when threads closed. Chamber prospecting ideas, client solutions, all gone.",
      },
      {
        label: "Rebuild, Don't Reuse",
        description:
          "Built same solutions for different clients. Call transcripts sat unused. Patterns never extracted.",
      },
      {
        label: "Inconsistent Voice",
        description:
          "Professional emails sounded different from blog posts. No documented guidelines for AI to follow.",
      },
      {
        label: "Context Chaos",
        description:
          "AI couldn't find the right information. Hoped it would 'figure out' what to read. It didn't.",
      },
    ],
    solution: [
      {
        label: "Master Context Router",
        description:
          "Central README routes tasks to correct context. Email → professional voice. Blog → storytelling voice. Explicit, not magic.",
      },
      {
        label: "Knowledge Indexes",
        description:
          "Extracted 59 Come Up interviews → 10 patterns + pain points. 83 blog posts → frameworks + stories + voice guidelines.",
      },
      {
        label: "Pattern Templates",
        description:
          "Client solutions → reusable templates. Task Pinger: full documentation + pricing + when NOT to use.",
      },
      {
        label: "Three-Level System",
        description:
          "Task → Master README → Specific Context → Generated Output. Every conversation archives back to system.",
      },
    ],
    results: [
      {
        label: "Proposal Time",
        description: "Projected savings on repeat work",
        metric: "90%",
      },
      {
        label: "Pattern Reuse",
        description: "Solutions become templates, not one-offs",
        metric: "Infinite",
      },
      {
        label: "Context Access",
        description: "AI can instantly read 59 interviews vs manual recall",
        metric: "Instant",
      },
      {
        label: "Knowledge Preserved",
        description:
          "Every call, conversation, solution → captured and searchable instead of evaporated",
      },
    ],
    tagline: {
      text: "Knowledge that compounds",
      emphasis: "instead of evaporates.",
    },
  },

  {
    slug: "ai-executive-assistant",
    title: "AI Operations Coordinator for a Creative Services Firm",
    caseStudy: "ai-executive-assistant",
    createdAt: "2026-03-17",
    layout: "three-column",
    solutionEmphasis: "Peter handles the uncomfortable stuff so the founder doesn't have to",
    problems: [
      {
        label: "The Bad Guy Problem",
        description:
          "The founder is the client relationship. But the same person also chases late invoices, nags subcontractors, and sends the 'just following up' emails. You can't be the creative partner and the collections department.",
      },
      {
        label: "Can't Justify the Hire",
        description:
          "An office manager costs $3,000-$4,000/month. For a 10-person team, that's a real line item for someone who'd spend half their time waiting for things to do.",
      },
      {
        label: "Death by Context Switching",
        description:
          "Every time the founder sits down for deep client work, there's a pile of low-stakes admin pulling attention away. Reply to the vendor. Chase the subcontractor. Follow up on the invoice.",
      },
    ],
    solution: [
      {
        label: "Meet Peter",
        description:
          "Peter has his own company email, calendar, and workspace. Team members CC Peter. Clients and vendors correspond with Peter directly. He's not a chatbot. He's a team member.",
      },
      {
        label: "The Autonomy Dial",
        description:
          "Every task starts at Level 1 (draft & wait). Earns its way to Level 2 (send & CC) or Level 3 (fully autonomous). Same way you'd onboard a real hire.",
      },
      {
        label: "Built-In Guardrails",
        description:
          "Can't access the founder's inbox. Every email CC'd automatically. No admin privileges. Can't commit to pricing or terms. Disclosure on every message.",
      },
    ],
    results: [
      {
        label: "Founder Back-Office Time",
        description: "From 10-15 hrs/week to 2-3 hrs/week",
        metric: "80%",
      },
      {
        label: "Invoice Collection",
        description: "Average days to collect dropped significantly",
        metric: "<15 days",
      },
      {
        label: "Cost vs. Office Manager",
        description: "$3,000-$4,000/mo replaced by ~$200/mo",
        metric: "95%",
      },
      {
        label: "Compounds Over Time",
        description:
          "As Peter accumulates context (tone, contacts, preferences, processes) he handles more with less oversight. The founder's involvement shrinks, not grows.",
      },
    ],
    tagline: {
      text: "A 10-person team gets the back-office",
      emphasis: "a 50-person firm gets for free.",
    },
    autonomySpectrum: {
      intro:
        "Not everything gets the same level of trust. We built this as a dial, not a switch.",
      levels: [
        {
          level: 1,
          name: "Draft & Wait",
          description:
            "Peter drafts a message. The founder reviews and approves before anything goes out. Zero risk. This is where every new task type starts.",
          example:
            "A subcontractor missed a deadline. Peter drafts a firm but professional follow-up. The founder reads it, tweaks the tone, approves it. The subcontractor hears from Peter, not from the person who hired them.",
          trust: "none",
        },
        {
          level: 2,
          name: "Send & CC",
          description:
            "Peter sends on his own, but the founder gets a copy of everything. If something looks off, they catch it in real time.",
          example:
            "Invoice is 15 days overdue. Peter sends the second reminder automatically, CC's the founder. Standard language, standard cadence. The founder sees it land and moves on.",
          trust: "monitored",
        },
        {
          level: 3,
          name: "Fully Autonomous",
          description:
            "Peter handles it end-to-end. The founder doesn't see it unless they go looking.",
          example:
            "Confirming a meeting time with a subcontractor. Sending project files someone requested. Responding to a vendor asking for the mailing address.",
          trust: "full",
        },
      ],
      rule: "Every task starts at Level 1. It only moves up after the founder has seen enough drafts to trust the pattern. Invoice follow-ups might reach Level 2. Client-facing communications might never leave Level 1. That's by design.",
    },
    peterActions: [
      {
        type: "sent",
        from: "peter@studioname.com",
        to: "marcus@clientco.com",
        subject: "Invoice #1047 — Follow-up",
        preview:
          "Hi Marcus, just following up on Invoice #1047 (issued Feb 18). This was due on March 3rd. Let me know if there's anything holding this up or if you need me to resend.",
        time: "9:02 AM",
        autonomyLevel: 2,
      },
      {
        type: "cc",
        from: "peter@studioname.com",
        to: "jess@freelancer.com",
        subject: "Brand assets — Friday deadline",
        preview:
          "Hey Jess, wanted to confirm we're still on track for the brand assets by Friday. The client kick-off is Monday so we'll need final files by EOD. Let me know if anything's changed.",
        time: "9:15 AM",
        autonomyLevel: 2,
      },
      {
        type: "calendar",
        from: "peter@studioname.com",
        to: "founder",
        subject: "PrintHouse meeting confirmed",
        preview:
          "Meeting confirmed with PrintHouse for March 24 at 2pm. Added to your calendar. They'll have proofs ready for review.",
        time: "10:30 AM",
        autonomyLevel: 3,
      },
      {
        type: "sent",
        from: "peter@studioname.com",
        to: "founder",
        subject: "Jess wants to move your Thursday meeting",
        preview:
          "Hey, Jess was wondering if we could move your meeting to 2pm. I've got her CC'd. Let me know and I'll update the calendar.",
        time: "11:45 AM",
        autonomyLevel: 1,
      },
      {
        type: "sent",
        from: "peter@studioname.com",
        to: "anna@vendor.com",
        subject: "Re: Equipment rental quote",
        preview:
          "Thanks Anna. The March 28-30 dates work. Can you confirm availability for two LED panels and the 10x10 backdrop? I'll send over the PO once confirmed.",
        time: "1:20 PM",
        autonomyLevel: 3,
      },
      {
        type: "cc",
        from: "peter@studioname.com",
        to: "marcus@clientco.com",
        subject: "Re: Invoice #1047 — Follow-up",
        preview:
          "Thanks Marcus, confirmed. We'll watch for the payment by Friday. Appreciate the quick reply.",
        time: "2:45 PM",
        autonomyLevel: 2,
      },
    ],
  },

  {
    slug: "james-for-clients",
    title: "AI Executive Assistant for Accountability & Task Management",
    caseStudy: "james-for-clients",
    createdAt: "2026-03-19",
    layout: "three-column",
    solutionEmphasis: "a persistent, stateful assistant that manages itself on behalf of people who would never set up an AI workflow",
    problems: [
      {
        label: "Everything Lives in Their Head",
        description:
          "The operator keeps their commitments, deadlines, and to-dos in their head or scattered across emails, texts, and sticky notes. There's no single place where everything lives. Things get forgotten. Not because they don't care, but because no system is doing the remembering for them.",
      },
      {
        label: "Tools Require the User to Show Up",
        description:
          "Project management tools like Asana, Todoist, and Monday require the user to maintain the system. They need to log in, update tasks, reorganize priorities. For someone who's already overwhelmed, adding another tool to manage is the last thing they need. The tool becomes one more thing that falls behind.",
      },
      {
        label: "AI Is Powerful but Inaccessible",
        description:
          "Tools like ChatGPT and Claude are incredibly capable, but they require the user to know how to prompt them, and they start fresh every conversation. They don't remember what you said yesterday. They don't message you in the morning. They don't track your commitments across sessions. For someone who isn't technical, they're a blank page every time.",
      },
      {
        label: "No One Is Following Up",
        description:
          "Without a system or a person keeping track, tasks slip quietly. There's no daily check-in, no morning reminder, no one saying 'this was due Friday, is it still on your radar?' The operator is both the doer and the accountability layer, and one of those always loses.",
      },
    ],
    solution: [
      {
        label: "Talk to James, Wherever You Are",
        description:
          "James lives in the channels the user already uses. Email today, WhatsApp tomorrow, Teams next week. The user doesn't install anything, learn anything, or change their behavior. They just talk to an email address the way they'd talk to a real assistant. James understands natural language and responds in seconds.",
      },
      {
        label: "The System Maintains Itself",
        description:
          "When the user says 'the permit thing is done and remind me to call the inspector Friday,' James marks the permit complete, creates the inspector task with a Friday due date, and confirms. The user never sees a database, a task board, or a settings page. They just talk. James organizes everything behind the scenes.",
      },
      {
        label: "Daily Briefing, Every Morning",
        description:
          "At 8am every day, James sends a morning briefing. What's due today. What's overdue. What's coming up. Prioritized by urgency. The user doesn't have to remember to check anything. The system reaches out to them. That's the entire accountability value: the assistant initiates, not the user.",
      },
      {
        label: "James Gets Smarter Over Time",
        description:
          "As we connect more systems — calendar, email summaries, CRM, even ERP data — James sees more context and gives better answers. The user doesn't need to know anything changed. They talk the same way they always have. James just understands more. Adding a data source is a backend configuration, not a user training session.",
      },
    ],
    results: [
      {
        label: "Zero Learning Curve",
        description: "No app, no login, no training. User emails or texts James from day one.",
        metric: "0",
      },
      {
        label: "Nothing Falls Through the Cracks",
        description: "Every commitment tracked, every deadline surfaced, every update logged automatically.",
        metric: "100%",
      },
      {
        label: "Daily Accountability",
        description: "Morning briefing delivered every day without the user having to do anything.",
        metric: "8am",
      },
      {
        label: "Cost vs. a Real EA",
        description: "A human executive assistant costs $3,000-5,000/month. James runs on AI infrastructure at a fraction of that, available 24/7, never forgets, never takes a day off.",
      },
    ],
    tagline: {
      text: "The user doesn't need to learn how to use AI.",
      emphasis: "They just need someone who remembers everything.",
    },
    peterActions: [
      {
        type: "sent",
        from: "james@assist.company.com",
        to: "zack@company.com",
        subject: "Your daily briefing — March 19",
        preview:
          "Good morning, Zack. Here's your briefing for Wednesday.\n\nDUE TODAY\n- Send updated proposal to Metalex\n\nUP NEXT\n- Follow up with Dave on compliance docs (HIGH) — due tomorrow\n- Review conference venue options — due Friday\n\n5 items on your plate today.",
        time: "8:00 AM",
        autonomyLevel: 3,
      },
      {
        type: "sent",
        from: "zack@company.com",
        to: "james@assist.company.com",
        subject: "Re: Your daily briefing — March 19",
        preview:
          "metalex proposal is done. also need to call simon about the site visit and push the venue thing to next week",
        time: "8:12 AM",
        autonomyLevel: 1,
      },
      {
        type: "sent",
        from: "james@assist.company.com",
        to: "zack@company.com",
        subject: "Re: Your daily briefing — March 19",
        preview:
          "Metalex proposal marked done. Added the Simon call and pushed venue options to next week. 4 items left.",
        time: "8:12 AM",
        autonomyLevel: 3,
      },
      {
        type: "sent",
        from: "zack@company.com",
        to: "james@assist.company.com",
        subject: "quick q",
        preview:
          "what do i have left this week?",
        time: "2:30 PM",
        autonomyLevel: 1,
      },
      {
        type: "sent",
        from: "james@assist.company.com",
        to: "zack@company.com",
        subject: "Re: quick q",
        preview:
          "3 items this week:\n1. Follow up with Dave on compliance docs (HIGH) — due tomorrow\n2. Call Simon about the site visit — no due date\n3. Promise Supply API integration — no due date\n\nVenue options pushed to next week.",
        time: "2:30 PM",
        autonomyLevel: 3,
      },
      {
        type: "sent",
        from: "zack@company.com",
        to: "james@assist.company.com",
        subject: "Re: quick q",
        preview:
          "simon call is done. and actually drop the promise supply thing for now",
        time: "4:45 PM",
        autonomyLevel: 1,
      },
      {
        type: "sent",
        from: "james@assist.company.com",
        to: "zack@company.com",
        subject: "Re: quick q",
        preview:
          "Simon call marked done, Promise Supply dropped. You've got 1 item left this week: compliance docs follow-up with Dave tomorrow.",
        time: "4:45 PM",
        autonomyLevel: 3,
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
