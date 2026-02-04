import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6">
      <h1 className="mb-4 font-serif text-4xl font-bold text-dark">
        Mind Map Not Found
      </h1>
      <p className="mb-8 text-text-light">
        This mind map may have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light"
      >
        Back to Home
      </Link>
    </div>
  );
}
