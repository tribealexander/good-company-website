// Local case studies - hardcoded for cases not in Strapi CMS

import type { CaseStudy } from "./strapi";

export const LOCAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: "technician-note-compliance",
    slug: "technician-note-compliance",
    department: "Operations",
    title: "AI-Powered Technician Note Compliance",
    description:
      "How we helped a B2B service business with 30+ technicians eliminate six figures in write-offs by automating note compliance with AI.",
    problem:
      "Technicians weren't documenting their work properly. Invoices were being written off due to missing information, billing was slow, and charges were disputed because there was no proof of work. An audit revealed over six figures in write-offs.",
    solution:
      "We created an automated AI assessment system that runs daily at 5 PM. It pulls every technician note, scores it against a compliance checklist (time logged, who they spoke with, materials used), generates a daily report, and auto-pings non-compliant techs on Slack. We paired compliance tracking with a quarterly bonus to incentivize good documentation.",
    results: [
      { text: "Write-offs eliminated", stat: "$200K+" },
      { text: "Hours saved per week for ops manager", stat: "5+" },
      { text: "Compliance rate achieved", stat: "90%+" },
    ],
    videoUrl: "https://youtu.be/TgYH2Vi-yrM",
    videoType: "youtube",
    thumbnailUrl: "https://img.youtube.com/vi/TgYH2Vi-yrM/sddefault.jpg",
    featured: false,
    order: 1,
  },
  {
    id: "customer-success-workflow-automation",
    slug: "customer-success-workflow-automation",
    department: "Operations",
    title: "Customer Success Workflow Automation",
    description:
      "Automated reporting and early warning system for a managed services provider with 200+ clients.",
    problem:
      "This MSP had 200+ clients and a three-person customer success team. Every week, they spent 10+ hours manually pulling reports from ConnectWise—digging through ticket data, response times, and client feedback to figure out which accounts needed attention.\n\nBy the time they spotted a problem, the client was usually already frustrated. One CS manager described it as \"constantly playing defense.\" They were always reacting to fires instead of preventing them.\n\nThe data existed to catch problems early. It just wasn't surfaced in a way anyone could actually use.",
    solution:
      "We built an automated early warning system that pulls data from ConnectWise every night and flags accounts based on three risk factors: ticket volume trending up, response times slowing down, and satisfaction scores dropping.\n\nEvery Monday morning, the CS team gets a single report showing:\n- Accounts trending negative (7-day and 30-day view)\n- Accounts with no proactive contact in 30+ days\n- Accounts with open escalations or unresolved complaints\n\nNo more pulling reports. No more guessing. The system surfaces problems before clients have to complain.\n\nWe also built a simple Slack integration—when an account crosses a risk threshold, the assigned CS rep gets a DM with context and suggested next steps.",
    results: [
      { text: "Reduction in reporting time", stat: "80%" },
      { text: "At-risk accounts caught before churn", stat: "3" },
      { text: "Hours saved per week", stat: "10+" },
    ],
    videoUrl: "https://www.youtube.com/watch?v=okF5gOTX9uM",
    videoType: "youtube",
    thumbnailUrl: "https://img.youtube.com/vi/okF5gOTX9uM/maxresdefault.jpg",
    featured: true,
    order: 2,
  },
  {
    id: "the-come-up",
    slug: "the-come-up",
    department: "Operations",
    title: "Automating the Editing Process for My Interview Series",
    description:
      "An AI editing pipeline that turns hour-long interviews into polished articles. Not AI writing — AI editing. Preserves voice, removes the rambles.",
    problem:
      "The Come Up is an interview series where I sit down with business owners for an hour, talk through the ins and outs of their business, and publish it as a written article.\n\nI was paying an editor $500+ a month to turn transcripts into finished pieces. But even with a dedicated contractor, I'd wait weeks — sometimes months — to get something back.\n\nThe delay was embarrassing. I'd have a great conversation, build real rapport, and then go silent for weeks. By the time I sent them the finished article, the momentum was gone. It undid the relationship-building the interview was supposed to create.\n\nAnd for a passion project generating no revenue, $500/month plus constant project management was hard to justify.",
    solution:
      "I replaced the contractor with an AI editing pipeline. Not AI writing — editing.\n\nThe system takes a raw transcript, identifies the key themes, cleans up the rambles and repetition, and formats it into a polished article. Then it quality-checks its own work against style guidelines.\n\nThe whole process is automated. A guest books, we record, the transcript gets processed, and a finished draft lands in my inbox ready for review.\n\nMy only job now is the part I actually enjoy: having the conversation, reviewing the draft, and hitting send.",
    results: [
      { text: "$500+/month saved", stat: "$500+" },
      { text: "Turnaround in minutes, not weeks", stat: "Minutes" },
      { text: "No limit on throughput", stat: "Unlimited" },
    ],
    videoUrl: "https://youtu.be/GczG77hxGPI",
    videoType: "youtube",
    thumbnailUrl: "https://img.youtube.com/vi/GczG77hxGPI/maxresdefault.jpg",
    featured: true,
    order: 0,
  },
];

export function getLocalCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return LOCAL_CASE_STUDIES.find((cs) => cs.slug === slug);
}
