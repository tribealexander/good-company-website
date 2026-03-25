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
    title: "Paul for KCS Operations",
    subtitle:
      "Everything we've learned from the calls with Catarina and David, what's already running, and where we think we should go next.",
    date: "2026-03-25",
    sections: [
      {
        title: "What came out of the calls",
        subtitle: "We sat down with Catarina and David separately in February, and again with Catarina in November. Here's what we heard.",
        content: `
          <p>Every problem traces back to the same thing: <strong>information doesn't get where it needs to go.</strong> The work happens, but the record of it ends up scattered across Halo, Teams, email, phone, and Eddie's DMs.</p>
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
        title: "The daily grind",
        subtitle: "These are specific things Catarina and David described spending their time on.",
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
                <p class="font-semibold text-[#1A1A1A]">No way to separate urgent from not urgent</p>
                <p class="text-sm text-[#555] mt-1">David described his triage as: new tickets first, client replies second, yesterday's backlog third. Invoicing and feedback only happen "if time allows." There's no framework for it. Everything feels equally urgent.</p>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: "The thing that changes everything",
        subtitle: "Catarina and David close tickets. The technicians don't.",
        variant: "highlight",
        content: `
          <p>The obvious fix is "make techs fill out required fields before closing a ticket." But they don't close tickets. Catarina and David do. So required fields just add more work to the two people who are already overloaded.</p>
          <p class="mt-4">Whatever we build has to catch the information <strong>when the tech finishes the work</strong>, not when Catarina tries to invoice it days later.</p>
          <p class="mt-4">And here's the thing: the techs already share updates in real time. They just do it in Teams DMs instead of Halo. The information exists. It's just not making it to the ticket.</p>
        `,
      },
      {
        title: "What we want to build: Paul",
        subtitle: "An AI assistant that lives in Teams and talks to Halo.",
        content: `
          <p>Paul is already built as Zack's personal task assistant. What we're proposing is giving Paul access to Halo, putting him in a Teams channel, and letting the whole operations team use him.</p>
          <p class="mt-4">It works in two directions.</p>

          <div class="mt-8 rounded-xl border border-[#E0DBD3] bg-[#F7F5F0] p-6">
            <div class="space-y-6">
              <div>
                <p class="font-semibold text-[#006747]">Zack, Catarina, or David ask Paul a question</p>
                <p class="text-sm text-[#555] mt-1">They type in Teams, Paul pulls the answer from Halo:</p>
                <div class="mt-2 space-y-2">
                  <div class="rounded-lg bg-white px-4 py-2 text-sm border border-[#E0DBD3]">"What's sitting unassigned right now?"</div>
                  <div class="rounded-lg bg-white px-4 py-2 text-sm border border-[#E0DBD3]">"What did we tell the client on ticket 4521?"</div>
                  <div class="rounded-lg bg-white px-4 py-2 text-sm border border-[#E0DBD3]">"What's ready for me to close and invoice?"</div>
                  <div class="rounded-lg bg-white px-4 py-2 text-sm border border-[#E0DBD3]">"How are Angel's notes looking this week?"</div>
                  <div class="rounded-lg bg-white px-4 py-2 text-sm border border-[#E0DBD3]">"What should the field team's schedule look like today?"</div>
                </div>
                <p class="text-sm text-[#555] mt-3">No reports to run. No dashboards to check. Just ask.</p>
              </div>

              <div class="border-t border-[#E0DBD3] pt-6">
                <p class="font-semibold text-[#006747]">Eddie or another tech posts an update in Teams</p>
                <p class="text-sm text-[#555] mt-1">Instead of opening Halo, they just message:</p>
                <div class="mt-2 rounded-lg bg-white px-4 py-3 text-sm border border-[#E0DBD3]">"Three Waters AP install done, took 2 hours. Left old unit with front desk. Need to come back Thursday for the second floor."</div>
                <p class="text-sm text-[#555] mt-3">Paul figures out which ticket it belongs to, pulls out the key details (time, status, materials, next steps), asks Eddie to confirm, and writes it to Halo. Eddie never opens Halo. Catarina doesn't spend five days chasing him.</p>
              </div>

              <div class="border-t border-[#E0DBD3] pt-6">
                <p class="font-semibold text-[#006747]">Paul flags things before they become problems</p>
                <p class="text-sm text-[#555] mt-1">Every afternoon, Paul checks open tickets for promises that haven't been kept:</p>
                <div class="mt-2 rounded-lg bg-white px-4 py-3 text-sm border border-[#E0DBD3]">"3 tickets have promises coming due today. Ticket #4521: Eddie told the client the replacement AP would be in by end of week. No update since March 12."</div>
                <p class="text-sm text-[#555] mt-3">That's the kind of thing that damages client relationships when it slips through the cracks.</p>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: "What this actually fixes",
        variant: "table",
        content: `
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-[#E0DBD3]">
                  <th class="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">Today</th>
                  <th class="text-left py-3 font-semibold text-[#1A1A1A]">With Paul</th>
                </tr>
              </thead>
              <tbody class="text-[#555]">
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Catarina chases Angel for days for a part name</td>
                  <td class="py-3 text-[#006747]">Angel tells Paul in Teams right when he finishes. It's on the ticket before Catarina looks at it.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">David checks Teams, email, phone before touching any ticket</td>
                  <td class="py-3 text-[#006747]">Teams messages are already on the ticket. Nothing to cross-check.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Catarina manually reviews every ticket to see if it's ready to invoice</td>
                  <td class="py-3 text-[#006747]">"Paul, what's ready to close?" and she gets a pre-sorted list.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Manual ticket assignment every morning from the unassigned pile</td>
                  <td class="py-3 text-[#006747]">"Paul, build today's schedule" with assignments based on site, skills, and workload.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Client commitments slip through because nobody tracked them</td>
                  <td class="py-3 text-[#006747]">Paul reads every ticket thread and flags promises that are coming due or overdue.</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Backlog numbers require pulling a report</td>
                  <td class="py-3 text-[#006747]">"Paul, how's this week compared to last?" Instant answer.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Why this works when other things haven't",
        content: `
          <p>In November, the team tried automated notes in Halo. The techs pushed back and it got rolled back to manual.</p>
          <p class="mt-4">The issue wasn't the idea. It was the friction. Opening Halo on your phone after a long job and filling out a form feels like paperwork. Messaging in Teams feels like texting. The techs are already doing it. They're just messaging each other instead of a system that captures it.</p>
          <p class="mt-4">Paul doesn't ask anyone to change what they're doing. It just makes sure what they're already doing ends up in the right place.</p>

          <div class="mt-8 grid gap-4 md:grid-cols-3">
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5 text-center">
              <p class="text-2xl font-mono font-bold text-[#B8860B]">0</p>
              <p class="text-sm text-[#555] mt-1">new tools for techs to learn</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5 text-center">
              <p class="text-2xl font-mono font-bold text-[#B8860B]">0</p>
              <p class="text-sm text-[#555] mt-1">behavior changes required</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5 text-center">
              <p class="text-2xl font-mono font-bold text-[#B8860B]">1</p>
              <p class="text-sm text-[#555] mt-1">place for everything</p>
            </div>
          </div>
        `,
      },
      {
        title: "How a ticket actually flows",
        subtitle: "Start to finish, with Paul in the middle.",
        variant: "dark",
        content: `
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">1</span>
              </div>
              <div>
                <p class="font-semibold text-white">Ticket comes in</p>
                <p class="text-sm text-[#A8D5C2]">Auto-assigned to Eddie based on the site and what kind of work it is</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">2</span>
              </div>
              <div>
                <p class="font-semibold text-white">It's on Eddie's calendar</p>
                <p class="text-sm text-[#A8D5C2]">He knows what he's doing today before he leaves the house</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">3</span>
              </div>
              <div>
                <p class="font-semibold text-white">Eddie does the work</p>
                <p class="text-sm text-[#A8D5C2]">Installs the AP, talks to the client, wraps up</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">4</span>
              </div>
              <div>
                <p class="font-semibold text-white">Eddie messages Paul in Teams</p>
                <p class="text-sm text-[#A8D5C2]">"Three Waters done, 2 hours, left old unit at front desk, back Thursday for second floor"</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">5</span>
              </div>
              <div>
                <p class="font-semibold text-white">Paul puts it on the ticket</p>
                <p class="text-sm text-[#A8D5C2]">Time: 2 hrs. Status: partial. Materials: old unit left. Next: return Thursday. Contact: front desk.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">6</span>
              </div>
              <div>
                <p class="font-semibold text-white">If something's missing, Paul asks</p>
                <p class="text-sm text-[#A8D5C2]">"Got it. Did you use any new materials, or just the existing unit?" Just a quick follow-up in chat, not a form.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">7</span>
              </div>
              <div>
                <p class="font-semibold text-white">Catarina opens the ticket. It's ready.</p>
                <p class="text-sm text-[#A8D5C2]">No chasing. No cross-checking. No five-day wait.</p>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: "What's already running",
        subtitle: "Paul builds on stuff we've had in place for a while.",
        content: `
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                <p class="text-sm font-semibold text-[#1A1A1A]">Daily compliance report</p>
              </div>
              <p class="text-sm text-[#555]">Every evening at 5:15, AI scores every tech note against the compliance checklist. You get the color-coded email, it all logs to the spreadsheet. This has been running for weeks.</p>
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
              <p class="text-sm text-[#555]">248 contact changes prepped, picker tool built. About 75% done, waiting on the Halo side to finish up.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                <p class="text-sm font-semibold text-[#1A1A1A]">Role clarity recommendations</p>
              </div>
              <p class="text-sm text-[#555]">The seven operational problems from the Catarina and David calls. Documented with recommendations. Ready for review whenever you want to go through it.</p>
            </div>
          </div>
          <p class="mt-6 text-sm text-[#555]">The compliance report already proves that AI can read Halo data, assess quality, and deliver something useful every day. Paul is the same idea, but interactive and real-time instead of a scheduled email.</p>
        `,
      },
      {
        title: "How we'd roll it out",
        subtitle: "Start small, prove it works, then expand.",
        content: `
          <div class="space-y-6">
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 1</span>
                <p class="font-semibold text-[#1A1A1A]">Paul answers questions from Halo</p>
              </div>
              <p class="text-sm text-[#555]">Private Teams channel with Zack, Catarina, and David. Paul can look up tickets, check workloads, pull backlog numbers, read ticket histories. Read-only. No risk.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 2</span>
                <p class="font-semibold text-[#1A1A1A]">Paul can make changes (with your okay)</p>
              </div>
              <p class="text-sm text-[#555]">"Assign ticket 4521 to Eddie." Paul shows you what it's about to do, you confirm, it does it. Nothing happens without approval.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 3</span>
                <p class="font-semibold text-[#1A1A1A]">Techs start updating through Paul</p>
              </div>
              <p class="text-sm text-[#555]">A #field-updates channel in Teams. Techs post what they did, Paul matches it to the right ticket, confirms, and writes it to Halo. Compliance scoring happens right then, not at 5:15pm.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 4</span>
                <p class="font-semibold text-[#1A1A1A]">Paul starts telling you things before you ask</p>
              </div>
              <p class="text-sm text-[#555]">Promises about to be broken. Tickets sitting too long. Schedule suggestions for the field team. Paul goes from answering questions to surfacing what matters.</p>
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
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Private channel only.</strong> Paul sits in a locked-down Teams channel. Only the people you choose can talk to it.</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Nothing changes without your say-so.</strong> Paul confirms before writing anything to Halo. Always.</p>
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
