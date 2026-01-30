import { Header, Footer } from "@/components";

export default function CaseStudiesLoading() {
  return (
    <>
      <Header />
      <main className="animate-pulse">
        {/* Hero Skeleton */}
        <section className="bg-cream pb-6 pt-28 lg:pt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="h-6 w-24 bg-[#D4CFC7] rounded mb-4"></div>
            <div className="h-12 w-96 max-w-full bg-[#D4CFC7] rounded mb-4"></div>
            <div className="h-6 w-72 max-w-full bg-[#D4CFC7] rounded"></div>
          </div>
        </section>

        {/* Filter Skeleton */}
        <section className="bg-cream pb-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex gap-3 flex-wrap">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-24 bg-[#D4CFC7] rounded-full"></div>
              ))}
            </div>
          </div>
        </section>

        {/* Cards Skeleton */}
        <section className="bg-cream pb-16 pt-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#D4CFC7] bg-white p-6"
                >
                  <div className="h-5 w-20 bg-[#D4CFC7] rounded mb-4"></div>
                  <div className="h-7 w-full bg-[#D4CFC7] rounded mb-3"></div>
                  <div className="h-4 w-full bg-[#D4CFC7] rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-[#D4CFC7] rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-2/3 bg-[#D4CFC7] rounded"></div>
                    <div className="h-4 w-1/2 bg-[#D4CFC7] rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
