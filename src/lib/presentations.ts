// Presentations - private, unlisted pages for client pitches
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
    title: "Paul: AI-Powered Operations for KCS",
    subtitle:
      "How a single AI assistant in Microsoft Teams can replace six standalone automations, eliminate daily busywork, and give your team real-time operational intelligence.",
    date: "2026-03-25",
    sections: [
      {
        title: "What We Found",
        subtitle: "Three calls. Seven problems. One root cause.",
        content: `
          <p>We analyzed three recorded calls with Catarina and David (Feb & Nov) and identified <strong>seven core operational problems</strong>. They all trace back to the same root cause: <strong>information doesn't flow where it needs to go.</strong></p>
          <div class="grid gap-4 md:grid-cols-2 mt-6">
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">1. Information Fragmentation</p>
              <p class="text-sm text-[#555]">Work lives in Halo, Teams, email, phone, and Eddie's DMs. Nobody has the full picture on any ticket.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">2. Constant Task Switching</p>
              <p class="text-sm text-[#555]">Neither Catarina nor David can describe a typical day. First and last 2-3 hours are pure reaction.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">3. Invoicing Gets Squeezed</p>
              <p class="text-sm text-[#555]">The most important revenue task happens during lunch because that's the only calm window.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">4. Tech Leads Not Involved Enough</p>
              <p class="text-sm text-[#555]">No QC on field work. Problems found after the fact, not prevented.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">5. North vs. Keys Gap</p>
              <p class="text-sm text-[#555]">North is chaos with Adrian overloaded. Keys is stabilizing under David.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <p class="text-sm font-semibold text-[#006747] mb-1">6. Role Overlap</p>
              <p class="text-sm text-[#555]">Catarina and David do similar work at the same time with no formal structure.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5 md:col-span-2">
              <p class="text-sm font-semibold text-[#006747] mb-1">7. No System for Non-Urgent Work</p>
              <p class="text-sm text-[#555]">Improvements, Halo bugs, and process fixes get discussed at 6pm because there's nowhere to park them during the day.</p>
            </div>
          </div>
        `,
      },
      {
        title: "The Busy Work",
        subtitle: "Specific examples from Catarina and David's daily routines.",
        content: `
          <div class="space-y-4">
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF2F2] flex items-center justify-center">
                <span class="text-sm">1</span>
              </div>
              <div>
                <p class="font-semibold text-[#1A1A1A]">Chasing technicians for incomplete notes</p>
                <p class="text-sm text-[#555] mt-1">Catarina described asking Angel for a part name for <strong>five consecutive days</strong> before getting an answer. This happens across multiple techs, multiple tickets, every week.</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF2F2] flex items-center justify-center">
                <span class="text-sm">2</span>
              </div>
              <div>
                <p class="font-semibold text-[#1A1A1A]">Cross-checking four systems before touching a ticket</p>
                <p class="text-sm text-[#555] mt-1">David checks Teams, email, OpenPhone, and other Halo tickets before he can start on anything new. Email replies come through as the individual sender, not the company, creating "a whole other universe" to verify.</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF2F2] flex items-center justify-center">
                <span class="text-sm">3</span>
              </div>
              <div>
                <p class="font-semibold text-[#1A1A1A]">Manual dispatch every morning</p>
                <p class="text-sm text-[#555] mt-1">Tickets sit in an unassigned backlog. Catarina and David manually assign each one based on who's available, who's at which site, and what skills are needed. Techs don't know their schedule until they're told.</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF2F2] flex items-center justify-center">
                <span class="text-sm">4</span>
              </div>
              <div>
                <p class="font-semibold text-[#1A1A1A]">Materials arriving with no context</p>
                <p class="text-sm text-[#555] mt-1">Material shows up at a property, noted on a ticket, with no information about who ordered it, where it came from, or whether to bill the client.</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF2F2] flex items-center justify-center">
                <span class="text-sm">5</span>
              </div>
              <div>
                <p class="font-semibold text-[#1A1A1A]">No prioritization framework</p>
                <p class="text-sm text-[#555] mt-1">David's triage is purely reactive: new tickets first, client replies second, yesterday's backlog third. There's no system for distinguishing urgent from non-urgent. Invoicing and feedback only happen "if time allows."</p>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: "The Insight",
        subtitle:
          "Catarina and David close tickets. Technicians don't.",
        variant: "highlight",
        content: `
          <p>"Required fields on ticket close" is the obvious answer. But it's the wrong one. It just adds more work to the two people already drowning.</p>
          <p class="mt-4">The fix has to intercept <strong>upstream</strong>, at the moment a technician finishes work, not when Catarina or David try to close the ticket days later.</p>
          <p class="mt-4">And here's the thing: technicians already communicate in real time. They just do it in <strong>Teams DMs</strong> instead of Halo. The information exists. It's just in the wrong place.</p>
        `,
      },
      {
        title: "The Solution: Paul",
        subtitle:
          "One AI assistant in Microsoft Teams that connects your team to Halo.",
        content: `
          <p>Paul is an AI-powered operations assistant that lives in Microsoft Teams, where your team already works. It has direct access to your Halo PSA data and can both read and write to tickets.</p>
          <p class="mt-4">Two-way data flow. One interface. No new tools to learn.</p>

          <div class="mt-8 rounded-xl border border-[#E0DBD3] bg-[#F7F5F0] p-6">
            <p class="font-mono text-xs text-[#888] mb-4 uppercase tracking-wider">How it works</p>
            <div class="space-y-6">
              <div>
                <p class="font-semibold text-[#006747]">Operators ask Paul questions</p>
                <p class="text-sm text-[#555] mt-1">Zack, Catarina, or David type in Teams:</p>
                <div class="mt-2 space-y-2">
                  <div class="rounded-lg bg-white px-4 py-2 text-sm border border-[#E0DBD3]">"What's unassigned right now?"</div>
                  <div class="rounded-lg bg-white px-4 py-2 text-sm border border-[#E0DBD3]">"What was promised to the client on ticket 4521?"</div>
                  <div class="rounded-lg bg-white px-4 py-2 text-sm border border-[#E0DBD3]">"Prep my invoicing block. What's ready to close?"</div>
                  <div class="rounded-lg bg-white px-4 py-2 text-sm border border-[#E0DBD3]">"How's Angel's note compliance this week?"</div>
                  <div class="rounded-lg bg-white px-4 py-2 text-sm border border-[#E0DBD3]">"Build today's schedule for the field team."</div>
                </div>
                <p class="text-sm text-[#555] mt-3">Paul queries Halo in real time, analyzes the data, and responds conversationally. No reports to build. No dashboards to check. Just ask.</p>
              </div>

              <div class="border-t border-[#E0DBD3] pt-6">
                <p class="font-semibold text-[#006747]">Technicians update Paul naturally</p>
                <p class="text-sm text-[#555] mt-1">Eddie posts in Teams:</p>
                <div class="mt-2 rounded-lg bg-white px-4 py-3 text-sm border border-[#E0DBD3]">"Three Waters AP install done, took 2 hours. Left old unit with front desk. Need to come back Thursday for the second floor."</div>
                <p class="text-sm text-[#555] mt-3">Paul auto-matches to the right ticket, extracts structured data (time spent, work status, materials, next steps), asks for confirmation, and writes it to Halo. Eddie never opens Halo. Catarina never chases him.</p>
              </div>

              <div class="border-t border-[#E0DBD3] pt-6">
                <p class="font-semibold text-[#006747]">Paul watches for risks proactively</p>
                <p class="text-sm text-[#555] mt-1">Every afternoon, Paul scans open tickets for unfulfilled commitments:</p>
                <div class="mt-2 rounded-lg bg-white px-4 py-3 text-sm border border-[#E0DBD3]">"3 tickets have promises due today that haven't been updated. Ticket #4521: Eddie told the client the replacement AP would be installed by end of week. No update since March 12."</div>
                <p class="text-sm text-[#555] mt-3">Urgency isn't just SLA timers. It's promises that are about to be broken.</p>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: "What Paul Replaces",
        subtitle: "Six standalone automations become one assistant.",
        variant: "table",
        content: `
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-[#E0DBD3]">
                  <th class="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">Problem</th>
                  <th class="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">Without Paul</th>
                  <th class="text-left py-3 font-semibold text-[#1A1A1A]">With Paul</th>
                </tr>
              </thead>
              <tbody class="text-[#555]">
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Incomplete tech notes</td>
                  <td class="py-3 pr-4">Chase techs for days</td>
                  <td class="py-3 text-[#006747]">Paul captures notes from Teams in real time</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Ticket readiness</td>
                  <td class="py-3 pr-4">Manually review every ticket</td>
                  <td class="py-3 text-[#006747]">"Paul, what's ready to close?"</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Backlog visibility</td>
                  <td class="py-3 pr-4">Weekly report email</td>
                  <td class="py-3 text-[#006747]">"Paul, how's this week vs last?"</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Daily dispatch</td>
                  <td class="py-3 pr-4">Manual assignment every morning</td>
                  <td class="py-3 text-[#006747]">"Paul, build today's schedule"</td>
                </tr>
                <tr class="border-b border-[#F0EBE3]">
                  <td class="py-3 pr-4">Broken promises to clients</td>
                  <td class="py-3 pr-4">Discover when client complains</td>
                  <td class="py-3 text-[#006747]">Paul flags unfulfilled commitments daily</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Cross-channel confusion</td>
                  <td class="py-3 pr-4">Check Teams + email + phone before every ticket</td>
                  <td class="py-3 text-[#006747]">Teams messages flow into Halo automatically</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Why This Works When Other Approaches Don't",
        subtitle: "You've tried process changes. People don't comply.",
        content: `
          <p>In November 2025, the team tried automated notes in Halo. <strong>The technicians rebelled.</strong> They went back to manual.</p>
          <p class="mt-4">The problem wasn't the automation. It was the friction. Filling out Halo forms on a phone after a long job feels like paperwork. Messaging in Teams feels like texting a colleague.</p>
          <p class="mt-4">Paul doesn't change anyone's behavior. It <strong>redirects</strong> behavior that's already happening. Techs already message in Teams. They just message Paul instead of Eddie's DMs. Paul does the Halo data entry.</p>

          <div class="mt-8 grid gap-4 md:grid-cols-3">
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5 text-center">
              <p class="text-2xl font-mono font-bold text-[#B8860B]">0</p>
              <p class="text-sm text-[#555] mt-1">new tools to learn</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5 text-center">
              <p class="text-2xl font-mono font-bold text-[#B8860B]">0</p>
              <p class="text-sm text-[#555] mt-1">behavior changes required</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5 text-center">
              <p class="text-2xl font-mono font-bold text-[#B8860B]">1</p>
              <p class="text-sm text-[#555] mt-1">place to go for everything</p>
            </div>
          </div>
        `,
      },
      {
        title: "The Full Loop",
        subtitle: "From ticket creation to invoice-ready, with Paul as the connective layer.",
        variant: "dark",
        content: `
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">1</span>
              </div>
              <div>
                <p class="font-semibold text-white">Ticket created</p>
                <p class="text-sm text-[#A8D5C2]">Auto-assigned to Eddie based on site, client, and skills</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">2</span>
              </div>
              <div>
                <p class="font-semibold text-white">Appears on Eddie's calendar</p>
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
                <p class="font-semibold text-white">Paul writes a structured note to the ticket</p>
                <p class="text-sm text-[#A8D5C2]">Time: 2 hrs. Status: Partial. Materials: old unit left. Next: return Thursday. Contact: front desk.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">6</span>
              </div>
              <div>
                <p class="font-semibold text-white">If anything's missing, Paul asks in Teams</p>
                <p class="text-sm text-[#A8D5C2]">"Got it. Did you use any new materials, or just the existing unit?" Not a form. A conversation.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#006747] flex items-center justify-center mt-0.5">
                <span class="text-xs font-bold text-white">7</span>
              </div>
              <div>
                <p class="font-semibold text-white">Catarina opens the ticket. It's ready to close.</p>
                <p class="text-sm text-[#A8D5C2]">No chasing. No cross-checking. No 5-day waits.</p>
              </div>
            </div>
          </div>
        `,
      },
      {
        title: "What's Already Working",
        subtitle: "Paul builds on a foundation we've been running for months.",
        content: `
          <div class="grid gap-4 md:grid-cols-2">
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                <p class="text-sm font-semibold text-[#1A1A1A]">Compliance Automation</p>
              </div>
              <p class="text-sm text-[#555]">Running daily since launch. AI scores every tech note against a 7-field compliance checklist. Color-coded report emailed at 5:15 PM. Full history logged to Google Sheets.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                <p class="text-sm font-semibold text-[#1A1A1A]">Overtime & Expense Tracking</p>
              </div>
              <p class="text-sm text-[#555]">Replaced Zapier + Microsoft Forms. Self-hosted on KCS website with receipt uploads and weekly summary emails.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
                <p class="text-sm font-semibold text-[#1A1A1A]">Customer Check-Ins</p>
              </div>
              <p class="text-sm text-[#555]">248 contact changes prepared, interactive picker built. 75% complete, waiting on Halo setup.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-5">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                <p class="text-sm font-semibold text-[#1A1A1A]">Role Clarity & Recommendations</p>
              </div>
              <p class="text-sm text-[#555]">7 operational problems identified. Role definitions drafted. DOCX ready for review.</p>
            </div>
          </div>
          <p class="mt-6 text-sm text-[#555]">The compliance report already proves the model: AI can read Halo data, assess quality, and deliver actionable intelligence. Paul extends that to real-time, interactive, two-way communication.</p>
        `,
      },
      {
        title: "Rollout",
        subtitle: "We start small and expand based on what works.",
        content: `
          <div class="space-y-6">
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 1</span>
                <p class="font-semibold text-[#1A1A1A]">Paul reads from Halo</p>
              </div>
              <p class="text-sm text-[#555]">Private Teams channel for Zack, Catarina, David. Paul answers questions about tickets, agents, backlog, and client history. Read-only, zero risk.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 2</span>
                <p class="font-semibold text-[#1A1A1A]">Paul writes to Halo (with confirmation)</p>
              </div>
              <p class="text-sm text-[#555]">"Assign ticket 4521 to Eddie" &rarr; Paul confirms &rarr; you approve &rarr; done. Light write operations, always with human approval.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 3</span>
                <p class="font-semibold text-[#1A1A1A]">Tech input channel</p>
              </div>
              <p class="text-sm text-[#555]">Technicians post updates in a #field-updates channel. Paul monitors, matches to tickets, confirms, and writes to Halo. Compliance scoring happens in real time.</p>
            </div>
            <div class="rounded-xl border border-[#E0DBD3] bg-white p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="font-mono text-sm font-bold text-[#006747] bg-[#E8EDE9] px-2 py-0.5 rounded">Phase 4</span>
                <p class="font-semibold text-[#1A1A1A]">Proactive intelligence</p>
              </div>
              <p class="text-sm text-[#555]">Promise tracker. Smart dispatch suggestions. On-demand KPIs. Paul doesn't just answer questions. It tells you what you need to know before you ask.</p>
            </div>
          </div>
        `,
      },
      {
        title: "Data Privacy",
        subtitle: "Your data stays yours.",
        content: `
          <p>Paul accesses the same Halo data your team already sees when they log in. No client data is stored outside of Halo and your Microsoft 365 environment.</p>
          <div class="mt-6 space-y-3">
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Same data flow as today.</strong> Your team already discusses client info in Teams and accesses it in Halo. Paul uses the same channels.</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Access-controlled.</strong> Paul lives in a private Teams channel. Only authorized users can interact with it.</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Write operations require confirmation.</strong> Paul never changes Halo data without your explicit approval.</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">No delete operations.</strong> Paul can add notes and update tickets. It cannot delete anything.</p>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-[#E8EDE9] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-xs text-[#006747]">&#10003;</span>
              </div>
              <p class="text-sm text-[#555]"><strong class="text-[#1A1A1A]">Enterprise AI agreement.</strong> The AI provider does not train on or retain your data.</p>
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
