import { Header, Footer } from "@/components";

export default function CaseStudyLoading() {
  return (
    <>
      <Header />
      <main className="bg-cream min-h-screen animate-pulse">
        {/* Back Link Skeleton */}
        <div className="mx-auto max-w-4xl px-6 pt-28 lg:px-10 lg:pt-32">
          <div className="h-5 w-40 bg-[#D4CFC7] rounded"></div>
        </div>

        {/* Hero Section Skeleton */}
        <section className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <div className="h-8 w-28 bg-[#D4CFC7] rounded-full mb-4"></div>
          <div className="h-12 w-full max-w-2xl bg-[#D4CFC7] rounded mb-4"></div>
          <div className="h-6 w-full max-w-xl bg-[#D4CFC7] rounded mb-2"></div>
          <div className="h-6 w-3/4 max-w-lg bg-[#D4CFC7] rounded"></div>
        </section>

        {/* Video Skeleton */}
        <section className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <div className="relative w-full bg-[#D4CFC7] rounded-xl" style={{ paddingBottom: "56.25%" }}></div>
        </section>

        {/* Problem Section Skeleton */}
        <section className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <div className="h-8 w-40 bg-[#D4CFC7] rounded mb-6"></div>
          <div className="space-y-3">
            <div className="h-5 w-full bg-[#D4CFC7] rounded"></div>
            <div className="h-5 w-full bg-[#D4CFC7] rounded"></div>
            <div className="h-5 w-3/4 bg-[#D4CFC7] rounded"></div>
          </div>
        </section>

        {/* Solution Section Skeleton */}
        <section className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <div className="h-8 w-40 bg-[#D4CFC7] rounded mb-6"></div>
          <div className="space-y-3">
            <div className="h-5 w-full bg-[#D4CFC7] rounded"></div>
            <div className="h-5 w-full bg-[#D4CFC7] rounded"></div>
            <div className="h-5 w-2/3 bg-[#D4CFC7] rounded"></div>
          </div>
        </section>

        {/* Results Section Skeleton */}
        <section className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <div className="h-8 w-24 bg-[#D4CFC7] rounded mb-8"></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border border-[#D4CFC7] bg-white p-6">
                <div className="h-10 w-24 bg-[#D4CFC7] rounded mb-2"></div>
                <div className="h-4 w-full bg-[#D4CFC7] rounded"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
