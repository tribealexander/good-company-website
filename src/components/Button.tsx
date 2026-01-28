import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "hero";
  size?: "default" | "large";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-block rounded-lg font-semibold transition-all duration-300 ease-out active:scale-[0.98] active:transition-[100ms]";

  const sizeStyles = {
    default: "px-10 py-[18px] text-base",
    large: "px-12 py-[18px] text-base md:text-lg",
  };

  const variants = {
    primary:
      "bg-primary text-white shadow-[0_2px_8px_rgba(0,103,71,0.15)] hover:bg-[#2D8659] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,103,71,0.25)]",
    secondary:
      "bg-gold text-white border-2 border-gold hover:bg-amber-600 hover:border-amber-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25",
    outline:
      "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5",
    hero:
      "bg-white text-[#004D36] shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-gold hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(184,134,11,0.3)]",
  };

  return (
    <Link href={href} className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
