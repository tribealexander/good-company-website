import Link from "next/link";

export default function ProposalNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAF9F7] px-6">
      <h1 className="mb-4 font-serif text-4xl font-bold text-dark">
        Proposal Not Found
      </h1>
      <p className="mb-8 text-lg text-text-light">
        This proposal link may have expired or been removed.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-light"
      >
        Return Home
      </Link>
    </div>
  );
}
