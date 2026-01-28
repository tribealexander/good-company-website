import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function InvestmentSection() {
  return (
    <section id="investment" className="bg-cream-textured py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading centered className="mb-6">
            Your Investment
          </SectionHeading>

          {/* ICP Note */}
          <p className="mb-8 text-center text-lg text-text-light">
            For $1M-$50M companies with 10-200 employees
          </p>
        </ScrollReveal>

        {/* Discovery Workshop - Separate tier with tighter padding */}
        <ScrollReveal>
          <div className="mx-auto mb-8 max-w-2xl">
            <div className="rounded-2xl border-2 border-dashed border-[#D4CFC7] bg-white p-5 lg:p-6">
              <div className="text-center">
                <h3 className="mb-2 text-xl font-semibold text-dark">
                  Discovery Workshop
                </h3>
                <div className="mb-2 font-mono text-3xl font-bold text-gold">
                  $6K
                </div>
                <p className="mb-3 text-sm text-text-light">
                  Stakeholder interviews, workflow mapping, data audit,
                  prioritized roadmap. We&apos;ll tell you exactly what to
                  automate and recommend a package size.
                </p>
                <div className="inline-block rounded-md bg-cream px-4 py-2 font-mono text-sm font-semibold text-primary">
                  $5K credit toward partnership if you proceed
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Transition text */}
        <ScrollReveal>
          <p className="mb-6 text-center text-base font-medium text-text">
            After Discovery, most clients move into an ongoing partnership:
          </p>
        </ScrollReveal>

        {/* 3 Partnership Tiers */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <ScrollReveal delay={0}>
            <div className="h-full rounded-xl border-2 border-[#D4CFC7] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/50">
              <h3 className="mb-1 text-xl font-semibold text-dark">
                Starter Partnership
              </h3>
              <div className="mb-2 font-mono text-3xl font-bold text-gold">
                $4,000
                <span className="text-base text-text-light">/mo</span>
              </div>
              <p className="mb-1 text-sm italic text-text-light">
                4 hours per week
              </p>
              <p className="mb-3 text-sm leading-relaxed text-text">
                Ideal for single workflow automation or maintenance of existing
                systems.
              </p>
              <div className="rounded-md bg-cream px-3 py-1.5 font-mono text-xs text-text-light">
                4 month minimum commitment
              </div>
            </div>
          </ScrollReveal>

          {/* Standard - Featured */}
          <ScrollReveal delay={100}>
            <div className="relative h-full scale-[1.02] rounded-xl border-2 border-primary bg-white p-5 shadow-[0_12px_48px_rgba(0,103,71,0.12)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  Most Popular
                </span>
              </div>
              <h3 className="mb-1 text-xl font-semibold text-dark">
                Standard Partnership
              </h3>
              <div className="mb-2 font-mono text-3xl font-bold text-gold">
                $10,000
                <span className="text-base text-text-light">/mo</span>
              </div>
              <p className="mb-1 text-sm italic text-text-light">
                10 hours per week
              </p>
              <p className="mb-3 text-sm leading-relaxed text-text">
                Most common package. Build and expand multiple systems with
                ongoing optimization.
              </p>
              <div className="rounded-md bg-cream px-3 py-1.5 font-mono text-xs font-semibold text-primary">
                4 month minimum commitment
              </div>
            </div>
          </ScrollReveal>

          {/* Premium */}
          <ScrollReveal delay={200}>
            <div className="h-full rounded-xl border-2 border-[#D4CFC7] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-primary/50">
              <h3 className="mb-1 text-xl font-semibold text-dark">
                Premium Partnership
              </h3>
              <div className="mb-2 font-mono text-3xl font-bold text-gold">
                $18,000
                <span className="text-base text-text-light">/mo</span>
              </div>
              <p className="mb-1 text-sm italic text-text-light">
                20 hours per week
              </p>
              <p className="mb-3 text-sm leading-relaxed text-text">
                Dedicated capacity for complex implementations, multiple
                departments, or rapid buildout.
              </p>
              <div className="rounded-md bg-cream px-3 py-1.5 font-mono text-xs text-text-light">
                4 month minimum commitment
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Note below pricing */}
        <ScrollReveal>
          <p className="mt-6 text-center text-sm text-text-light">
            All partnerships include maintenance, tuning, and expansion. The
            difference is speed—how quickly we can build and how much we can
            cover.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
