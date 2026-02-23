// Local case studies - hardcoded for cases not in Strapi CMS

import type { CaseStudy } from "./strapi";

export const LOCAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: "the-come-up",
    slug: "the-come-up",
    department: "Operations",
    title: "The Come Up: Interview-to-Article Pipeline",
    description:
      "An AI editing pipeline that turns hour-long interviews into polished articles. Not AI writing — AI editing. Preserves voice, removes the rambles.",
    problem:
      "I run an interview series called The Come Up. I sit down with business owners for about an hour, we talk the ins and outs of their business, and it gets published as a written article.\n\nTurning those conversations into published work was costing about $500 a month. It required constant project management, and I'd still be waiting weeks — sometimes months — to get a finished piece back.\n\nFor a passion project with no revenue, it was hard to justify. Especially if I wanted to scale it up.",
    solution:
      "I built an AI editing pipeline. Not AI writing — just editing.\n\nIt takes the full transcript, identifies the themes, edits it to a polished format, and quality checks its own work.\n\nThe whole thing is automated end to end. Guest books, we record, AI processes it, and a finished draft lands in my inbox.\n\nThe only thing I have to do is what I like doing: interview, review the draft, hit send.",
    results: [
      { text: "monthly cost", stat: "$0" },
      { text: "turnaround time", stat: "Minutes" },
      { text: "throughput", stat: "Unlimited" },
    ],
    resultsTimeframe: "immediately",
    videoUrl: "https://youtu.be/GczG77hxGPI",
    videoType: "youtube",
    featured: true,
    order: 0,
  },
];

export function getLocalCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return LOCAL_CASE_STUDIES.find((cs) => cs.slug === slug);
}
