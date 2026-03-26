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
          "Based on calls with Catarina and David over the past several months. Their feedback, along with some of our observations.",
        content: `
          <div class="space-y-5">
            <div>
              <p class="font-semibold text-[#1A1A1A]">Cross-channel problem</p>
              <p class="text-sm text-[#555] mt-1">David said he has to check Halo, Teams, email, and OpenPhone before he can start on anything new. His words: "there's a whole other universe you need to check." This is fair feedback. Technician note quality has improved dramatically (from 8% compliance to 90%+ since the compliance report started), so on-ticket information is much better. The remaining gap is work happening in Teams, phone, and email that never makes it to the ticket.</p>
            </div>
            <div>
              <p class="font-semibold text-[#1A1A1A]">Chasing techs for missing info</p>
              <p class="text-sm text-[#555] mt-1">Catarina told us she asked Angel for a part name <strong>five days in a row</strong> before he gave it to her. This isn't a one-off. It happens with multiple techs, multiple tickets, every week.</p>
            </div>
            <div>
              <p class="font-semibold text-[#1A1A1A]">Daily dispatch can't keep up</p>
              <p class="text-sm text-[#555] mt-1">Catarina and David adopted a system of unassigning and reassigning tickets daily based on who's available. We let them run with it knowing it wasn't a long-term fix. They can't keep up with it at this volume, so it's not even being followed consistently, and the board is messier than if they'd never tried it. We've raised that tickets should be assigned immediately when they come in, with scheduling handled through appointments and calendar, but that shift hasn't happened yet. On top of that, someone manually messages every technician their assignments each morning, which is 10-15 messages before the day even starts.</p>
            </div>
            <div>
              <p class="font-semibold text-[#1A1A1A]">Invoicing has gone off-plan</p>
              <p class="text-sm text-[#555] mt-1">Catarina was onboarded with a set invoicing schedule: same day, same time, every week. Instead, she's doing it ad hoc during lunch (12:00-1:30) in between other tasks because that's "when it's calm." This explains a lot of the invoice errors. She's doing the most important revenue task in fragmented windows while context-switching.</p>
            </div>
            <div>
              <p class="font-semibold text-[#1A1A1A]">Tech leads find out too late</p>
              <p class="text-sm text-[#555] mt-1">This is fair feedback. David described being stuck in "limbo" when something is too technical for him but Jeff or Danny don't know about it yet. Ideally David grows into being able to triage basic technical issues without needing a lead, but there are also things we can do: involve tech leads earlier through structured check-ins, or potentially give technicians on-the-field AI support so they can get walk-throughs without always needing to reach Eddy or Jeff. That last idea is something I've been thinking about but haven't discussed with anyone yet.</p>
            </div>
            <div>
              <p class="font-semibold text-[#1A1A1A]">Materials showing up with no context</p>
              <p class="text-sm text-[#555] mt-1">Something arrives at a property. It's noted on a ticket. But nobody knows who ordered it, where it came from, or whether to bill the client for it.</p>
            </div>
            <div>
              <p class="font-semibold text-[#1A1A1A]">North is still rough</p>
              <p class="text-sm text-[#555] mt-1">Adrian handles 90% of North tickets. Keys is stabilizing under David, but North doesn't have the same structure yet.</p>
            </div>
            <div>
              <p class="font-semibold text-[#1A1A1A]">Nowhere to park non-urgent stuff</p>
              <p class="text-sm text-[#555] mt-1">Halo bugs, process improvements, training ideas. They come up during the day but there's no system for them. We set up a backlog in Notion but they abandoned it because they didn't want another tool. Fair enough. There have also been instances where they've spent 60-90 minutes each on the phone with Halo support for something that was absolutely non-critical.</p>
            </div>
          </div>
        `,
      },
      {
        title: "Accountability",
        subtitle: "Something we noticed across the calls.",
        content: `
          <p>Across all three calls, there's a consistent pattern in how Catarina and David describe problems. The framing is almost always about what other people aren't doing: techs don't write good notes, tech leads aren't checking work, information comes in through the wrong channel.</p>
          <p class="mt-4">Some of that is real. But their job is to make operations run smoothly. When Angel doesn't give Catarina a part name for five days, the real question is what system is in place to make sure he does, and if it's not working, what's been done about it.</p>
          <p class="mt-4">David's role is one example. He was brought on to answer phones and get back to clients. Over time, Catarina has pulled him into operations work to the point where he says he often doesn't have time to do the client-facing work he was hired for. That may or may not be the right call, but it happened organically, not by design. The same applies to the invoicing schedule, the daily dispatch, the time-blocking. These were set up. They've drifted.</p>
          <p class="mt-4">There's also a question of ownership. Catarina's role is Operations Manager. When a technician isn't following a process, getting them to follow it is the job. As an example, Catarina flagged that a technician wasn't using the Start Journey feature and said she didn't have the capacity to keep following up on it. That's understandable when it's one of many things. But getting technicians to follow operational processes is the core of the role. Escalating it upward instead of owning it suggests the role boundaries aren't clear enough, or the expectation of what "operations manager" means hasn't fully landed.</p>
          <p class="mt-4">Some people on the team are harder to manage than others. That's real. But the response to that can't be to give up on the process and default to working around people. The automation and tooling we're recommending will help, but it won't fix an accountability gap on its own. The tools need to come alongside a reset on what's expected.</p>
        `,
      },
      {
        title: "The prioritization problem",
        subtitle:
          "KCS has never had defined SLAs or priority criteria. Here's what that looks like in practice.",
        variant: "highlight",
        content: `
          <p>David described his daily triage as: new tickets first, client replies second, yesterday's backlog third. Invoicing and feedback only happen "if time allows." <strong>Everything feels equally important because nothing is classified.</strong></p>

          <p class="mt-4">Here's what the board actually looks like:</p>
          <div class="mt-3 mb-4 rounded-xl border border-[#E0DBD3] bg-white p-5">
            <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Example 1:</strong> An unassigned ticket marked "New" with high priority. Last action was March 11th. It's 162 days old. Whatever the context is, a high-priority ticket shouldn't sit unassigned for five months with a status of "New." It makes it impossible for anyone else to step in, look at the board, and trust that things aren't getting dropped.</p>
          </div>
          <div class="mb-4 rounded-xl border border-[#E0DBD3] bg-white p-5">
            <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Example 2:</strong> Nearly every ticket in the queue is triaged as "Medium." When everything is medium, nothing is. This isn't a Catarina or David problem specifically. KCS has never operated with defined SLA terms or priority criteria. Without clear rules for what's high vs. low, defaulting to medium is what you'd expect. That's what the work with Eddy is meant to fix.</p>
          </div>

          <p>Halo has the features to support prioritization (priority fields, SLA rules, escalation). They just haven't been configured. Part of the work Zack is doing with Eddy right now is downloading the institutional knowledge needed to create firm rules for priority: which clients are always urgent, what types of issues need same-day response, and what can wait. Once those rules exist, we can configure SLAs in Halo so the system enforces them instead of relying on individual judgment.</p>
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
                  <p class="text-sm text-[#555] mt-1">Halo supports auto-classifying tickets by priority with response and resolution targets that escalate when thresholds are about to breach. KCS doesn't have defined SLAs today, so the first step is establishing them. A lot of the priority knowledge lives in Eddy's head. Things like "if Joe calls from XYZ, that's super important, he never calls unless it is." Zack is working on getting that institutional knowledge out of Eddy through dedicated calls. Once it's captured, it becomes the foundation for SLA rules, priority criteria, and eventually a knowledge base that Catarina and David can reference instead of guessing.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Technician calendar + automatic daily schedule message</p>
                  <p class="text-sm text-[#555] mt-1">When tickets auto-assign, they appear on the tech's calendar in Halo. On top of that, we could configure it so each tech gets an automatic message in Teams at 7am with their schedule for the day. Right now someone has to manually message every technician their assignments each morning, which is 10-15 messages before the day even starts. With auto-assign + auto-notify, all they'd need to do is set the calendar and the comms go out on their own.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">OpenPhone auto-creates tickets</p>
                  <p class="text-sm text-[#555] mt-1">The team has pushed back on this because of duplicate concerns. Here's the actual volume from the past month:</p>
                  <ul class="text-sm text-[#555] mt-2 ml-4 space-y-1 list-disc">
                    <li>~14 calls per day (7 incoming, 7 outgoing)</li>
                    <li>31% of incoming calls missed (89 out of 288 total)</li>
                    <li>4-5 missed calls per day, trending up weekly (0 → 17 → 32 → 40)</li>
                  </ul>
                  <p class="text-sm text-[#555] mt-2">At 7 incoming calls per day, auto-creating tickets won't flood the system. Merging a duplicate is faster than switching screens to manually copy and paste info into a new ticket. And duplicates are actually useful: if a client calls three times about the same thing, you can see that urgency instead of it being buried in one ticket.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Proactive tickets</p>
                  <p class="text-sm text-[#555] mt-1">Two flavors. First, scheduled: monthly camera checks, quarterly network reviews, any recurring maintenance auto-creates at set intervals so nobody has to remember. Second, smart: if a client hasn't had any activity in three months, the system creates a check-in ticket automatically. This turns maintenance from something that gets forgotten into something that just shows up in the queue.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">Internal backlog ticket type</p>
                  <p class="text-sm text-[#555] mt-1">Create a dedicated "Internal Improvement" ticket type with categories like Halo Bug, Process Improvement, Training Need. The 6pm conversations become a visible queue instead of informal hallway talk.</p>
                </div>
              </div>
            </div>

            <div>
              <p class="font-semibold text-[#006747] text-lg mb-3">Ideas that need AI</p>
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
                  <p class="font-semibold text-[#1A1A1A] text-sm">Faster note entry for ops team</p>
                  <p class="text-sm text-[#555] mt-1">Technicians should still be working in Halo directly. But when Catarina or David get a verbal update or a Teams message from a tech, they can tell Paul to log it instead of switching to Halo and typing it up manually. Paul extracts the structured data (time, status, materials, next steps) and writes it to the ticket. Saves the back-office team time without letting techs off the hook.</p>
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
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">On-the-field AI support for technicians</p>
                  <p class="text-sm text-[#555] mt-1">This is an early idea I've been thinking about but haven't discussed with anyone yet. Instead of technicians always needing to call Eddy, Jeff, or Danny when they get stuck on something technical, they could ask an AI assistant for walk-throughs and troubleshooting help. It wouldn't replace the tech leads, but it could handle the routine questions and free them up for the harder stuff. Would also help David, who gets stuck when things are too technical for him but the leads aren't available.</p>
                </div>
                <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
                  <p class="font-semibold text-[#1A1A1A] text-sm">AI executive assistant in Teams</p>
                  <p class="text-sm text-[#555] mt-1">Many of the ideas above (ticket scoring, promise tracking, tech updates from Teams, smart dispatch) can be delivered through a single AI assistant that lives in Microsoft Teams and connects to Halo through API calls. Instead of building separate tools, the team would interact with one assistant that can answer questions, capture information, and flag risks. We've already started building this for Zack. Expanding it to the operations team and connecting it to Halo is the natural next step. Happy to walk through the details if helpful.</p>
                </div>
              </div>
            </div>
          </div>
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
              <p class="text-sm text-[#555]">"Assign ticket 4521 to Eddy." Paul shows what it's about to do, you confirm, it does it. Nothing changes without approval.</p>
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
  {
    slug: "kcs-paul-triage-assistant",
    clientName: "KCS",
    title: "Paul: How It Works",
    subtitle:
      "An AI assistant in Microsoft Teams that connects to Halo. Here's what it does and how.",
    date: "2026-03-26",
    sections: [
      {
        title: "What Paul is",
        content: `
          <div class="space-y-3">
            <div>
              <p class="font-semibold text-[#1A1A1A]">An AI assistant that lives in a Teams channel and has access to Halo through the API.</p>
            </div>
            <ul class="text-sm text-[#555] ml-4 space-y-1 list-disc">
              <li>Already built and running for Zack as a personal task assistant</li>
              <li>Next step is giving it Halo access and putting it in a shared Teams channel</li>
              <li>Uses the same Halo API and AI setup as the daily compliance report</li>
              <li>Sits in a private channel. Only people you add can use it</li>
            </ul>
          </div>
        `,
      },
      {
        title: "Architecture",
        content: `
          <div class="rounded-xl border border-[#E0DBD3] bg-[#F7F5F0] p-6 font-mono text-sm">
            <div class="flex flex-col items-center space-y-3">
              <div class="rounded-lg bg-white border border-[#E0DBD3] px-6 py-3 text-center">
                <p class="font-semibold text-[#1A1A1A]">Microsoft Teams</p>
                <p class="text-xs text-[#555]">Private channel</p>
                <p class="text-xs text-[#555]">Zack, Eddy, Catarina, David</p>
              </div>
              <p class="text-[#555]">&darr; &uarr;</p>
              <div class="rounded-lg bg-white border border-[#E0DBD3] px-6 py-3 text-center">
                <p class="font-semibold text-[#006747]">Paul</p>
                <p class="text-xs text-[#555]">Hosted agent (Railway/Vercel)</p>
                <p class="text-xs text-[#555]">Routes messages, manages context</p>
              </div>
              <div class="flex gap-8 mt-1">
                <div class="flex flex-col items-center space-y-2">
                  <p class="text-[#555]">&darr; &uarr;</p>
                  <div class="rounded-lg bg-white border border-[#E0DBD3] px-4 py-2 text-center">
                    <p class="font-semibold text-[#1A1A1A] text-xs">Halo PSA API</p>
                    <p class="text-xs text-[#555]">Tickets, actions, agents</p>
                    <p class="text-xs text-[#555]">clients, appointments</p>
                  </div>
                </div>
                <div class="flex flex-col items-center space-y-2">
                  <p class="text-[#555]">&darr; &uarr;</p>
                  <div class="rounded-lg bg-white border border-[#E0DBD3] px-4 py-2 text-center">
                    <p class="font-semibold text-[#1A1A1A] text-xs">Claude API</p>
                    <p class="text-xs text-[#555]">Natural language</p>
                    <p class="text-xs text-[#555]">processing</p>
                  </div>
                </div>
                <div class="flex flex-col items-center space-y-2">
                  <p class="text-[#555]">&darr; &uarr;</p>
                  <div class="rounded-lg bg-white border border-[#E0DBD3] px-4 py-2 text-center">
                    <p class="font-semibold text-[#1A1A1A] text-xs">Knowledge Base</p>
                    <p class="text-xs text-[#555]">Client tiers, tech skills</p>
                    <p class="text-xs text-[#555]">priority rules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 space-y-1">
            <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Halo API:</strong> OAuth 2.0, same credentials as compliance report. Read tickets, actions, agents, clients, appointments. Write notes, assign tickets, create appointments.</p>
            <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Claude API:</strong> Processes queries, extracts structured data, identifies promises. Enterprise agreement, no data retention or training.</p>
            <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Knowledge base:</strong> Built from Eddy's institutional knowledge. Client tiers, tech skills, priority rules. Grows over time.</p>
          </div>
        `,
      },
      {
        title: "What operators can ask it",
        subtitle: "Zack, Catarina, David type in Teams. Paul pulls answers from Halo.",
        content: `
          <div class="space-y-2">
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-2 text-sm border border-[#E0DBD3]">"What's sitting unassigned right now?"</div>
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-2 text-sm border border-[#E0DBD3]">"What did we tell the client on ticket 4521?"</div>
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-2 text-sm border border-[#E0DBD3]">"What's ready for me to close and invoice?"</div>
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-2 text-sm border border-[#E0DBD3]">"How are Angel's notes looking this week?"</div>
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-2 text-sm border border-[#E0DBD3]">"What should the field team's schedule look like today?"</div>
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-2 text-sm border border-[#E0DBD3]">"How's the backlog this week vs last?"</div>
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-2 text-sm border border-[#E0DBD3]">"Which tickets are older than 7 days with no update?"</div>
          </div>
          <p class="text-sm text-[#555] mt-4">Paul reads Halo in real time. No reports to build, no dashboards to check.</p>
        `,
      },
      {
        title: "What operators can tell it to do",
        subtitle: "Paul confirms before doing anything.",
        content: `
          <div class="space-y-3">
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-3 text-sm border border-[#E0DBD3]">
              <p class="text-[#555]"><strong class="text-[#1A1A1A]">You:</strong> "Assign ticket 4521 to Eddy"</p>
              <p class="text-[#555] mt-1"><strong class="text-[#006747]">Paul:</strong> "Ticket #4521 — AP install at Three Waters. Assign to Eddy Worthington? [Yes / No]"</p>
            </div>
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-3 text-sm border border-[#E0DBD3]">
              <p class="text-[#555]"><strong class="text-[#1A1A1A]">You:</strong> "Add a note to 4533: waiting on client approval for materials"</p>
              <p class="text-[#555] mt-1"><strong class="text-[#006747]">Paul:</strong> "Add private note to #4533? [Yes / No]"</p>
            </div>
          </div>
          <p class="text-sm text-[#555] mt-4">Nothing changes in Halo without explicit approval. Paul can't delete anything.</p>
        `,
      },
      {
        title: "Who has access",
        subtitle: "Leadership and back office only. Not technicians.",
        content: `
          <div class="space-y-3">
            <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Core access:</strong> Zack, Eddy, Catarina, David</p>
            <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Potential expansion:</strong> Danny, Jeff (if it makes sense)</p>
            <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Not technicians.</strong> Paul is an operations tool, not a field tool. Techs continue using Halo and Teams as they do now.</p>
          </div>
        `,
      },
      {
        title: "Example: tech update flow",
        subtitle: "An operator gets a message from a tech and tells Paul to log it.",
        content: `
          <div class="space-y-3">
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-3 text-sm border border-[#E0DBD3]">
              <p class="text-[#555]"><strong class="text-[#1A1A1A]">Catarina to Paul:</strong> "Eddy just told me Three Waters AP install is done, took 2 hours, left old unit with front desk, needs to come back Thursday for second floor. Put it on the ticket."</p>
            </div>
            <div class="rounded-lg bg-[#F7F5F0] px-4 py-3 text-sm border border-[#E0DBD3]">
              <p class="text-[#555]"><strong class="text-[#006747]">Paul:</strong> "Adding to ticket #4521 (Three Waters - AP Install):</p>
              <ul class="text-[#555] mt-1 ml-4 list-disc text-sm">
                <li>Time: 2 hours</li>
                <li>Status: Partial (second floor remaining)</li>
                <li>Materials: Old unit left with front desk</li>
                <li>Next: Return Thursday</li>
              </ul>
              <p class="text-[#555] mt-1">Confirm? [Yes / Edit]"</p>
            </div>
          </div>
          <p class="text-sm text-[#555] mt-4">Paul matches to the right ticket by checking what's assigned to that tech today. Faster than switching to Halo and typing it up manually.</p>
        `,
      },
      {
        title: "Promise tracking",
        subtitle: "Paul reads ticket threads and flags commitments that are coming due.",
        content: `
          <div class="rounded-lg bg-[#F7F5F0] px-4 py-3 text-sm border border-[#E0DBD3]">
            <p class="text-[#006747] font-semibold">Paul (daily, 3pm):</p>
            <p class="text-[#555] mt-1">"3 tickets have commitments coming due:</p>
            <ul class="text-[#555] mt-1 ml-4 list-disc">
              <li>#4521 — Eddy told client replacement AP by end of week. No update since Mar 12.</li>
              <li>#4498 — Catarina promised follow-up call to Melissa (Three Waters). Due today.</li>
              <li>#4510 — Jeff said network config would be done by Thursday. No notes since Tuesday.</li>
            </ul>
            <p class="text-[#555] mt-1">"</p>
          </div>
          <p class="text-sm text-[#555] mt-4">Paul reads the client-facing messages on every open ticket using the Actions API. Identifies delivery dates, follow-ups promised, callbacks scheduled. Flags anything overdue or at risk.</p>
        `,
      },
      {
        title: "How Eddy's knowledge makes Paul smarter",
        subtitle: "The institutional knowledge Zack is downloading from Eddy feeds directly into Paul.",
        content: `
          <div class="space-y-3">
            <p class="text-sm text-[#555]">Right now, priority decisions live in Eddy's head. Things like:</p>
            <ul class="text-sm text-[#555] ml-4 space-y-1 list-disc">
              <li>Which clients are always urgent (they never call unless it's serious)</li>
              <li>Which techs are best for which types of work</li>
              <li>Which sites have quirks that affect scheduling</li>
              <li>What response times are expected by client tier</li>
            </ul>
            <p class="text-sm text-[#555] mt-3">Once captured, this knowledge does three things:</p>
            <ul class="text-sm text-[#555] ml-4 space-y-1 list-disc">
              <li><strong class="text-[#1A1A1A]">Feeds Halo SLA rules</strong> — auto-classify priority based on client, issue type, urgency signals</li>
              <li><strong class="text-[#1A1A1A]">Feeds Halo auto-assign rules</strong> — right tech for the right job, automatically</li>
              <li><strong class="text-[#1A1A1A]">Feeds Paul's context</strong> — when Paul suggests assignments or flags risks, it's using Eddy's judgment, not guessing</li>
            </ul>
            <p class="text-sm text-[#555] mt-3">We have an interview script ready for this. Covers: VIP clients, tech strengths and weaknesses, decision heuristics, urgency signals, unwritten rules.</p>
          </div>
        `,
      },
      {
        title: "What Paul connects to",
        subtitle: "Technical overview.",
        content: `
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-[#E0DBD3]">
                  <th class="text-left py-2 pr-4 font-semibold text-[#1A1A1A]">System</th>
                  <th class="text-left py-2 font-semibold text-[#1A1A1A]">What Paul does with it</th>
                </tr>
              </thead>
              <tbody class="text-[#555]">
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-2 pr-4 font-semibold">Halo PSA (API)</td>
                  <td class="py-2">Reads tickets, actions, agents, clients, SLAs, appointments. Writes notes, assigns tickets, creates appointments. OAuth 2.0, same credentials as compliance report.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-2 pr-4 font-semibold">Microsoft Teams</td>
                  <td class="py-2">Lives in a private channel. Receives messages, responds. Can monitor a #field-updates channel for tech posts.</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-2 pr-4 font-semibold">Claude API</td>
                  <td class="py-2">Processes natural language, extracts structured data from tech messages, scores ticket completeness, identifies promises in threads.</td>
                </tr>
                <tr>
                  <td class="py-2 pr-4 font-semibold">Knowledge base</td>
                  <td class="py-2">Client tiers, tech skills, priority rules. Starts with Eddy's institutional knowledge. Grows over time.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Data privacy and PII",
        content: `
          <div class="space-y-4">
            <div>
              <p class="font-semibold text-[#1A1A1A]">No sensitive client data is accessed</p>
              <ul class="text-sm text-[#555] ml-4 mt-2 space-y-1 list-disc">
                <li>Paul works with ticket metadata: ticket numbers, statuses, priorities, agent names, work descriptions, time entries</li>
                <li>It does not access or process: client billing information, payment details, credit card numbers, banking info, SSNs, or any financial records</li>
                <li>Client contact details (names, emails, phone numbers) can be stripped at the API layer so the AI never sees them if preferred</li>
                <li>No client passwords, credentials, or access keys are ever touched</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-[#1A1A1A]">How the AI handles data</p>
              <ul class="text-sm text-[#555] ml-4 mt-2 space-y-1 list-disc">
                <li>AI processes data in memory to respond to a query, then discards it. Nothing is stored.</li>
                <li>Anthropic (the AI provider) does not train on API data. This is contractual, not just a policy.</li>
                <li>Same setup as the daily compliance report that's been running for weeks</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-[#1A1A1A]">Access controls</p>
              <ul class="text-sm text-[#555] ml-4 mt-2 space-y-1 list-disc">
                <li>Paul lives in a private Teams channel. Only Zack, Eddy, Catarina, David (and potentially Danny/Jeff) can interact with it</li>
                <li>Technicians do not have access</li>
                <li>Paul confirms before writing anything to Halo. Nothing changes without approval.</li>
                <li>Paul cannot delete any data. Read, add notes, update tickets only.</li>
              </ul>
            </div>
          </div>
        `,
      },
      {
        title: "The one failure point",
        variant: "highlight",
        content: `
          <p>Paul only works if people use it. The compliance report works because it runs automatically. Nobody has to remember to do anything. Paul requires people to actually interact with it in Teams.</p>
          <p class="mt-4">If the team doesn't ask Paul questions, doesn't tell it to log updates, doesn't act on the flags it raises, it's just another tool collecting dust. Adoption by Zack, Eddy, Catarina, and David is the make-or-break.</p>
        `,
      },
      {
        title: "Expected time savings",
        content: `
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-[#E0DBD3]">
                  <th class="text-left py-2 pr-4 font-semibold text-[#1A1A1A]">Task</th>
                  <th class="text-left py-2 pr-4 font-semibold text-[#1A1A1A]">Today</th>
                  <th class="text-left py-2 pr-4 font-semibold text-[#1A1A1A]">With Paul</th>
                  <th class="text-left py-2 font-semibold text-[#1A1A1A]">Saved</th>
                </tr>
              </thead>
              <tbody class="text-[#555]">
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-2 pr-4">Cross-checking Teams/email/phone</td>
                  <td class="py-2 pr-4">45-60 min/day</td>
                  <td class="py-2 pr-4">5-10 min</td>
                  <td class="py-2">~45 min</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-2 pr-4">Morning dispatch + messaging techs</td>
                  <td class="py-2 pr-4">30-45 min/day</td>
                  <td class="py-2 pr-4">5-10 min</td>
                  <td class="py-2">~30 min</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-2 pr-4">Chasing techs for missing info</td>
                  <td class="py-2 pr-4">30-60 min/day</td>
                  <td class="py-2 pr-4">Flagged automatically</td>
                  <td class="py-2">~25 min</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-2 pr-4">Reviewing tickets for invoice readiness</td>
                  <td class="py-2 pr-4">30-45 min/day</td>
                  <td class="py-2 pr-4">Pre-sorted list</td>
                  <td class="py-2">~25 min</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-2 pr-4">Looking up what was promised to a client</td>
                  <td class="py-2 pr-4">10-15 min/ticket</td>
                  <td class="py-2 pr-4">Instant</td>
                  <td class="py-2">~25 min</td>
                </tr>
                <tr>
                  <td class="py-2 pr-4">Logging verbal/Teams updates into Halo</td>
                  <td class="py-2 pr-4">15-20 min/day</td>
                  <td class="py-2 pr-4">Tell Paul</td>
                  <td class="py-2">~10 min</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-4 rounded-xl border border-[#E0DBD3] bg-white p-5">
            <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Conservative estimate:</strong> 1.5-2.5 hours/day combined between Catarina and David. ~30-50 hours/month. At ~$12-15/hr loaded cost, that's $360-750/month in recovered capacity.</p>
            <p class="text-sm text-[#555] mt-2">The harder-to-quantify value: promises that don't get broken, tickets that don't sit for 162 days, and being able to look at the board and trust what you see.</p>
          </div>
        `,
      },
      {
        title: "Rollout",
        content: `
          <div class="space-y-4">
            <div class="flex gap-3 items-start">
              <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded flex-shrink-0">1</span>
              <div>
                <p class="font-semibold text-[#1A1A1A] text-sm">Read-only</p>
                <p class="text-sm text-[#555]">Paul in a private Teams channel. Can query Halo: tickets, workloads, backlog, ticket histories, client info. Can't change anything.</p>
              </div>
            </div>
            <div class="flex gap-3 items-start">
              <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded flex-shrink-0">2</span>
              <div>
                <p class="font-semibold text-[#1A1A1A] text-sm">Write with confirmation</p>
                <p class="text-sm text-[#555]">Assign tickets, add notes, create appointments. Always confirms first.</p>
              </div>
            </div>
            <div class="flex gap-3 items-start">
              <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded flex-shrink-0">3</span>
              <div>
                <p class="font-semibold text-[#1A1A1A] text-sm">Tech input</p>
                <p class="text-sm text-[#555]">#field-updates channel. Techs post updates, Paul matches to tickets, confirms, writes to Halo.</p>
              </div>
            </div>
            <div class="flex gap-3 items-start">
              <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded flex-shrink-0">4</span>
              <div>
                <p class="font-semibold text-[#1A1A1A] text-sm">Proactive</p>
                <p class="text-sm text-[#555]">Promise tracking. Stuck ticket alerts. Schedule suggestions. Paul surfaces things before you think to ask.</p>
              </div>
            </div>
          </div>
          <p class="text-sm text-[#555] mt-6">Daily compliance email stays. That's the audit trail. Paul is the live layer on top.</p>
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
