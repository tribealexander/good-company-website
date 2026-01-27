import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#004D36] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Main Footer Content */}
        <div className="grid gap-10 text-center md:grid-cols-3 md:gap-8 md:text-left">
          {/* Column 1 - Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logos/script-inline.png"
              alt="Good Company"
              width={180}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm text-[#A8D5C2]">
              Operational systems that actually get used.
            </p>
            <p className="mt-6 text-xs text-[#A8D5C2]">
              &copy; {currentYear} Good Company. All rights reserved.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="#solutions"
                className="text-sm text-[#A8D5C2] transition-colors duration-200 hover:text-gold"
              >
                What We Build
              </Link>
              <Link
                href="#problems"
                className="text-sm text-[#A8D5C2] transition-colors duration-200 hover:text-gold"
              >
                Problems We Solve
              </Link>
              <Link
                href="#how-we-work"
                className="text-sm text-[#A8D5C2] transition-colors duration-200 hover:text-gold"
              >
                How We Work
              </Link>
              <Link
                href="#investment"
                className="text-sm text-[#A8D5C2] transition-colors duration-200 hover:text-gold"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="text-sm text-[#A8D5C2] transition-colors duration-200 hover:text-gold"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <Image
                src="/images/logos/pennant.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-auto brightness-0 invert opacity-80"
              />
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Get in Touch
              </h4>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@goodcompany.ca"
                className="text-sm text-[#A8D5C2] transition-colors duration-200 hover:text-gold"
              >
                hello@goodcompany.ca
              </a>
              <Link
                href="#contact-form"
                className="mt-4 text-sm font-semibold text-gold transition-colors duration-200 hover:underline"
              >
                Book a Discovery Call &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-[#A8D5C2]">
            Building capacity through automation, visibility, and accountability.
          </p>
        </div>
      </div>
    </footer>
  );
}
