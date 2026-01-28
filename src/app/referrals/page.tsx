"use client";

import { Header, Footer } from "@/components";
import RoughAnnotation from "@/components/RoughAnnotation";

export default function ReferralsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#E8E3DB] px-6 pb-16 pt-32 lg:px-10 lg:pb-16 lg:pt-40">
          <div className="mx-auto max-w-[600px] text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#6B6B6B]">
              Referrals
            </p>
            <h1 className="mb-6 text-4xl font-bold text-[#1A1A1A] md:text-[44px] lg:text-[48px] lg:leading-tight">
              Know someone who could use my help?
            </h1>
            <p className="text-lg leading-[1.7] text-[#4A4A4A]">
              If you introduce me to someone who becomes a client, I&apos;ll pay you{" "}
              <RoughAnnotation
                type="underline"
                color="#B8860B"
                strokeWidth={2}
                animationDuration={600}
                showOnScroll={true}
              >
                10%
              </RoughAnnotation>{" "}
              of everything they pay me. Not just the first project—every invoice, for as long as they&apos;re a client.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-[600px]">
            <h2 className="mb-10 text-center text-[28px] font-semibold text-[#1A1A1A]">
              How it works
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-[#006747]">1.</span>
                <p className="text-lg text-[#3D3D3D]">Send an intro (email is fine)</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-[#006747]">2.</span>
                <p className="text-lg text-[#3D3D3D]">I take it from there</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-[#006747]">3.</span>
                <p className="text-lg text-[#3D3D3D]">You get paid after every invoice clears</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="bg-[#E8E3DB] px-6 pb-20 pt-16 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-[600px] text-center">
            <h2 className="mb-4 text-2xl font-semibold text-[#1A1A1A]">
              That&apos;s it.
            </h2>
            <p className="mb-8 text-base text-[#666666]">
              No minimum engagement. No specific industry. No paperwork unless you want it.
            </p>
            <p className="mb-4 text-base text-[#4A4A4A]">
              If you have someone in mind, email me:
            </p>
            <a
              href="mailto:alex@goodcompany.ca"
              className="inline-block text-xl font-semibold text-[#006747] transition-all hover:underline"
            >
              <RoughAnnotation
                type="underline"
                color="#006747"
                strokeWidth={2}
                animationDuration={600}
                showOnScroll={true}
                delay={300}
              >
                alex@goodcompany.ca
              </RoughAnnotation>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
