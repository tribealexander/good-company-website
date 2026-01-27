interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  const baseStyles = "rounded-xl border border-border bg-white p-8";
  const hoverStyles = hover
    ? "transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
    : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>
  );
}

interface SolutionCardProps {
  number: number;
  title: string;
  points: string[];
}

export function SolutionCard({ number, title, points }: SolutionCardProps) {
  return (
    <Card className="flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
        {number}
      </div>
      <h3 className="mb-4 text-xl font-semibold text-dark">{title}</h3>
      <div className="space-y-2">
        {points.map((point, index) => (
          <p key={index} className="text-[15px] leading-relaxed text-text-light">
            {point}
          </p>
        ))}
      </div>
    </Card>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  example: string;
  impact: string;
  supportingText: string;
}

export function ServiceCard({
  title,
  description,
  example,
  impact,
  supportingText,
}: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <h3 className="mb-4 text-2xl font-bold text-dark">{title}</h3>
      <p className="mb-6 text-lg leading-relaxed text-text">
        {supportingText}
      </p>

      {/* Impact section */}
      <div className="mb-6 rounded-lg bg-cream px-5 py-4">
        <div className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-primary">
          Typical Impact
        </div>
        <div className="font-medium text-primary">
          {impact}
        </div>
      </div>

      {/* Example box */}
      <div className="mt-auto rounded-lg border-l-[3px] border-l-primary bg-[#F0EBE3] px-4 py-4">
        <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-text-light">
          Example
        </div>
        <p className="font-mono text-sm text-dark">{example}</p>
      </div>
    </div>
  );
}

interface InvestmentCardProps {
  title: string;
  price: string;
  note: string;
  description: string;
  payback: string;
  featured?: boolean;
}

export function InvestmentCard({
  title,
  price,
  note,
  description,
  payback,
  featured = false,
}: InvestmentCardProps) {
  return (
    <div
      className={`rounded-xl border-2 bg-white p-10 transition-all duration-300 ${
        featured
          ? "border-primary shadow-xl shadow-primary/10"
          : "border-border hover:border-primary/50"
      }`}
    >
      <h3 className="mb-2 text-2xl font-semibold text-dark">{title}</h3>
      <div className="mb-4 font-mono text-4xl font-bold text-gold">{price}</div>
      <p className="mb-6 text-sm italic text-text-light">{note}</p>
      <p className="mb-6 leading-relaxed text-text">{description}</p>
      <div className="rounded-md bg-cream px-5 py-3 font-mono text-sm font-semibold text-primary">
        {payback}
      </div>
    </div>
  );
}
