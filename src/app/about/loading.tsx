import { Header, Footer } from "@/components";

export default function AboutLoading() {
  return (
    <>
      <Header />
      <main className="animate-pulse">
        {/* Hero Skeleton */}
        <section className="relative bg-[#E8E3DB] min-h-[60vh]">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-32">
            <div className="max-w-xl">
              <div className="h-4 w-16 bg-[#D4CFC7] rounded mb-4"></div>
              <div className="h-14 w-64 bg-[#D4CFC7] rounded mb-6"></div>
              <div className="h-6 w-80 bg-[#D4CFC7] rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-[#D4CFC7] rounded"></div>
                <div className="h-4 w-full bg-[#D4CFC7] rounded"></div>
                <div className="h-4 w-3/4 bg-[#D4CFC7] rounded"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
