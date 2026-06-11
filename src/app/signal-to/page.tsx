'use client';

import Image from "next/image";

/*
  The Agent Assembly — Good Company event
  Direction: loud + artsy, Missing-Middle-Summit-inspired typography, Capital Camp positioning
  Palette:
    bg:        #1E40FF (electric cobalt)
    accent:    #C7FF3F (acid lime)
    surface:   #F5F2EA (off-white / cream)
    text:      #0A0A0A (near black)
*/

type Session = {
  format: "Talk" | "Table" | "Sponsor";
  title: string;
  speaker: string;
  bullets: string[];
};

// INTERNAL talk-idea library — not rendered on the public site.
// Source of truth for what we could program. The visible itinerary
// uses generic placeholders so the team doesn't mistake these for
// confirmed sessions.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sessions: Session[] = [
  // ── Original 8 ───────────────────────────────
  {
    format: "Talk",
    title: "How we eliminated $400k in invoice write-offs in 90 days",
    speaker: "Jane Doe",
    bullets: [
      "COO, 200-person residential services company",
      "Shipped the system before joining as fractional",
    ],
  },
  {
    format: "Talk",
    title: "The hiring rubric we rebuilt when 30% of the role became automatable",
    speaker: "John Doe",
    bullets: [
      "Head of People, Series B fintech (Toronto)",
      "Rewrote the JD and funnel for product, support, and ops",
    ],
  },
  {
    format: "Talk",
    title: "What we tried to automate and shouldn't have",
    speaker: "Jane Doe",
    bullets: [
      "Founder, multi-location dental group",
      "Six figures spent learning what to leave alone",
    ],
  },
  {
    format: "Talk",
    title: "Reading the team's calendar to find the next workflow",
    speaker: "John Doe",
    bullets: [
      "VP Operations, regional logistics company",
      "40+ workflows shipped, sourced from inside the team",
    ],
  },
  {
    format: "Table",
    title: "Build vs buy vs wait, in 2026",
    speaker: "Jane Doe",
    bullets: [
      "Fractional CTO across eight portfolio companies",
      "Has run the decision 30+ times, kept receipts",
    ],
  },
  {
    format: "Table",
    title: "Compensation when output is leveraged 10x",
    speaker: "John Doe",
    bullets: [
      "CFO, PE-backed services platform",
      "Rebuilt the comp plan twice in two years",
    ],
  },
  {
    format: "Table",
    title: "Killing a pilot without losing your team",
    speaker: "Jane Doe",
    bullets: [
      "COO, 50-person marketing agency",
      "Killed two AI projects in 2025, kept the team intact",
    ],
  },
  {
    format: "Table",
    title: "Who owns the workflow when AI does the work",
    speaker: "John Doe",
    bullets: [
      "VP Marketing, national bank",
      "Runs the largest AI marketing program inside the bank",
    ],
  },
  // ── Additional case-study talks ──────────────
  {
    format: "Talk",
    title: "Cutting sales cycle time 40% by automating discovery prep",
    speaker: "Jane Doe",
    bullets: [
      "VP Sales, B2B software (Toronto)",
      "Took the team's 90 min/day of prep down to 5",
    ],
  },
  {
    format: "Talk",
    title: "Doubling onboarding retention with one rewritten sequence",
    speaker: "John Doe",
    bullets: [
      "Head of Customer Success, fintech",
      "The drop-off curve, before and after, no smoothing",
    ],
  },
  {
    format: "Talk",
    title: "Replacing a $200k offshore data team without anyone losing their job",
    speaker: "Jane Doe",
    bullets: [
      "Founder, e-commerce brand",
      "Moved the team to higher-leverage work, output went up",
    ],
  },
  {
    format: "Talk",
    title: "3x SDR output without adding headcount",
    speaker: "John Doe",
    bullets: [
      "CRO, vertical SaaS company",
      "Same five reps, triple the qualified meetings",
    ],
  },
  {
    format: "Talk",
    title: "Killing the weekly reporting meeting (and the digest that replaced it)",
    speaker: "Jane Doe",
    bullets: [
      "VP Operations, distribution business",
      "14 hours a week of senior time recovered",
    ],
  },
  {
    format: "Talk",
    title: "The intake-to-proposal system that killed our 14-day turnaround",
    speaker: "John Doe",
    bullets: [
      "Partner, professional services firm",
      "Same-day proposals, win rate up 22%",
    ],
  },
  // ── Additional people-meta talks ─────────────
  {
    format: "Talk",
    title: "Performance reviews in an AI-leveraged team",
    speaker: "Jane Doe",
    bullets: [
      "Head of People, mid-market services company",
      "Which review questions still work, which don't",
    ],
  },
  {
    format: "Talk",
    title: "Telling your team they're not being replaced, when you can't fully promise it",
    speaker: "John Doe",
    bullets: [
      "CEO, 80-person agency",
      "The talk track that earned the team's trust",
    ],
  },
  {
    format: "Talk",
    title: "The hiring filter we now run on every candidate",
    speaker: "Jane Doe",
    bullets: [
      "Founder, specialist recruiting firm",
      "What an 'AI-first' filter actually screens for",
    ],
  },
  // ── Additional decision-framework talks ──────
  {
    format: "Talk",
    title: "Vendors are lying to you: a buyer's framework for AI sales pitches",
    speaker: "John Doe",
    bullets: [
      "Holding-co operator, six portfolio companies",
      "Has bought across all of them, kept the receipts",
    ],
  },
  {
    format: "Talk",
    title: "Why your first three pilots will fail (and why that's the plan)",
    speaker: "Jane Doe",
    bullets: [
      "CTO, vertical services platform",
      "Reframing failure as the curriculum",
    ],
  },
  {
    format: "Talk",
    title: "Where to start when you don't know where to start",
    speaker: "John Doe",
    bullets: [
      "Operator-investor, advised 40+ first deployments",
      "The starter-pilot rubric, with three real examples",
    ],
  },
  // ── Additional working tables ────────────────
  {
    format: "Table",
    title: "Insourcing vs outsourcing the agent build",
    speaker: "Jane Doe",
    bullets: [
      "VP Engineering, late-stage scale-up",
      "When to keep it in-house, when to hire a partner",
    ],
  },
  {
    format: "Table",
    title: "The data you're not capturing today that will cost you in 2027",
    speaker: "John Doe",
    bullets: [
      "Head of Data, national retail brand",
      "Working session on your future-moat",
    ],
  },
  {
    format: "Table",
    title: "Performance metrics that don't get gamed by AI",
    speaker: "Jane Doe",
    bullets: [
      "CFO, multi-location services company",
      "Walked the comp-and-metrics ladder twice",
    ],
  },
  {
    format: "Table",
    title: "Building institutional knowledge into agents (so it survives turnover)",
    speaker: "John Doe",
    bullets: [
      "COO, acquisitive holding company",
      "Four acquisitions running on the same playbook",
    ],
  },
  {
    format: "Table",
    title: "From process to judgment: where your team's bottleneck just moved",
    speaker: "Jane Doe",
    bullets: [
      "CEO, 200-person services company",
      "The shift no one warns you about",
    ],
  },
  {
    format: "Table",
    title: "Tracking AI ROI without lying to yourself",
    speaker: "John Doe",
    bullets: [
      "Founder, regulated-industry fintech",
      "The math that survives a board meeting",
    ],
  },
  {
    format: "Table",
    title: "Your CRM is the AI investment you're not making",
    speaker: "Jane Doe",
    bullets: [
      "VP Marketing, regulated services company",
      "Why most companies invest in the wrong layer first",
    ],
  },
  {
    format: "Table",
    title: "Org design when one person can do the work of five",
    speaker: "John Doe",
    bullets: [
      "COO, vertical SaaS scale-up",
      "Restructured twice in eighteen months",
    ],
  },
  // ── Sponsor slots (paid to speak, labeled honestly) ──
  {
    format: "Sponsor",
    title: "What the contract-review queue at a mid-market bank actually looks like",
    speaker: "Jane Doe",
    bullets: [
      "VP Product, [Sponsor Partner]",
      "Built the contract review system used by three Canadian banks",
      "1,400 contracts per week, with the human-review hours shared honestly",
    ],
  },
  {
    format: "Sponsor",
    title: "Ticket triage that resolves: what 11M tickets taught us",
    speaker: "John Doe",
    bullets: [
      "Founder, [Sponsor Partner]",
      "Currently handling 11M+ support tickets a year across SMB clients",
      "Net deflection rates by cohort, the misses included",
    ],
  },
];

type TalkType = "Case Study" | "How-To" | "Meta";
type ItineraryRow =
  | { time: string; kind: "marker"; label: string; note?: string }
  | { kind: "block"; blockNumber: string; pillar: string }
  | { time: string; kind: "slot"; pillar: string; talkType: TalkType };

const itinerary: ItineraryRow[] = [
  { time: "8:30", kind: "marker", label: "Coffee & registration" },
  { time: "9:00", kind: "marker", label: "Welcome", note: "Alex Tribe, Good Company" },

  { kind: "block", blockNumber: "01", pillar: "Operations" },
  { time: "9:15", kind: "slot", pillar: "Operations", talkType: "Case Study" },
  { time: "9:30", kind: "slot", pillar: "Operations", talkType: "How-To" },
  { time: "9:45", kind: "slot", pillar: "Operations", talkType: "Meta" },

  { time: "10:00", kind: "marker", label: "Break" },

  { kind: "block", blockNumber: "02", pillar: "Revenue Generation" },
  { time: "10:20", kind: "slot", pillar: "Revenue Generation", talkType: "Case Study" },
  { time: "10:35", kind: "slot", pillar: "Revenue Generation", talkType: "How-To" },
  { time: "10:50", kind: "slot", pillar: "Revenue Generation", talkType: "Meta" },

  { time: "11:05", kind: "marker", label: "Lunch", note: "Open seating, organic conversations" },

  { kind: "block", blockNumber: "03", pillar: "Marketing" },
  { time: "12:30", kind: "slot", pillar: "Marketing", talkType: "Case Study" },
  { time: "12:45", kind: "slot", pillar: "Marketing", talkType: "How-To" },
  { time: "13:00", kind: "slot", pillar: "Marketing", talkType: "Meta" },

  { time: "13:15", kind: "marker", label: "Break" },

  { kind: "block", blockNumber: "04", pillar: "Integrating with Teams" },
  { time: "13:35", kind: "slot", pillar: "Integrating with Teams", talkType: "Case Study" },
  { time: "13:50", kind: "slot", pillar: "Integrating with Teams", talkType: "How-To" },
  { time: "14:05", kind: "slot", pillar: "Integrating with Teams", talkType: "Meta" },

  { time: "14:20", kind: "marker", label: "Closing remarks" },
  { time: "14:35", kind: "marker", label: "Drinks + extended conversations", note: "Wraps by 16:30" },
];

export default function AgentAssembly() {
  return (
    <div
      className="min-h-screen bg-[#1E40FF] text-white [&_h1]:!font-sans [&_h2]:!font-sans [&_h3]:!font-sans"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E40FF]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <span className="font-mono text-sm font-medium uppercase tracking-widest text-white">
            Agent Assembly
          </span>
          <a
            href="#apply"
            className="bg-[#C7FF3F] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
          >
            Save Your Seat
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {/* Robot mascot — framed card with video, anchored to the right */}
            <div className="absolute right-6 top-32 hidden w-[280px] lg:right-24 lg:top-56 lg:block xl:right-32 xl:top-64 xl:w-[340px]">
              <div className="border border-white/20 bg-[#1730D6] p-4">
                <div className="aspect-square w-full overflow-hidden bg-[#1E40FF]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/videos/agent-bot-poster.png"
                    className="h-full w-full object-cover"
                  >
                    <source src="/videos/agent-bot.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C7FF3F]">
                    AGT-001
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C7FF3F]" />
                    Live
                  </span>
                </div>
              </div>
            </div>

            {/* Mono meta strip */}
            <div className="mb-10 flex items-center gap-4 lg:mb-14">
              <div className="h-px w-12 bg-[#C7FF3F]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C7FF3F]">
                Fall 2026 · Toronto
              </span>
            </div>

            {/* Massive stacked title */}
            <h1
              className="font-sans font-bold leading-[0.85] lg:max-w-[calc(100%-360px)] xl:max-w-[calc(100%-440px)]"
              style={{ letterSpacing: '-0.06em' }}
            >
              <span className="block text-[clamp(3.5rem,13vw,10.5rem)] text-white">
                AGENT
              </span>
              <span
                className="block text-[clamp(3.5rem,13vw,10.5rem)] text-transparent"
                style={{
                  WebkitTextStroke: '3px white',
                }}
              >
                ASSEMBLY
              </span>
              <span className="mt-3 block font-mono text-3xl font-medium text-[#C7FF3F] lg:text-5xl">
                2026
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-12 max-w-2xl text-2xl leading-tight text-white lg:text-3xl">
              A one-day gathering for owners, operators, and senior leaders who care about real ROI from AI.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center bg-[#C7FF3F] px-7 py-4 font-mono text-sm font-semibold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
              >
                Save Your Seat
                <span className="ml-3">→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center border border-white/40 px-7 py-4 font-mono text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white/10"
              >
                What it is
              </a>
            </div>

            {/* Robot mascot — inline below CTA on mobile only */}
            <div className="mx-auto mt-16 block w-[280px] lg:hidden">
              <div className="border border-white/20 bg-[#1730D6] p-4">
                <div className="aspect-square w-full overflow-hidden bg-[#1E40FF]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/videos/agent-bot-poster.png"
                    className="h-full w-full object-cover"
                  >
                    <source src="/videos/agent-bot.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C7FF3F]">
                    AGT-001
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C7FF3F]" />
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details strip */}
        <section className="border-y border-white/15">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-4">
              {[
                { label: "When", value: "Fall 2026", sub: "Single day" },
                { label: "Where", value: "Toronto", sub: "Venue TBA" },
                { label: "Who", value: "Operators", sub: "Owners, VPs, GMs" },
                { label: "What", value: "Talks + Tables", sub: "Operator-led" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`px-6 py-10 ${
                    i < 3 ? 'border-b border-white/15 md:border-b-0 md:border-r' : ''
                  }`}
                >
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-[#C7FF3F]">
                    {item.label}
                  </div>
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                  <div className="mt-1 font-mono text-xs text-white/60">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What it is */}
        <section id="about" className="bg-[#F5F2EA] text-black">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 md:grid-cols-[2fr_3fr] lg:gap-20">
              <div>
                <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1E40FF]">
                  01 / The premise
                </div>
                <h2
                  className="font-sans text-4xl font-bold leading-[0.95] lg:text-5xl xl:text-6xl"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  Real ROI. Not AI for AI's sake.
                </h2>
              </div>
              <div className="space-y-5 text-lg leading-relaxed text-black/75">
                <p>
                  Agent Assembly is built for owners, operators, and senior leaders who care about getting real ROI from AI, not running pilots or chasing trends. People with real accountability: to a P&amp;L, to a function, to a board.
                </p>
                <p>
                  Short talks from operators who shipped, with the numbers shared honestly. Small group tables where you bring an actual problem and leave with three things you can do Monday. A lunch designed to extend the conversations that matter.
                </p>
                <p>
                  Built around the case studies you actually want to hear, the peers you actually want to meet, and the hallway conversations that usually only happen by accident.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Format */}
        <section className="bg-[#1E40FF]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#C7FF3F]">
                02 / The day
              </div>
              <h2
                className="font-sans text-4xl font-bold leading-[0.95] text-white lg:text-6xl"
                style={{ letterSpacing: '-0.04em' }}
              >
                Built for the conversations, not just the talks.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/75">
                <p>
                  Talks are 15 minutes, operator-led, real numbers — the kind of case studies you&apos;d ask about at dinner if you got the chance.
                </p>
                <p>
                  Everything else is open: lunch with no assigned seating, drinks at the end, real pauses built into the day so the conversations actually compound the talks you watched.
                </p>
                <p>
                  The structure is for the room, not just the program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who */}
        <section className="bg-[#F5F2EA] text-black">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="mb-14 max-w-3xl">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#1E40FF]">
                03 / Who's in the room
              </div>
              <h2
                className="font-sans text-4xl font-bold leading-[0.95] lg:text-6xl"
                style={{ letterSpacing: '-0.04em' }}
              >
                Owners. Operators. The people accountable for what gets shipped.
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {[
                {
                  label: "Business Owners",
                  description:
                    "Founders and second-gen owners who think across every department and care about P&L impact more than the tech underneath it.",
                },
                {
                  label: "Senior Operators",
                  description:
                    "Presidents, GMs, and COOs responsible for what gets shipped, what it costs, and whether it actually lands inside the business.",
                },
                {
                  label: "Functional Leaders",
                  description:
                    "VPs and heads of marketing, finance, customer success, and operations at larger organizations — with the budget and mandate to figure AI out for your function.",
                },
                {
                  label: "Cross-Functional Mix",
                  description:
                    "Owners and enterprise VPs in the same room on equal footing. The conversations get sharper when ops, marketing, finance, and the C-suite are all present at once.",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-3 h-px w-10 bg-[#1E40FF]" />
                  <h3 className="mb-2 text-lg font-bold text-black">{item.label}</h3>
                  <p className="text-base leading-relaxed text-black/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* On the docket — sample agenda */}
        <section className="border-t border-white/15 bg-[#1E40FF]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="mb-14 max-w-3xl">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#C7FF3F]">
                04 / On the docket
              </div>
              <h2
                className="font-sans text-4xl font-bold leading-[0.95] text-white lg:text-6xl"
                style={{ letterSpacing: '-0.04em' }}
              >
                A draft of the day.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                Four thematic blocks. Each opens with a real case study, then a how-to you can copy, then a meta talk that zooms out. The shape is locked. Topics fill in over the summer.
              </p>
            </div>

            <div className="space-y-3">
              {itinerary.map((row, i) => {
                if (row.kind === "marker") {
                  return (
                    <div key={i} className="grid grid-cols-[80px_1fr] items-center gap-6 border-b border-white/10 py-4 lg:grid-cols-[120px_1fr]">
                      <div className="font-mono text-sm text-[#C7FF3F]">{row.time}</div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="font-mono text-xs uppercase tracking-widest text-white/55">{row.label}</span>
                        {row.note && (
                          <span className="text-sm text-white/65">{row.note}</span>
                        )}
                      </div>
                    </div>
                  );
                }

                if (row.kind === "block") {
                  return (
                    <div key={i} className="grid grid-cols-[80px_1fr] items-center gap-6 pt-8 lg:grid-cols-[120px_1fr]">
                      <div className="h-px w-full bg-[#C7FF3F]/40" />
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C7FF3F]">
                          Block {row.blockNumber}
                        </span>
                        <h3 className="font-sans text-xl font-bold text-white lg:text-2xl">
                          {row.pillar}
                        </h3>
                      </div>
                    </div>
                  );
                }

                // slot — placeholder talk with pillar + type label
                return (
                  <div key={i} className="grid grid-cols-[80px_1fr] gap-6 lg:grid-cols-[120px_1fr]">
                    <div className="pt-6 font-mono text-sm text-[#C7FF3F]">{row.time}</div>
                    <div className="border border-dashed border-white/20 bg-white/[0.02] p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-x-3 font-mono text-[10px] uppercase tracking-widest">
                        <span className="text-[#C7FF3F]">{row.talkType}</span>
                        <span className="text-white/40">15 min</span>
                      </div>
                      <h3 className="text-lg font-bold leading-tight text-white/70 lg:text-xl">
                        {row.pillar}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sponsors — placeholder */}
        <section className="border-t border-white/15 bg-[#1E40FF]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#C7FF3F]">
                05 / Sponsors
              </div>
              <h2
                className="font-sans text-3xl font-bold leading-[0.95] text-white lg:text-5xl"
                style={{ letterSpacing: '-0.04em' }}
              >
                Brought to you by operators we trust.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                Sponsor lineup announced closer to the date.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-[5/2] items-center justify-center border border-dashed border-white/20 bg-white/[0.02]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Sponsor logo
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Save Your Seat CTA */}
        <section id="apply" className="bg-black">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
            <div className="mb-6 font-mono text-xs uppercase tracking-widest text-[#C7FF3F]">
              06 / Save Your Seat
            </div>
            <h2
              className="mb-8 font-sans text-5xl font-bold leading-[0.9] text-white lg:text-7xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Want a seat?
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-white/70">
              Drop your details and tell us what you're working on. We'll send program updates and lock your seat as the lineup firms up.
            </p>
            <a
              href="mailto:hello@yourgoodcompany.com?subject=Agent Assembly — Save my seat"
              className="inline-flex items-center bg-[#C7FF3F] px-10 py-5 font-mono text-sm font-semibold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
            >
              Save Your Seat
              <span className="ml-3">→</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/15 bg-[#1E40FF]">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
            <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  Presented by
                </span>
                <Image
                  src="/images/logos/script-inline.png"
                  alt="Good Company"
                  width={120}
                  height={28}
                  className="h-5 w-auto opacity-80 brightness-0 invert"
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                © 2026 Agent Assembly · Toronto
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
