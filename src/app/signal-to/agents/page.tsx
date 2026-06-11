'use client';

import Link from "next/link";
import type { ReactNode } from "react";

/*
  Agent Assembly — Meet the Agents
  10 character variations in the cobalt + lime + white system
*/

// Shared body parts — neck, torso, arms, hands, feet
function BotBody() {
  return (
    <>
      <rect x="102" y="162" width="36" height="14" fill="white" />
      <rect x="44" y="176" width="152" height="92" rx="14" fill="white" />
      <rect x="22" y="184" width="22" height="70" rx="11" fill="white" />
      <rect x="196" y="184" width="22" height="70" rx="11" fill="white" />
      <circle cx="33" cy="260" r="13" fill="white" />
      <circle cx="207" cy="260" r="13" fill="white" />
      <rect x="66" y="268" width="36" height="20" rx="5" fill="white" />
      <rect x="138" y="268" width="36" height="20" rx="5" fill="white" />
    </>
  );
}

function BotHead() {
  return <rect x="62" y="56" width="116" height="106" rx="16" fill="white" />;
}

function Smile() {
  return (
    <path d="M 100 128 Q 120 148 140 128" fill="none" stroke="#1E40FF" strokeWidth="6" strokeLinecap="round" />
  );
}

function CheekDots() {
  return (
    <>
      <circle cx="78" cy="132" r="5" fill="#C7FF3F" opacity="0.55" />
      <circle cx="162" cy="132" r="5" fill="#C7FF3F" opacity="0.55" />
    </>
  );
}

function BotFrame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      {children}
    </svg>
  );
}

// 1. THE DIRECTOR — headset + sunglasses + smile
function TheDirector() {
  return (
    <BotFrame>
      <path d="M 60 60 Q 120 12 180 60" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <circle cx="184" cy="80" r="10" fill="white" />
      <circle cx="184" cy="80" r="4" fill="#1E40FF" />
      <path d="M 184 88 Q 175 110 158 118" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <circle cx="156" cy="120" r="4" fill="#C7FF3F" />
      <circle cx="56" cy="80" r="10" fill="white" />
      <circle cx="56" cy="80" r="4" fill="#1E40FF" />
      <BotHead />
      <rect x="72" y="86" width="96" height="24" rx="6" fill="#1E40FF" />
      <rect x="80" y="91" width="16" height="3" rx="1.5" fill="#C7FF3F" opacity="0.8" />
      <rect x="142" y="91" width="10" height="3" rx="1.5" fill="#C7FF3F" opacity="0.5" />
      <Smile />
      <CheekDots />
      <BotBody />
      <rect x="74" y="194" width="92" height="42" rx="6" fill="#1E40FF" />
      <text x="120" y="218" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="14" fontWeight="700" fill="#C7FF3F" letterSpacing="2">AGENT</text>
    </BotFrame>
  );
}

// 2. THE CLOSER — top hat + sunglasses + smirk
function TheCloser() {
  return (
    <BotFrame>
      {/* Top hat */}
      <rect x="76" y="14" width="88" height="44" rx="2" fill="white" />
      <rect x="62" y="50" width="116" height="10" rx="2" fill="white" />
      <rect x="76" y="30" width="88" height="6" fill="#1E40FF" />
      <BotHead />
      {/* Sunglasses */}
      <rect x="72" y="86" width="96" height="22" rx="11" fill="#1E40FF" />
      <rect x="80" y="92" width="14" height="3" rx="1.5" fill="#C7FF3F" opacity="0.7" />
      {/* Smirk */}
      <path d="M 102 134 Q 120 142 142 132" fill="none" stroke="#1E40FF" strokeWidth="6" strokeLinecap="round" />
      <CheekDots />
      <BotBody />
      {/* Bowtie */}
      <path d="M 100 178 L 120 188 L 100 198 Z" fill="#C7FF3F" />
      <path d="M 140 178 L 120 188 L 140 198 Z" fill="#C7FF3F" />
      <rect x="116" y="184" width="8" height="8" rx="1" fill="#1E40FF" />
      <rect x="74" y="208" width="92" height="42" rx="6" fill="#1E40FF" />
      <text x="120" y="232" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="14" fontWeight="700" fill="#C7FF3F" letterSpacing="2">CLOSE</text>
    </BotFrame>
  );
}

// 3. THE BUILDER — hard hat + smile + wrench
function TheBuilder() {
  return (
    <BotFrame>
      {/* Hard hat */}
      <path d="M 50 58 Q 50 28 120 28 Q 190 28 190 58 Z" fill="#C7FF3F" />
      <rect x="48" y="56" width="144" height="8" rx="2" fill="#C7FF3F" />
      <rect x="118" y="28" width="4" height="30" fill="#1E40FF" opacity="0.3" />
      <BotHead />
      {/* Eyes — visible, no visor */}
      <circle cx="86" cy="98" r="11" fill="#1E40FF" />
      <circle cx="154" cy="98" r="11" fill="#1E40FF" />
      <circle cx="88" cy="96" r="4" fill="#C7FF3F" />
      <circle cx="156" cy="96" r="4" fill="#C7FF3F" />
      <Smile />
      <CheekDots />
      <BotBody />
      {/* Wrench badge */}
      <rect x="74" y="194" width="92" height="42" rx="6" fill="#1E40FF" />
      <g transform="translate(120 215) rotate(-30)">
        <rect x="-22" y="-3" width="44" height="6" rx="2" fill="#C7FF3F" />
        <circle cx="-22" cy="0" r="6" fill="#C7FF3F" />
        <circle cx="-22" cy="0" r="2" fill="#1E40FF" />
        <circle cx="22" cy="0" r="6" fill="#C7FF3F" />
        <circle cx="22" cy="0" r="2" fill="#1E40FF" />
      </g>
    </BotFrame>
  );
}

// 4. THE ANALYST — round glasses + bar chart on chest
function TheAnalyst() {
  return (
    <BotFrame>
      {/* Antenna */}
      <line x1="120" y1="20" x2="120" y2="44" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <circle cx="120" cy="18" r="6" fill="#C7FF3F" />
      <BotHead />
      {/* Round glasses */}
      <circle cx="86" cy="98" r="16" fill="none" stroke="#1E40FF" strokeWidth="4" />
      <circle cx="154" cy="98" r="16" fill="none" stroke="#1E40FF" strokeWidth="4" />
      <line x1="102" y1="98" x2="138" y2="98" stroke="#1E40FF" strokeWidth="4" />
      {/* Eyes inside glasses */}
      <circle cx="86" cy="98" r="4" fill="#1E40FF" />
      <circle cx="154" cy="98" r="4" fill="#1E40FF" />
      <Smile />
      <CheekDots />
      <BotBody />
      <rect x="74" y="194" width="92" height="42" rx="6" fill="#1E40FF" />
      {/* Bar chart */}
      <rect x="84" y="218" width="10" height="12" fill="#C7FF3F" />
      <rect x="98" y="210" width="10" height="20" fill="#C7FF3F" />
      <rect x="112" y="214" width="10" height="16" fill="#C7FF3F" opacity="0.7" />
      <rect x="126" y="202" width="10" height="28" fill="#C7FF3F" />
      <rect x="140" y="206" width="10" height="24" fill="#C7FF3F" opacity="0.7" />
    </BotFrame>
  );
}

// 5. THE HUSTLER — coffee cup head + sleepy eyes + half smile
function TheHustler() {
  return (
    <BotFrame>
      {/* Coffee steam */}
      <path d="M 100 28 Q 95 18 102 12" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M 120 28 Q 115 14 122 8" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M 140 28 Q 135 18 142 12" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      {/* Coffee cup on top of head */}
      <rect x="86" y="34" width="68" height="24" rx="3" fill="#C7FF3F" />
      <rect x="86" y="34" width="68" height="6" fill="white" />
      <path d="M 154 38 Q 168 38 168 48 Q 168 56 154 56" fill="none" stroke="#C7FF3F" strokeWidth="4" />
      <BotHead />
      {/* Sleepy eyes — half closed */}
      <path d="M 72 96 Q 86 102 100 96" fill="none" stroke="#1E40FF" strokeWidth="5" strokeLinecap="round" />
      <path d="M 140 96 Q 154 102 168 96" fill="none" stroke="#1E40FF" strokeWidth="5" strokeLinecap="round" />
      {/* Half smile */}
      <path d="M 104 132 Q 120 142 138 130" fill="none" stroke="#1E40FF" strokeWidth="6" strokeLinecap="round" />
      <CheekDots />
      <BotBody />
      <rect x="74" y="194" width="92" height="42" rx="6" fill="#1E40FF" />
      <text x="120" y="218" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="13" fontWeight="700" fill="#C7FF3F" letterSpacing="1.5">ESPRESSO</text>
    </BotFrame>
  );
}

// 6. THE CREATOR — beret + smile + palette on chest
function TheCreator() {
  return (
    <BotFrame>
      {/* Beret — tilted */}
      <ellipse cx="120" cy="48" rx="62" ry="20" fill="#C7FF3F" />
      <circle cx="158" cy="34" r="6" fill="#C7FF3F" />
      <ellipse cx="120" cy="54" rx="50" ry="6" fill="#1E40FF" opacity="0.2" />
      <BotHead />
      {/* Eyes — half-moon happy eyes */}
      <path d="M 76 94 Q 86 86 96 94" fill="none" stroke="#1E40FF" strokeWidth="5" strokeLinecap="round" />
      <path d="M 144 94 Q 154 86 164 94" fill="none" stroke="#1E40FF" strokeWidth="5" strokeLinecap="round" />
      <Smile />
      <CheekDots />
      <BotBody />
      <rect x="74" y="194" width="92" height="42" rx="6" fill="#1E40FF" />
      {/* Palette */}
      <ellipse cx="120" cy="215" rx="28" ry="14" fill="#C7FF3F" />
      <ellipse cx="138" cy="215" rx="6" ry="3" fill="#1E40FF" />
      <circle cx="108" cy="210" r="3" fill="#1E40FF" />
      <circle cx="118" cy="218" r="3" fill="#1E40FF" />
      <circle cx="128" cy="210" r="3" fill="#1E40FF" />
    </BotFrame>
  );
}

// 7. THE PILOT — aviator goggles + scarf
function ThePilot() {
  return (
    <BotFrame>
      {/* Cap — flight cap */}
      <path d="M 56 58 Q 56 36 120 36 Q 184 36 184 58 Z" fill="white" />
      <rect x="56" y="56" width="128" height="6" fill="#1E40FF" opacity="0.2" />
      {/* Earflaps */}
      <ellipse cx="58" cy="78" rx="10" ry="16" fill="white" />
      <ellipse cx="182" cy="78" rx="10" ry="16" fill="white" />
      <BotHead />
      {/* Aviator goggles — two big circles connected */}
      <circle cx="86" cy="100" r="18" fill="#1E40FF" />
      <circle cx="154" cy="100" r="18" fill="#1E40FF" />
      <rect x="100" y="98" width="40" height="6" rx="3" fill="#1E40FF" />
      <circle cx="86" cy="100" r="14" fill="#C7FF3F" opacity="0.3" />
      <circle cx="154" cy="100" r="14" fill="#C7FF3F" opacity="0.3" />
      <circle cx="92" cy="94" r="4" fill="#C7FF3F" />
      <circle cx="160" cy="94" r="4" fill="#C7FF3F" />
      <Smile />
      <BotBody />
      {/* Scarf wrapping */}
      <rect x="44" y="166" width="152" height="16" rx="4" fill="#C7FF3F" />
      <path d="M 56 180 L 50 220 L 70 218 L 66 180 Z" fill="#C7FF3F" />
      <rect x="74" y="204" width="92" height="42" rx="6" fill="#1E40FF" />
      <text x="120" y="228" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="14" fontWeight="700" fill="#C7FF3F" letterSpacing="2">PILOT</text>
    </BotFrame>
  );
}

// 8. THE BOSS — crown + big smile + dollar sign
function TheBoss() {
  return (
    <BotFrame>
      {/* Crown */}
      <path d="M 64 56 L 70 22 L 90 42 L 110 14 L 130 42 L 150 14 L 170 42 L 176 56 Z" fill="#C7FF3F" />
      <circle cx="70" cy="22" r="4" fill="#1E40FF" />
      <circle cx="110" cy="14" r="4" fill="#1E40FF" />
      <circle cx="150" cy="14" r="4" fill="#1E40FF" />
      <BotHead />
      {/* Eyes — big and confident */}
      <circle cx="86" cy="98" r="12" fill="#1E40FF" />
      <circle cx="154" cy="98" r="12" fill="#1E40FF" />
      <circle cx="89" cy="95" r="4" fill="#C7FF3F" />
      <circle cx="157" cy="95" r="4" fill="#C7FF3F" />
      {/* Big open smile */}
      <path d="M 92 124 Q 120 156 148 124" fill="#1E40FF" />
      <rect x="98" y="130" width="44" height="2" fill="white" />
      <CheekDots />
      <BotBody />
      <rect x="74" y="194" width="92" height="42" rx="6" fill="#1E40FF" />
      {/* Dollar sign */}
      <text x="120" y="226" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="28" fontWeight="700" fill="#C7FF3F">$</text>
    </BotFrame>
  );
}

// 9. THE DJ — over-ear headphones + music note
function TheDJ() {
  return (
    <BotFrame>
      {/* Headphone band */}
      <path d="M 40 78 Q 40 30 120 30 Q 200 30 200 78" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
      {/* Large earcups */}
      <circle cx="40" cy="98" r="22" fill="white" />
      <circle cx="40" cy="98" r="14" fill="#1E40FF" />
      <circle cx="40" cy="98" r="6" fill="#C7FF3F" />
      <circle cx="200" cy="98" r="22" fill="white" />
      <circle cx="200" cy="98" r="14" fill="#1E40FF" />
      <circle cx="200" cy="98" r="6" fill="#C7FF3F" />
      <BotHead />
      {/* Eyes — closed in vibe */}
      <path d="M 76 100 L 96 100" stroke="#1E40FF" strokeWidth="5" strokeLinecap="round" />
      <path d="M 144 100 L 164 100" stroke="#1E40FF" strokeWidth="5" strokeLinecap="round" />
      <Smile />
      <CheekDots />
      <BotBody />
      <rect x="74" y="194" width="92" height="42" rx="6" fill="#1E40FF" />
      {/* Music notes */}
      <circle cx="100" cy="222" r="6" fill="#C7FF3F" />
      <rect x="105" y="200" width="3" height="22" fill="#C7FF3F" />
      <path d="M 105 200 L 122 196 L 122 206 L 105 210 Z" fill="#C7FF3F" />
      <circle cx="135" cy="226" r="5" fill="#C7FF3F" opacity="0.6" />
      <rect x="139" y="208" width="2.5" height="18" fill="#C7FF3F" opacity="0.6" />
    </BotFrame>
  );
}

// 10. THE RESEARCHER — monocle + lab coat + beaker
function TheResearcher() {
  return (
    <BotFrame>
      {/* Slicked hair / cap */}
      <path d="M 60 58 Q 80 38 120 40 Q 160 42 178 56 Z" fill="white" />
      <BotHead />
      {/* Left eye normal */}
      <circle cx="86" cy="98" r="10" fill="#1E40FF" />
      <circle cx="88" cy="96" r="3" fill="#C7FF3F" />
      {/* Right eye with monocle */}
      <circle cx="154" cy="98" r="18" fill="none" stroke="#1E40FF" strokeWidth="3" />
      <circle cx="154" cy="98" r="14" fill="#C7FF3F" opacity="0.15" />
      <circle cx="154" cy="98" r="6" fill="#1E40FF" />
      <circle cx="156" cy="95" r="2" fill="#C7FF3F" />
      <line x1="154" y1="116" x2="148" y2="138" stroke="#1E40FF" strokeWidth="2" />
      <Smile />
      <CheekDots />
      <BotBody />
      {/* Lab coat collar V */}
      <path d="M 80 176 L 120 200 L 160 176 L 160 184 L 120 208 L 80 184 Z" fill="#C7FF3F" />
      <rect x="74" y="210" width="92" height="42" rx="6" fill="#1E40FF" />
      {/* Beaker */}
      <path d="M 110 215 L 110 232 L 100 244 L 140 244 L 130 232 L 130 215 Z" fill="none" stroke="#C7FF3F" strokeWidth="3" />
      <path d="M 104 244 L 136 244 L 132 238 L 108 238 Z" fill="#C7FF3F" />
      <circle cx="118" cy="240" r="2" fill="#C7FF3F" opacity="0.7" />
      <circle cx="126" cy="242" r="1.5" fill="#C7FF3F" opacity="0.5" />
    </BotFrame>
  );
}

const agents: { name: string; tag: string; Component: () => ReactNode }[] = [
  { name: "The Director", tag: "Operations", Component: TheDirector },
  { name: "The Closer", tag: "Sales", Component: TheCloser },
  { name: "The Builder", tag: "Field Ops", Component: TheBuilder },
  { name: "The Analyst", tag: "Finance", Component: TheAnalyst },
  { name: "The Hustler", tag: "Founder Mode", Component: TheHustler },
  { name: "The Creator", tag: "Marketing", Component: TheCreator },
  { name: "The Pilot", tag: "Logistics", Component: ThePilot },
  { name: "The Boss", tag: "C-Suite", Component: TheBoss },
  { name: "The DJ", tag: "Customer Success", Component: TheDJ },
  { name: "The Researcher", tag: "R&D", Component: TheResearcher },
];

export default function AgentsPage() {
  return (
    <div
      className="min-h-screen bg-[#1E40FF] text-white"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E40FF]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link
            href="/signal-to"
            className="font-mono text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-70"
          >
            ← Agent Assembly
          </Link>
          <Link
            href="/signal-to#apply"
            className="bg-[#C7FF3F] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
          >
            Apply
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 lg:pt-44 lg:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px w-12 bg-[#C7FF3F]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C7FF3F]">
                The Roster · Ten Agents Strong
              </span>
            </div>

            <h1
              className="font-sans font-bold leading-[0.85]"
              style={{ letterSpacing: '-0.06em' }}
            >
              <span className="block text-[clamp(3rem,12vw,10rem)] text-white">MEET</span>
              <span
                className="block text-[clamp(3rem,12vw,10rem)] text-transparent"
                style={{ WebkitTextStroke: '3px white' }}
              >
                THE AGENTS
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-xl leading-snug text-white lg:text-2xl">
              Every business has them. Every department needs them. The cast that runs the assembly.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
              {agents.map(({ name, tag, Component }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center border border-white/15 bg-white/[0.03] p-6 transition-colors hover:border-[#C7FF3F]/50"
                >
                  <div className="mb-4 w-full max-w-[180px]">
                    <Component />
                  </div>
                  <div className="text-center">
                    <div className="font-sans text-base font-bold tracking-tight text-white">
                      {name}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[#C7FF3F]">
                      {tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / back link */}
        <footer className="border-t border-white/15 bg-[#1E40FF]">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
            <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
              <Link
                href="/signal-to"
                className="font-mono text-xs uppercase tracking-widest text-[#C7FF3F] transition-opacity hover:opacity-70"
              >
                ← Back to Agent Assembly
              </Link>
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
