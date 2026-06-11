import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Agent Assembly — Flyer",
  robots: { index: false, follow: false },
};

export default function AgentAssemblyFlyer() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[#0A0A0A] p-8 print:bg-white print:p-0">
      {/* 1200x630 — LinkedIn / OG image */}
      <div
        className="relative w-full max-w-[700px] overflow-hidden bg-[#1E40FF]"
        style={{ aspectRatio: "1200 / 630", fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C7FF3F]" />

        <div className="relative flex h-full flex-col p-8">
          {/* Top — mono meta */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#C7FF3F]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C7FF3F]">
              Fall 2026 · Toronto
            </span>
          </div>

          {/* Title block */}
          <div className="mt-auto">
            <h1
              className="font-sans font-bold leading-[0.85] text-white"
              style={{ letterSpacing: '-0.06em' }}
            >
              <span className="block text-7xl sm:text-8xl">AGENT</span>
              <span
                className="block text-7xl text-transparent sm:text-8xl"
                style={{ WebkitTextStroke: '2px white' }}
              >
                ASSEMBLY
              </span>
              <span className="mt-2 block font-mono text-xl font-medium text-[#C7FF3F] sm:text-2xl">
                2026
              </span>
            </h1>
          </div>

          {/* Bottom — presented by */}
          <div className="mt-6 flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
              Presented by
            </span>
            <div className="h-3 w-px bg-white/30" />
            <Image
              src="/images/logos/script-inline.png"
              alt="Good Company"
              width={100}
              height={24}
              className="h-4 w-auto brightness-0 invert opacity-80"
            />
          </div>
        </div>
      </div>

      {/* 1080x1080 — Instagram square */}
      <div
        className="relative w-full max-w-[600px] overflow-hidden bg-[#1E40FF]"
        style={{ aspectRatio: "1 / 1", fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C7FF3F]" />

        <div className="relative flex h-full flex-col p-10">
          {/* Top — mono meta */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#C7FF3F]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C7FF3F]">
              Fall 2026 · Toronto
            </span>
          </div>

          {/* Center title */}
          <div className="flex flex-1 items-center">
            <h1
              className="font-sans font-bold leading-[0.85] text-white"
              style={{ letterSpacing: '-0.06em' }}
            >
              <span className="block text-7xl sm:text-8xl">AGENT</span>
              <span
                className="block text-7xl text-transparent sm:text-8xl"
                style={{ WebkitTextStroke: '2px white' }}
              >
                ASSEMBLY
              </span>
              <span className="mt-3 block font-mono text-xl font-medium text-[#C7FF3F] sm:text-2xl">
                2026
              </span>
            </h1>
          </div>

          {/* Tagline + presented by */}
          <div>
            <p className="mb-6 max-w-xs text-base font-medium leading-tight text-white sm:text-lg">
              A one-day working session for business owners deploying AI.
            </p>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
                Presented by
              </span>
              <div className="h-3 w-px bg-white/30" />
              <Image
                src="/images/logos/script-inline.png"
                alt="Good Company"
                width={100}
                height={24}
                className="h-4 w-auto brightness-0 invert opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
