import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Signal TO - Flyer",
  robots: { index: false, follow: false },
};

export default function SignalTOFlyer() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[#D9D2CA] p-8 print:bg-white print:p-0">
      {/* 1200x630 — LinkedIn / OG image ratio */}
      <div
        className="relative w-full max-w-[600px] overflow-hidden border border-[#D9D2CA] bg-[#F4F0EB]"
        style={{ aspectRatio: "1200 / 630" }}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C4713B]" />

        <div className="relative flex h-full flex-col">
          {/* Top bar — logos */}
          <div className="flex items-center gap-4 border-b border-[#D9D2CA] px-8 py-4">
            <Image
              src="/images/logos/script-inline.png"
              alt="Good Company"
              width={100}
              height={24}
              className="h-4 w-auto opacity-40 grayscale"
            />
            <span className="text-sm text-[#D9D2CA]">&times;</span>
            <span className="text-xs font-bold tracking-tight text-[#2C2420]/40">
              Ascendance Foundry
            </span>
          </div>

          {/* Main content */}
          <div className="flex flex-1 items-end justify-between px-8 pb-8">
            <div>
              <h1 className="font-sans text-5xl font-bold tracking-tight text-[#2C2420] sm:text-6xl">
                Signal TO
              </h1>
              <p className="mt-2 text-base text-[#6A6058]">
                Toronto &middot; July 8, 2026
              </p>
            </div>
            <div className="flex flex-col items-end text-right">
              <div className="mb-3 h-px w-10 bg-[#C4713B]" />
              <p className="text-[10px] font-medium uppercase tracking-widest text-[#C4713B]">
                Invite only
              </p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-[#C4713B]">
                One day &middot; Curated conversations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 1080x1080 — Instagram / social square */}
      <div
        className="relative w-full max-w-[540px] overflow-hidden border border-[#D9D2CA] bg-[#F4F0EB]"
        style={{ aspectRatio: "1 / 1" }}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C4713B]" />

        <div className="relative flex h-full flex-col">
          {/* Top bar — date */}
          <div className="flex items-center border-b border-[#D9D2CA] px-10 py-5">
            <div className="mr-4 h-px w-8 bg-[#C4713B]" />
            <p className="text-[10px] font-medium uppercase tracking-widest text-[#6A6058]">
              July 8, 2026 &middot; Toronto &middot; Invite Only
            </p>
          </div>

          {/* Middle — title */}
          <div className="flex flex-1 items-center border-b border-[#D9D2CA] px-10">
            <div>
              <h1 className="font-sans text-7xl font-bold tracking-tight text-[#2C2420]">
                Signal
                <br />
                TO
              </h1>
              <p className="mt-4 text-lg leading-snug text-[#6A6058]">
                One day. Curated conversations.
              </p>
            </div>
          </div>

          {/* Bottom bar — logos */}
          <div className="flex items-center gap-4 px-10 py-5">
            <span className="text-[10px] uppercase tracking-widest text-[#A89E94]">
              Presented by
            </span>
            <div className="h-3 w-px bg-[#D9D2CA]" />
            <Image
              src="/images/logos/script-inline.png"
              alt="Good Company"
              width={100}
              height={24}
              className="h-4 w-auto opacity-40 grayscale"
            />
            <span className="text-xs text-[#D9D2CA]">&times;</span>
            <span className="text-xs font-bold tracking-tight text-[#2C2420]/40">
              Ascendance Foundry
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
