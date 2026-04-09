'use client';

import Image from "next/image";
import { Tilt, GlowButton, PixelBackground, ShimmeringText } from "@/components/unlumen";

/*
  Signal TO — standalone event branding
  Warm palette + editorial grid structure (inspired by Build Canada)
    bg:         #F4F0EB (warm linen)
    bg-alt:     #EBE6DF (sand)
    surface:    #FFFFFF
    accent:     #C4713B (burnt sienna / warm copper)
    text:       #2C2420 (warm near-black)
    text-secondary: #6A6058
    text-muted: #A89E94
    border:     #D9D2CA
*/

export default function SignalTO() {
  return (
    <div className="min-h-screen bg-[#F4F0EB]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Nav — structured grid cells */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#D9D2CA] bg-[#F4F0EB]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center">
          <span className="border-r border-[#D9D2CA] px-6 py-4 text-lg font-bold tracking-tight text-[#2C2420]">
            Signal TO
          </span>
          <div className="flex flex-1 items-center justify-end">
            <a href="#details" className="hidden border-r border-[#D9D2CA] px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#6A6058] transition-colors hover:text-[#2C2420] sm:block">
              About
            </a>
            <a href="#format" className="hidden border-r border-[#D9D2CA] px-6 py-4 text-xs font-medium uppercase tracking-widest text-[#6A6058] transition-colors hover:text-[#2C2420] sm:block">
              Format
            </a>
            <a
              href="#register"
              className="bg-[#C4713B] px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#A85D2F]"
            >
              Request Invite
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero with PixelBackground */}
        <PixelBackground
          gap={6}
          speed={30}
          pattern="cursor"
          colors="#D9D2CA,#C4713B,#A89E94"
          className="border-b border-[#D9D2CA]"
        >
          <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pb-28 lg:pt-44">
            {/* Top meta row */}
            <div className="mb-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-[#D9D2CA]" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#6A6058]">
                July 8, 2026 &middot; Toronto &middot; Invite Only
              </span>
              <div className="h-px flex-1 bg-[#D9D2CA]" />
            </div>

            <h1 className="mb-6 font-sans text-6xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
              <ShimmeringText
                text="Signal TO"
                color="#2C2420"
                shimmerColor="#F4F0EB"
                duration={3}
                spread={4}
                repeatDelay={3}
                className="font-sans text-6xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl"
              />
            </h1>

            <p className="mb-10 max-w-2xl text-xl text-[#4A423B] lg:text-2xl">
              One day. Curated conversations.
            </p>

            <p className="mb-12 max-w-xl text-base text-[#6A6058] lg:text-lg">
              An invite-only gathering of business leaders, operators, and builders cutting through the noise on AI, together.
            </p>

            <div className="flex flex-wrap gap-4">
              <GlowButton
                colors={["#C4713B", "#D4956A", "#C4713B", "#A85D2F"]}
                blur="8px"
                opacity={0.3}
              >
                <a
                  href="#register"
                  className="inline-flex items-center bg-[#C4713B] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-200 hover:bg-[#A85D2F]"
                >
                  Request an Invite
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </GlowButton>
              <a
                href="#details"
                className="inline-flex items-center border border-[#D9D2CA] px-7 py-3 text-sm font-medium text-[#6A6058] transition-colors duration-200 hover:border-[#A89E94] hover:text-[#2C2420]"
              >
                Learn More
              </a>
            </div>
          </div>
        </PixelBackground>

        {/* Details strip — grid cells with visible borders */}
        <section className="border-b border-[#D9D2CA]">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4">
              {[
                { label: "Date", value: "July 8, 2026", sub: "Wednesday" },
                { label: "Location", value: "Toronto", sub: "Venue details TBA" },
                { label: "Format", value: "One Day", sub: "Keynotes + Breakouts" },
                { label: "Size", value: "50\u2013100", sub: "Invite only" },
              ].map((item, i) => (
                <div key={item.label} className={`px-6 py-8 text-center ${i < 3 ? "border-b md:border-b-0 md:border-r" : ""} border-[#D9D2CA]`}>
                  <div className="mb-1 text-[10px] font-medium uppercase tracking-widest text-[#A89E94]">
                    {item.label}
                  </div>
                  <div className="text-2xl font-bold text-[#2C2420]">{item.value}</div>
                  <div className="mt-0.5 text-sm text-[#A89E94]">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Signal TO — two column grid */}
        <section id="details" className="border-b border-[#D9D2CA] bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-[1fr_2fr]">
              {/* Left cell — label */}
              <div className="border-b border-[#D9D2CA] px-6 py-12 md:border-b-0 md:border-r lg:py-16">
                <h2 className="font-sans text-3xl font-semibold text-[#2C2420] lg:text-4xl">
                  What is<br />Signal TO?
                </h2>
              </div>
              {/* Right cell — content */}
              <div className="px-6 py-12 lg:px-10 lg:py-16">
                <div className="max-w-xl space-y-5 text-lg leading-relaxed text-[#6A6058]">
                  <p>
                    Every week there&apos;s a new headline about AI changing everything. Most of it is noise. Signal TO is about finding the signal.
                  </p>
                  <p>
                    This is a one-day, invite-only conference built around real conversations, not keynote monologues. Small breakout sessions. Cross-industry perspectives. People who are actually building with these tools sitting next to people who are trying to figure out where to start.
                  </p>
                  <p>
                    No booths. No sponsor pitches. No lanyard culture. Just a room full of people worth talking to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Format — grid cells */}
        <section id="format" className="border-b border-[#D9D2CA] bg-[#F4F0EB]">
          <div className="mx-auto max-w-6xl">
            {/* Section header */}
            <div className="border-b border-[#D9D2CA] px-6 py-8">
              <h2 className="font-sans text-3xl font-semibold text-[#2C2420] lg:text-4xl">
                The Format
              </h2>
            </div>
            {/* Three cells */}
            <div className="grid md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Keynotes",
                  description: "Two or three speakers setting the frame for the day. Short, sharp, no sales decks.",
                },
                {
                  number: "02",
                  title: "Breakout Sessions",
                  description: "Small groups, real problems. Four to five rooms running in parallel so you pick what matters to you.",
                },
                {
                  number: "03",
                  title: "Open Conversations",
                  description: "Lunch, coffee, and unstructured time built in. The best conversations at conferences happen off-agenda.",
                },
              ].map((item, i) => (
                <Tilt key={item.title} rotationFactor={4} springOptions={{ stiffness: 300, damping: 20 }}>
                  <div className={`h-full px-6 py-10 ${i < 2 ? "border-b md:border-b-0 md:border-r" : ""} border-[#D9D2CA]`}>
                    <span className="mb-4 block text-xs font-medium text-[#C4713B]">{item.number}</span>
                    <h3 className="mb-3 text-lg font-semibold text-[#2C2420]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#6A6058]">{item.description}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For — two column grid */}
        <section className="border-b border-[#D9D2CA] bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-[1fr_2fr]">
              {/* Left cell */}
              <div className="border-b border-[#D9D2CA] px-6 py-12 md:border-b-0 md:border-r lg:py-16">
                <h2 className="font-sans text-3xl font-semibold text-[#2C2420] lg:text-4xl">
                  Who It&apos;s For
                </h2>
              </div>
              {/* Right cell */}
              <div className="px-6 py-12 lg:px-10 lg:py-16">
                <div className="grid gap-8 sm:grid-cols-2">
                  {[
                    {
                      label: "Business Leaders & Operators",
                      description: "Founders, executives, and operators running $1M-$50M businesses who want to understand where AI fits without the hype.",
                    },
                    {
                      label: "Builders & Practitioners",
                      description: "People who are already implementing AI in real companies and want to share what\u2019s actually working.",
                    },
                    {
                      label: "Industry Experts",
                      description: "Consultants, advisors, and domain experts who bring cross-industry perspective to the conversation.",
                    },
                    {
                      label: "Next-Gen Talent",
                      description: "Students and early-career builders joining for the hackathon and breakout sessions. Fresh eyes on hard problems.",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 h-px w-8 bg-[#C4713B]" />
                      <h3 className="mb-1 text-sm font-semibold text-[#2C2420]">{item.label}</h3>
                      <p className="text-sm leading-relaxed text-[#6A6058]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hackathon — full width banner */}
        <section className="border-b border-[#D9D2CA] bg-[#EBE6DF]">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-[auto_1fr]">
              {/* Left — date cell */}
              <div className="flex items-center border-b border-[#D9D2CA] px-6 py-8 md:border-b-0 md:border-r md:py-12">
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-[#C4713B]">
                    July 1 &ndash; 8
                  </span>
                  <h2 className="mt-1 font-sans text-2xl font-semibold text-[#2C2420] lg:text-3xl">
                    The Signal<br />Hackathon
                  </h2>
                </div>
              </div>
              {/* Right — description */}
              <div className="px-6 py-8 md:py-12 lg:px-10">
                <p className="max-w-lg leading-relaxed text-[#6A6058]">
                  Starting Canada Day, teams build real solutions to real business problems over the week leading up to the conference. Winners present to the full room on July 8th. Open to students and professionals.
                </p>
                <p className="mt-4 text-sm text-[#A89E94]">
                  Details and registration coming soon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Register CTA */}
        <section id="register" className="bg-[#2C2420]">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:py-24">
            <h2 className="mb-4 font-sans text-3xl font-semibold text-[#F4F0EB] lg:text-4xl">
              Interested?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-[#A89E94]">
              Signal TO is invite-only. Request an invite and we&apos;ll be in touch as details come together.
            </p>
            <GlowButton
              colors={["#C4713B", "#D4956A", "#F0DDD0", "#C4713B"]}
              blur="10px"
              opacity={0.35}
            >
              <a
                href="https://lu.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#F4F0EB] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#2C2420] transition-all duration-200 hover:bg-[#C4713B] hover:text-white"
              >
                Request an Invite
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </GlowButton>
          </div>
        </section>

        {/* Footer / Presented By */}
        <footer className="border-t border-[#D9D2CA] bg-[#F4F0EB]">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-5 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#A89E94]">
                  Presented by
                </span>
                <div className="h-4 w-px bg-[#D9D2CA]" />
                <Image
                  src="/images/logos/script-inline.png"
                  alt="Good Company"
                  width={120}
                  height={28}
                  className="h-5 w-auto opacity-40 grayscale transition-opacity duration-200 hover:opacity-70"
                />
                <span className="text-sm text-[#D9D2CA]">&times;</span>
                <span className="text-sm font-bold tracking-tight text-[#2C2420]/40 transition-all duration-200 hover:text-[#2C2420]/70">
                  Ascendance Foundry
                </span>
              </div>
              <p className="text-xs text-[#D9D2CA]">
                &copy; 2026 Signal TO
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
