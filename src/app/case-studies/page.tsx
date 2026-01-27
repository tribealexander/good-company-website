import { Header, Footer, Button } from "@/components";

export const metadata = {
  title: "Case Studies - Good Company",
  description:
    "Real implementations, real results. See how we've helped businesses automate operations, build visibility, and improve accountability.",
};

export default function CaseStudies() {
  // Placeholder case studies ready for video embeds
  const caseStudies = [
    {
      title: "Customer Success Workflow Automation",
      industry: "Managed Services",
      videoPlaceholder: true,
      results: ["80% reduction in reporting time", "3 at-risk accounts flagged early"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Real-Time Project Profitability Dashboard",
      industry: "Professional Services",
      videoPlaceholder: true,
      results: ["Real-time margin tracking", "15% improvement in utilization"],
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Knowledge Capture System Implementation",
      industry: "Municipal Technology",
      videoPlaceholder: true,
      results: ["Complete process documentation", "40% faster onboarding"],
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-dark md:text-5xl lg:text-6xl">
              Case Studies
            </h1>
            <p className="max-w-2xl text-xl text-text-light">
              Real implementations, real results.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {/* Coming Soon Notice */}
            <div className="mb-16 rounded-xl border border-border bg-white p-8 text-center lg:p-10">
              <p className="text-lg text-text">
                <strong className="text-dark">Case studies coming soon.</strong>
              </p>
              <p className="mt-2 text-text-light">
                Recent client work includes workflow automation for managed service providers,
                municipal technology platforms, and professional services firms.
              </p>
            </div>

            {/* Video-Ready Case Study Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:shadow-lg"
                >
                  {/* Video Embed Area (placeholder) */}
                  <div
                    className={`relative flex aspect-video items-center justify-center bg-gradient-to-br ${study.gradient}`}
                  >
                    {/* Play button placeholder */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                      <svg
                        className="ml-1 h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    {/* Video coming soon overlay */}
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded bg-black/50 px-2 py-1 text-xs text-white/80">
                        Video coming soon
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Industry Tag */}
                    <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {study.industry}
                    </span>

                    {/* Title */}
                    <h3 className="mb-4 text-lg font-semibold text-dark">
                      {study.title}
                    </h3>

                    {/* Results */}
                    <div className="space-y-2">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="mt-0.5 text-gold">✓</span>
                          <span className="font-mono text-sm text-text-light">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-dark">
              Ready to be our next success story?
            </h2>
            <p className="mb-8 text-lg text-text-light">
              Let&apos;s discuss how we can help your business reclaim capacity
              and build systems that stick.
            </p>
            <Button href="/#contact">Book a Discovery Call</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
