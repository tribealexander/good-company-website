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
      "The Come Up is an interview series where I sit down with business owners for an hour, talk through the ins and outs of their business, and publish it as a written article.\n\nI was paying an editor $500+ a month to turn transcripts into finished pieces. But even with a dedicated contractor, I'd wait weeks — sometimes months — to get something back.\n\nThe delay was embarrassing. I'd have a great conversation, build real rapport, and then go silent for weeks. By the time I sent them the finished article, the momentum was gone. It undid the relationship-building the interview was supposed to create.\n\nAnd for a passion project generating no revenue, $500/month plus constant project management was hard to justify.",
    solution:
      "I replaced the contractor with an AI editing pipeline. Not AI writing — editing.\n\nThe system takes a raw transcript, identifies the key themes, cleans up the rambles and repetition, and formats it into a polished article. Then it quality-checks its own work against style guidelines.\n\nThe whole process is automated. A guest books, we record, the transcript gets processed, and a finished draft lands in my inbox ready for review.\n\nMy only job now is the part I actually enjoy: having the conversation, reviewing the draft, and hitting send.",
    results: [
      { text: "monthly savings", stat: "$500+" },
      { text: "turnaround", stat: "Minutes" },
      { text: "throughput", stat: "Unlimited" },
    ],
    videoUrl: "https://youtu.be/GczG77hxGPI",
    videoType: "youtube",
    featured: true,
    order: 0,
  },
];

export function getLocalCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return LOCAL_CASE_STUDIES.find((cs) => cs.slug === slug);
}
