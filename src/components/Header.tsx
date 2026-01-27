"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [isWiggling, setIsWiggling] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Easter egg: Logo wiggle after 3 quick clicks
  const handleLogoClick = () => {
    setLogoClickCount((prev) => prev + 1);

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    clickTimeoutRef.current = setTimeout(() => {
      setLogoClickCount(0);
    }, 1000);

    if (logoClickCount >= 2) {
      setIsWiggling(true);
      setLogoClickCount(0);
      setTimeout(() => setIsWiggling(false), 500);
    }
  };

  const navLinks = [
    { href: "#how-we-work", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  return (
    <header
      className="fixed left-0 right-0 top-0 z-40 transition-all duration-500 ease-out"
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.97)" : "transparent",
        boxShadow: isScrolled ? "0 1px 12px rgba(0, 0, 0, 0.04)" : "none",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            onClick={handleLogoClick}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <Image
              src="/images/logos/script-inline.png"
              alt="Good Company"
              width={180}
              height={40}
              className={`h-8 w-auto transition-all duration-300 ${
                isWiggling ? "logo-wiggle" : ""
              } ${logoHovered ? "scale-105" : "scale-100"}`}
              style={{
                filter: logoHovered
                  ? "brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(1000%) hue-rotate(130deg) brightness(90%) contrast(101%)"
                  : "brightness(0) saturate(100%) invert(21%) sepia(6%) saturate(19%) hue-rotate(316deg) brightness(95%) contrast(89%)",
              }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact-form"
              className="nav-link group inline-flex items-center text-sm font-medium"
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
            className="inline-flex items-center justify-center rounded-full p-2.5 text-text md:hidden"
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
            <div className="mt-2 space-y-1 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
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
                className="btn-press mt-2 block rounded-full bg-primary px-6 py-3 text-center text-base font-semibold text-white transition-all duration-200 hover:bg-[#2D8659]"
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
