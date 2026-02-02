"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [isWiggling, setIsWiggling] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Determine if this is the homepage (has dark hero) or an inner page (beige background)
  const isHomepage = pathname === "/";

  // Mark as mounted after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Check initial scroll position
    handleScroll();
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
    { href: "/about", label: "About" },
    // { href: "/case-studies", label: "Case Studies" }, // TODO: Unhide when case studies are populated
  ];

  // Determine styling mode:
  // - Homepage + not scrolled = light text on dark hero
  // - Homepage + scrolled = dark text on white background
  // - Inner pages = always dark text (beige background)
  const showDarkStyles = mounted && (isScrolled || !isHomepage);

  // Logo filter - white for dark backgrounds, dark for light backgrounds
  const logoFilter = showDarkStyles
    ? logoHovered
      ? "brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(1000%) hue-rotate(130deg) brightness(90%) contrast(101%)"
      : "brightness(0) saturate(100%) invert(21%) sepia(6%) saturate(19%) hue-rotate(316deg) brightness(95%) contrast(89%)"
    : "brightness(0) saturate(100%) invert(100%)";

  return (
    <header
      className="fixed left-0 right-0 top-0 z-40 transition-all duration-500 ease-out"
      style={{
        backgroundColor: showDarkStyles ? "rgba(255, 255, 255, 0.97)" : "transparent",
        boxShadow: showDarkStyles ? "0 1px 12px rgba(0, 0, 0, 0.04)" : "none",
        backdropFilter: showDarkStyles ? "blur(8px)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
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
              style={{ filter: logoFilter }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${
                  showDarkStyles ? "nav-link" : "nav-link-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* CTA Button - different styling for inner pages */}
            {showDarkStyles ? (
              <a
                href="https://calendar.app.google/gi1oCV2S8mcjTqRx7"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#004D36] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:shadow-[0_4px_12px_rgba(184,134,11,0.3)]"
              >
                Book a Brainstorm →
              </a>
            ) : (
              <a
                href="https://calendar.app.google/gi1oCV2S8mcjTqRx7"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-sm font-medium nav-link-light"
              >
                Book a Brainstorm
                <span className="ml-1 inline-block transition-all duration-300 ease-out group-hover:ml-2 group-hover:text-white">
                  →
                </span>
              </a>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-full p-2.5 transition-colors duration-300 md:hidden ${
              showDarkStyles ? "text-text" : "text-white"
            }`}
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
              <a
                href="https://calendar.app.google/gi1oCV2S8mcjTqRx7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press mt-2 block rounded-full bg-primary px-6 py-3 text-center text-base font-semibold text-white transition-all duration-200 hover:bg-[#2D8659]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Brainstorm →
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
