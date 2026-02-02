"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  name: string;
  role: string;
  company: string;
  email: string;
  projectType: string;
  challenge: string;
  solution: string;
  results: string;
  recommendation: string;
  quote: string;
  photoConsent: boolean;
}

const initialFormData: FormData = {
  name: "",
  role: "",
  company: "",
  email: "",
  projectType: "",
  challenge: "",
  solution: "",
  results: "",
  recommendation: "",
  quote: "",
  photoConsent: false,
};

export default function TestimonialPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit testimonial");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAF9F7] px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="mb-4 font-serif text-3xl font-bold text-dark">
            Thank you!
          </h1>
          <p className="mb-8 text-text-light">
            Your testimonial has been submitted. We really appreciate you taking the time to share your experience.
          </p>
          <Link
            href="/"
            className="inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src="/images/logos/script-inline.png"
              alt="Good Company"
              width={140}
              height={32}
              className="h-7 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-10">
          <h1 className="mb-3 font-serif text-3xl font-bold text-dark lg:text-4xl">
            Share Your Experience
          </h1>
          <p className="text-lg text-text-light">
            Your feedback helps other business owners understand what it&apos;s like to work with us. Thank you for taking the time.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <section className="rounded-xl border border-border bg-white p-6 lg:p-8">
            <h2 className="mb-6 text-lg font-semibold text-dark">About You</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-dark">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dark">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-dark">
                  Your Role *
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="CEO, Operations Manager, etc."
                />
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-dark">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="Acme Inc."
                />
              </div>
            </div>
          </section>

          {/* Project Context */}
          <section className="rounded-xl border border-border bg-white p-6 lg:p-8">
            <h2 className="mb-6 text-lg font-semibold text-dark">The Project</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-dark">
                  What type of project did we work on together? *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                >
                  <option value="">Select a project type</option>
                  <option value="automation">Process Automation</option>
                  <option value="dashboard">Dashboard / Reporting</option>
                  <option value="crm">CRM Setup / Integration</option>
                  <option value="operations">Operations Consulting</option>
                  <option value="website">Website Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="challenge" className="mb-1.5 block text-sm font-medium text-dark">
                  What challenge were you facing before we started? *
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows={3}
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="Describe the problem or pain point you were experiencing..."
                />
              </div>
              <div>
                <label htmlFor="solution" className="mb-1.5 block text-sm font-medium text-dark">
                  What did we build or implement for you?
                </label>
                <textarea
                  id="solution"
                  name="solution"
                  rows={3}
                  value={formData.solution}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="Briefly describe the solution..."
                />
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="rounded-xl border border-border bg-white p-6 lg:p-8">
            <h2 className="mb-6 text-lg font-semibold text-dark">Results & Impact</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="results" className="mb-1.5 block text-sm font-medium text-dark">
                  What results have you seen? *
                </label>
                <p className="mb-2 text-sm text-text-light">
                  Time saved, revenue impact, problems solved, etc. Specific numbers are great if you have them.
                </p>
                <textarea
                  id="results"
                  name="results"
                  required
                  rows={3}
                  value={formData.results}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="e.g., 'We've saved 10 hours per week on reporting' or 'Revenue tracking went from guesswork to real-time'"
                />
              </div>
              <div>
                <label htmlFor="recommendation" className="mb-1.5 block text-sm font-medium text-dark">
                  Would you recommend Good Company? Why or why not?
                </label>
                <textarea
                  id="recommendation"
                  name="recommendation"
                  rows={3}
                  value={formData.recommendation}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="What would you tell someone considering working with us?"
                />
              </div>
            </div>
          </section>

          {/* Quote */}
          <section className="rounded-xl border border-border bg-white p-6 lg:p-8">
            <h2 className="mb-6 text-lg font-semibold text-dark">Your Quote</h2>
            <div>
              <label htmlFor="quote" className="mb-1.5 block text-sm font-medium text-dark">
                If we could only share one sentence about your experience, what would it be? *
              </label>
              <p className="mb-2 text-sm text-text-light">
                This is what we&apos;ll use on the website. Keep it punchy!
              </p>
              <textarea
                id="quote"
                name="quote"
                required
                rows={2}
                value={formData.quote}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                placeholder="e.g., 'They turned our chaos into a system we actually use every day.'"
              />
            </div>
          </section>

          {/* Consent */}
          <section className="rounded-xl border border-border bg-white p-6 lg:p-8">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="photoConsent"
                checked={formData.photoConsent}
                onChange={handleChange}
                className="mt-1 h-5 w-5 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm text-text">
                I consent to having my name, role, company, and testimonial displayed on the Good Company website.
                <span className="text-text-light"> (We&apos;ll reach out if we want to use a photo.)</span>
              </span>
            </label>
          </section>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !formData.photoConsent}
            className="w-full rounded-lg bg-primary py-4 font-semibold text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Testimonial"}
          </button>
        </form>
      </main>
    </div>
  );
}
