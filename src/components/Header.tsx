"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#how-we-work", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled
          ? "bg-white/98 shadow-[0_2px_16px_rgba(0,0,0,0.04)] backdrop-blur-[10px]"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logos/script-inline.png"
              alt="Good Company"
              width={180}
              height={40}
              className="h-8 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(21%) sepia(6%) saturate(19%) hue-rotate(316deg) brightness(95%) contrast(89%)",
              }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-dark transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            {/* CTA Link with arrow */}
            <Link
              href="#contact-form"
              className="group inline-flex items-center text-[15px] font-medium text-dark transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-primary"
            >
              Book a Brainstorm
              <span className="ml-1 inline-block transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-primary">
                →
              </span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-text md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-6 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-text transition-colors hover:bg-cream hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile CTA */}
              <Link
                href="#contact-form"
                className="mt-4 block rounded-full bg-primary px-6 py-3 text-center text-base font-semibold text-white transition-all duration-200 hover:bg-[#2D8659]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Brainstorm →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
