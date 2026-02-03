"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  role: string;
  company: string;
  email: string;
  quote: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  role: "",
  company: "",
  email: "",
  quote: "",
};

export default function TestimonialPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
            Really appreciate you taking the time.
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
        <div className="mx-auto flex max-w-xl items-center justify-between px-6 py-4">
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
      <main className="mx-auto max-w-xl px-6 py-12">
        <div className="mb-8">
          <h1 className="mb-3 font-serif text-3xl font-bold text-dark">
            Quick Testimonial
          </h1>
          <p className="text-text-light">
            Just a few fields. Takes 2 minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="rounded-xl border border-border bg-white p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-dark">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-dark">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dark">
                  Email
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
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                  placeholder="CEO"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-dark">
                  Company
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

            <div className="mt-4">
              <label htmlFor="quote" className="mb-1.5 block text-sm font-medium text-dark">
                Your experience in a sentence or two
              </label>
              <textarea
                id="quote"
                name="quote"
                required
                rows={3}
                value={formData.quote}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-border px-4 py-3 text-dark outline-none transition-colors focus:border-primary"
                placeholder="What would you tell someone considering working with Good Company?"
              />
            </div>
          </div>

          <p className="text-center text-xs text-text-light">
            By submitting, you&apos;re okay with us using this on our website.
          </p>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary py-4 font-semibold text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </main>
    </div>
  );
}
