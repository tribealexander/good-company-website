export default function TrustIndicators() {
  return (
    <div className="animate-fade-in-up animation-delay-500 mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B6B6B] md:gap-8">
      <span className="flex items-center gap-2">
        <svg
          className="checkmark-animate checkmark-delay-1 h-4 w-4 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        No new hires needed
      </span>
      <span className="flex items-center gap-2">
        <svg
          className="checkmark-animate checkmark-delay-2 h-4 w-4 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        4-month engagements
      </span>
      <span className="flex items-center gap-2">
        <svg
          className="checkmark-animate checkmark-delay-3 h-4 w-4 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        You own everything we build
      </span>
    </div>
  );
}
