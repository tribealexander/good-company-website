// Presentations - private, unlisted pages for client sharing
// Access via direct URL: /presentations/[slug]

export interface PresentationSection {
  title: string;
  subtitle?: string;
  content: string; // HTML
  variant?: "default" | "highlight" | "dark" | "table";
}

export interface Presentation {
  slug: string;
  clientName: string;
  title: string;
  subtitle: string;
  date: string;
  sections: PresentationSection[];
}

const PRESENTATIONS: Presentation[] = [
  {
    slug: "kcs-operations-automation",
    clientName: "KCS",
    title: "KCS Operations: What Can Be Automated",
    subtitle:
      "A summary of what we found in our calls with Catarina and David, what's already being automated, and what we recommend next.",
    date: "2026-03-25",
    sections: [
      {
        title: "What came out of the calls",
        subtitle:
          "We sat down with Catarina and David separately in February, and again with Catarina in November. Here's what we heard.",
        content: `
          <p>Every problem traces back to the same thing: <strong>information doesn't get where it needs to go.</strong> The work gets done, but the record of it ends up scattered across Halo, Teams, email, phone, and DMs.</p>
          <div class="grid gap-4 md:grid-cols-2 mt-6">
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">Information lives everywhere</p>
              <p class="text-sm text-[#555]">Halo, Teams, email, OpenPhone. Nobody has the full picture on any ticket. David said he has to check all four before he can even start on something new.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">The day is all reaction</p>
              <p class="text-sm text-[#555]">Neither Catarina nor David could describe a typical day. First 2-3 hours and last 2-3 hours are the busiest. Everything in between depends on what blows up.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">Invoicing gets squeezed</p>
              <p class="text-sm text-[#555]">Catarina does invoicing during lunch (12:00-1:30) because that's the only calm window. The most important revenue task happens in whatever time is left over.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">Tech leads find out too late</p>
              <p class="text-sm text-[#555]">No QC on field work. When something goes wrong, David described being stuck in "limbo" because it's too technical for him but Jeff or Danny don't know about it yet.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">North is still rough</p>
              <p class="text-sm text-[#555]">Adrian handles 90% of North tickets. Keys is stabilizing under David, but North doesn't have the same structure yet.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">Nowhere to park non-urgent stuff</p>
              <p class="text-sm text-[#555]">Halo bugs, process improvements, training ideas. They come up during the day but there's no system for them. They end up getting discussed at 6pm because there's no other time.</p>
            </div>
          </div>
        `,
      },
      {
        title: "The busy work",
        subtitle:
          "These are specific things Catarina and David described spending their time on, every day.",
        content: `
          <div class="space-y-4">
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF2F2] flex items-center justify-center">
                <span class="text-sm">1</span>
              </div>
              <div>
                <p class="font-semibold text-[#1A1A1A]">Chasing techs for missing info</p>
                <p class="text-sm text-[#555] mt-1">Catarina told us she asked Angel for a part name <strong>five days in a row</strong> before he gave it to her. This isn't a one-off. It happens with multiple techs, multiple tickets, every week.</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF2F2] flex items-center justify-center">
                <span class="text-sm">2</span>
              </div>
              <div>
                <p class="font-semibold text-[#1A1A1A]">Checking four systems before doing anything</p>
                <p class="text-sm text-[#555] mt-1">David has to check Teams, email, OpenPhone, and other Halo tickets before he touches anything new. He said email replies come through as the individual person, not the company. His words: "there's a whole other universe you need to check."</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF2F2] flex items-center justify-center">
                <span class="text-sm">3</span>
              </div>
              <div>
                <p class="font-semibold text-[#1A1A1A]">Assigning tickets by hand every morning</p>
                <p class="text-sm text-[#555] mt-1">Tickets sit in an unassigned backlog overnight. Every morning, Catarina and David go through them one by one, figuring out who's available, who's at which site, what skills are needed. Techs don't know their schedule until they're told.</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF2F2] flex items-center justify-center">
                <span class="text-sm">4</span>
              </div>
              <div>
                <p class="font-semibold text-[#1A1A1A]">Materials showing up with no context</p>
                <p class="text-sm text-[#555] mt-1">Something arrives at a property. It's noted on a ticket. But nobody knows who ordered it, where it came from, or whether to bill the client for it.</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF2F2] flex items-center justify-center">
                <span class="text-sm">5</span>
              </div>
              <div>
                <p class="font-semibold text-[#1A1A1A]">Manually correcting Halo automation errors on invoices</p>
                <p class="text-sm text-[#555] mt-1">Catarina catches cases where Halo adds wrong hours to invoices. The automation tool that's supposed to save time is creating more QC work.</p>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: "The prioritization problem",
        subtitle:
          "They don't have a system. It's not a training issue, it's a structural one.",
        variant: "highlight",
        content: `
          <p>David described his daily triage as: new tickets first, client replies second, yesterday's backlog third. Invoicing and feedback only happen "if time allows."</p>
          <p class="mt-4">There's no framework for separating urgent from non-urgent. <strong>Everything feels equally important because nothing is classified.</strong></p>
          <p class="mt-4">Non-urgent improvements (Halo bugs, process changes, training needs) get discussed at 6pm because there's literally nowhere to park them during the day. There's no internal backlog, no "important but not today" list.</p>
          <p class="mt-4">And when a ticket gets stuck because it's too technical for David but the tech leads don't know about it, it just sits. There's no escalation path. David called it being in "limbo."</p>
        `,
      },
      {
        title: "What can be automated",
        subtitle: "Some of this is Halo configuration. Some of it needs AI. Here's the full picture.",
        content: `
          <div class="space-y-6">
            <div>
              <p class="font-semibold text-[#006747] text-lg mb-3">Things Halo can do out of the box (just needs to be configured)</p>
              <div class="space-y-3">
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Auto-assign tickets by site, client, or category</p>
                  <p class="text-sm text-[#555] mt-1">Halo has built-in assignment rules. North region sites go to the North tech pool, Keys sites go to Keys techs, Three Waters always goes to a specific tech. This eliminates 70-80% of the daily manual dispatch. Catarina and David would only handle the exceptions.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">SLA escalation rules for priority classification</p>
                  <p class="text-sm text-[#555] mt-1">Tickets can auto-classify by priority with defined response and resolution targets. When a threshold is about to breach, Halo escalates automatically. This gives them the urgent vs. non-urgent framework they're missing.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Technician calendar view</p>
                  <p class="text-sm text-[#555] mt-1">When tickets auto-assign, they can also appear on the tech's calendar in Halo. Eddie would know what he's doing tomorrow before he leaves the house. No morning briefing needed.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Recurring tickets for scheduled maintenance</p>
                  <p class="text-sm text-[#555] mt-1">Things like monthly camera checks or quarterly network reviews can auto-create at set intervals. Nobody has to remember to make the ticket.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Internal backlog ticket type</p>
                  <p class="text-sm text-[#555] mt-1">Create a dedicated "Internal Improvement" ticket type with categories like Halo Bug, Process Improvement, Training Need. The 6pm conversations become a visible queue instead of informal hallway talk.</p>
                </div>
              </div>
            </div>

            <div>
              <p class="font-semibold text-[#006747] text-lg mb-3">Things that need AI</p>
              <div class="space-y-3">
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Ticket completeness scoring</p>
                  <p class="text-sm text-[#555] mt-1">Before Catarina or David even look at a ticket, AI reads all the notes on it and scores whether it's ready to close and invoice. "Score: 3/10. Missing: material specs, billing attribution, next steps." Same approach as the daily compliance report, but applied to the full ticket instead of individual notes.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Promise tracking</p>
                  <p class="text-sm text-[#555] mt-1">AI reads the client-facing messages on every open ticket and identifies commitments: delivery dates, follow-ups promised, callbacks scheduled. Flags anything overdue or at risk. This is the stuff that damages client relationships when it slips through.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Capturing tech updates from Teams</p>
                  <p class="text-sm text-[#555] mt-1">The team tried automated notes in Halo in November 2025 and the techs pushed back. They won't fill out forms. But they already message in Teams. AI can read a Teams message like "Three Waters done, 2 hours, left old unit with front desk," match it to the right ticket, extract the structured data, and write it to Halo. The tech never opens Halo. Catarina doesn't chase them.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Material and purchase tracking</p>
                  <p class="text-sm text-[#555] mt-1">AI reads ticket notes mentioning materials, orders, deliveries and extracts: what was ordered, who ordered it, PO number, billable or not, delivery status. Writes a structured summary note so Catarina doesn't have to piece it together from scattered updates.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Smart dispatch for edge cases</p>
                  <p class="text-sm text-[#555] mt-1">Auto-assign rules handle 80% of tickets. For the remaining 20% (VIP clients, unusual skill requirements, scheduling conflicts), AI suggests assignments based on tech skills, current workload, location, and client history.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Email-to-ticket matching</p>
                  <p class="text-sm text-[#555] mt-1">Incoming emails that land in Halo but aren't linked to a ticket (because the sender shows as an individual, not a company) can be auto-matched by domain and linked to the right open ticket. Cuts down on David's cross-checking.</p>
                </div>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: "One important thing to understand",
        subtitle: "Catarina and David close tickets. The technicians don't.",
        variant: "highlight",
        content: `
          <p>The obvious answer to "how do we get better tech notes?" is "make them fill out required fields." But the techs don't close tickets. Catarina and David do. Required fields on close just adds more work to the two people who are already overloaded.</p>
          <p class="mt-4">Whatever we build has to catch the information <strong>when the tech finishes the work</strong>, not when Catarina tries to invoice it days later. That's why the Teams capture approach matters. It meets the techs where they already are.</p>
        `,
      },
      {
        title: "How all of this connects",
        subtitle: "Instead of building six separate tools, we put one AI assistant in Teams that ties everything together.",
        content: `
          <p>We've been calling it Paul. It's the same assistant we've been building for Zack, but with access to Halo and available to the whole operations team through Microsoft Teams.</p>

          <div class="overflow-x-auto mt-6">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-[#E0DBD3]">
                  <th class="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">Today</th>
                  <th class="text-left py-3 font-semibold text-[#1A1A1A]">With Paul in Teams</th>
                </tr>
              </thead>
              <tbody class="text-[#555]">
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Catarina chases Angel for days for a part name</td>
                  <td class="py-3 text-[#006747]">Angel tells Paul in Teams when he finishes. It's on the ticket before Catarina looks at it.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">David checks Teams, email, phone before touching any ticket</td>
                  <td class="py-3 text-[#006747]">Teams messages are already on the ticket. Nothing to cross-check.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Catarina manually reviews every ticket to figure out what's ready</td>
                  <td class="py-3 text-[#006747]">"Paul, what's ready to close?" Pre-sorted list.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Manual ticket assignment every morning</td>
                  <td class="py-3 text-[#006747]">80% auto-assigned by rules. "Paul, handle the rest" for edge cases.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Client promises slip through and nobody notices until they complain</td>
                  <td class="py-3 text-[#006747]">Paul flags unfulfilled commitments before they become problems.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Need a report to see where the backlog stands</td>
                  <td class="py-3 text-[#006747]">"Paul, how's this week vs last?" Instant.</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">"What did we tell the client?" requires reading every note on the ticket</td>
                  <td class="py-3 text-[#006747]">"Paul, what was promised on ticket 4521?" Paul reads the whole thread and summarizes.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="mt-6 text-sm text-[#555]">The daily compliance email stays. That's not going anywhere. It's the audit trail. Paul is the live, interactive layer on top of everything else.</p>
        `,
      },
      {
        title: "What's already running",
        content: `
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                <p class="text-sm font-semibold text-[#1A1A1A]">Daily compliance report</p>
              </div>
              <p class="text-sm text-[#555]">Every evening at 5:15, AI scores every tech note against the compliance checklist. Color-coded email, full history in the spreadsheet. Been running for weeks.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                <p class="text-sm font-semibold text-[#1A1A1A]">Overtime and expense tracking</p>
              </div>
              <p class="text-sm text-[#555]">Replaced the Zapier + Microsoft Forms setup. Techs submit overtime and receipts on the KCS site, weekly summary goes out Saturday morning.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
                <p class="text-sm font-semibold text-[#1A1A1A]">Customer check-ins</p>
              </div>
              <p class="text-sm text-[#555]">248 contact changes prepped, picker tool built. About 75% done, waiting on the Halo side to finish.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                <p class="text-sm font-semibold text-[#1A1A1A]">Role clarity recommendations</p>
              </div>
              <p class="text-sm text-[#555]">The seven problems from the Catarina and David calls. Documented with recommendations. Ready for review.</p>
            </div>
          </div>
        `,
      },
      {
        title: "How we'd roll it out",
        subtitle: "Halo configuration first (quick wins), then Paul (the bigger play).",
        content: `
          <div class="space-y-6">
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 1</span>
                <p class="font-semibold text-[#1A1A1A]">Halo configuration</p>
              </div>
              <p class="text-sm text-[#555]">Set up auto-assign rules by site and client. Enable technician calendar view. Create the internal backlog ticket type. Configure SLA escalation rules. These are all built into Halo already, they just need to be turned on and configured for how KCS works.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 2</span>
                <p class="font-semibold text-[#1A1A1A]">Paul reads from Halo</p>
              </div>
              <p class="text-sm text-[#555]">Private Teams channel for Zack, Catarina, and David. Paul can look up tickets, check workloads, pull backlog numbers, read ticket histories, summarize what was promised to clients. Read-only. No risk.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 3</span>
                <p class="font-semibold text-[#1A1A1A]">Paul writes to Halo (with confirmation)</p>
              </div>
              <p class="text-sm text-[#555]">"Assign ticket 4521 to Eddie." Paul shows what it's about to do, you confirm, it does it. Nothing changes without approval.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 4</span>
                <p class="font-semibold text-[#1A1A1A]">Techs update through Paul</p>
              </div>
              <p class="text-sm text-[#555]">A #field-updates channel in Teams. Techs post what they did, Paul matches it to the right ticket, confirms, and writes it to Halo. Compliance scoring happens right then instead of at 5:15pm.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 5</span>
                <p class="font-semibold text-[#1A1A1A]">Paul gets proactive</p>
              </div>
              <p class="text-sm text-[#555]">Promise tracking. Stuck ticket alerts. Smart dispatch suggestions. Paul goes from answering questions to surfacing what matters before you think to ask.</p>
            </div>
          </div>
        `,
      },
      {
        title: "Your data stays yours",
        content: `
          <p>Paul accesses the same Halo data your team already sees when they log in. Nothing new gets exposed.</p>
          <div class="mt-6 space-y-3">
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Same channels as today.</strong> You already discuss clients in Teams and look things up in Halo. Paul uses the same paths.</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Private channel only.</strong> Only the people you choose can talk to Paul.</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Nothing changes without your say-so.</strong> Paul confirms before writing anything to Halo.</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Can't delete anything.</strong> Paul can add notes and update tickets. It can't delete.</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">AI doesn't keep your data.</strong> Same setup as the compliance report. The AI processes what it needs and doesn't store or learn from it.</p>
            </div>
          </div>
        `,
      },
    ],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getPresentationBySlug(
  slug: string
): Presentation | undefined {
  return PRESENTATIONS.find((p) => p.slug === slug);
}

export function getAllPresentationSlugs(): string[] {
  return PRESENTATIONS.map((p) => p.slug);
}
