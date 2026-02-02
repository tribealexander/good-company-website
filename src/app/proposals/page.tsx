"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllProposals } from "@/lib/proposals";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Simple password protection - not super secure but keeps casual visitors out
const ADMIN_PASSWORD = "goodco2026";

export default function ProposalsListPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const proposals = getAllProposals();

  // Password gate
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FAF9F7] px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <Image
              src="/images/logos/script-inline.png"
              alt="Good Company"
              width={140}
              height={32}
              className="mx-auto h-7 w-auto"
            />
          </div>
          <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-white p-8">
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-dark">
              Admin Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-lg border px-4 py-3 text-dark outline-none transition-colors focus:border-primary ${
                error ? "border-red-400" : "border-border"
              }`}
              placeholder="Enter password"
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm text-red-500">Incorrect password</p>
            )}
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Access Proposals
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src="/images/logos/script-inline.png"
              alt="Good Company"
              width={140}
              height={32}
              className="h-7 w-auto"
            />
          </Link>
          <span className="text-sm text-text-light">Admin</span>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-2 font-serif text-3xl font-bold text-dark">
          Proposals
        </h1>
        <p className="mb-8 text-text-light">
          {proposals.length} proposal{proposals.length !== 1 ? "s" : ""} total
        </p>

        {proposals.length === 0 ? (
          <div className="rounded-xl border border-border bg-white p-8 text-center">
            <p className="text-text-light">No proposals yet.</p>
            <p className="mt-2 text-sm text-text-light">
              Add proposals in{" "}
              <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">
                src/lib/proposals.ts
              </code>
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {proposals.map((proposal) => (
              <Link
                key={proposal.slug}
                href={`/proposals/${proposal.slug}`}
                className="block rounded-xl border border-border bg-white p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-dark">
                      {proposal.clientName}
                    </h2>
                    <p className="text-sm text-text-light">
                      {proposal.projectTitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm font-medium text-primary">
                      {proposal.projectFee || "TBD"}
                    </p>
                    <p className="text-xs text-text-light">
                      {formatDate(proposal.date)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <code className="rounded bg-gray-100 px-2 py-1 text-xs text-text-light">
                    /proposals/{proposal.slug}
                  </code>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Quick reference */}
        <div className="mt-12 rounded-xl border border-dashed border-border bg-white/50 p-6">
          <h3 className="mb-2 text-sm font-semibold text-dark">
            Adding new proposals
          </h3>
          <p className="text-sm text-text-light">
            Edit{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">
              src/lib/proposals.ts
            </code>{" "}
            and add a new entry to the <code className="rounded bg-gray-100 px-1 py-0.5 text-xs">PROPOSALS</code> array.
            Deploy to make it live.
          </p>
        </div>
      </main>
    </div>
  );
}
