"use client";

import { Proposal } from "@/lib/proposals";
import { useRef } from "react";
import Image from "next/image";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

interface Props {
  proposal: Proposal;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ProposalContent({ proposal }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return;

    const canvas = await html2canvas(contentRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "in",
      format: "letter",
    });

    const imgWidth = 8.5;
    const pageHeight = 11;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    const fileName = `${proposal.clientName.replace(/\s+/g, "-").toLowerCase()}-proposal-${proposal.date}.pdf`;
    pdf.save(fileName);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Download Button - Fixed */}
      <button
        onClick={handleDownloadPDF}
        className="fixed right-6 top-6 z-50 flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-primary-light hover:shadow-xl print:hidden"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download PDF
      </button>

      {/* Content for PDF */}
      <div ref={contentRef} className="mx-auto max-w-4xl px-8 py-12">
        {/* Header */}
        <header className="mb-10 border-b-2 border-primary pb-8">
          <div className="mb-6 flex items-center justify-between">
            <Image
              src="/images/logos/script-inline.png"
              alt="Good Company"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/images/logos/pennant.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-auto opacity-60"
            />
          </div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Scope of Work
          </p>
          <h1 className="mb-2 font-serif text-4xl font-bold text-dark">
            {proposal.projectTitle}
          </h1>
          <p className="text-lg text-text-light">
            Prepared for {proposal.clientName}
          </p>
        </header>

        {/* Summary Table */}
        <section className="mb-10 rounded-xl border border-border bg-white p-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-text-light">
                Client
              </p>
              <p className="mt-1 font-medium text-dark">{proposal.clientName}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-text-light">
                Consultant
              </p>
              <p className="mt-1 font-medium text-dark">
                {proposal.signatureConsultantName || "Good Company"}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-text-light">
                Date
              </p>
              <p className="mt-1 font-medium text-dark">
                {formatDate(proposal.date)}
              </p>
            </div>
            {proposal.projectFee && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-light">
                  Project Fee
                </p>
                <p className="mt-1 font-mono text-lg font-bold text-gold">
                  {proposal.projectFee}
                </p>
              </div>
            )}
            {proposal.monthlyHosting && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-light">
                  Monthly Hosting
                </p>
                <p className="mt-1 font-medium text-dark">
                  {proposal.monthlyHosting}
                </p>
              </div>
            )}
            {proposal.launchTarget && (
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-light">
                  Launch Target
                </p>
                <p className="mt-1 font-medium text-dark">
                  {formatDate(proposal.launchTarget)}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Project Summary */}
        {proposal.summary && (
          <section className="mb-10">
            <h2 className="mb-4 font-serif text-2xl font-bold text-dark">
              Project Summary
            </h2>
            <div
              className="prose prose-lg max-w-none text-text prose-p:leading-relaxed prose-ul:my-3 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: proposal.summary }}
            />
          </section>
        )}

        {/* Deliverables */}
        {proposal.deliverables && proposal.deliverables.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-4 font-serif text-2xl font-bold text-dark">
              Deliverables
            </h2>
            <div className="space-y-6">
              {proposal.deliverables.map((deliverable, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-white p-5"
                >
                  <h3 className="mb-3 text-lg font-semibold text-dark">
                    {deliverable.category}
                  </h3>
                  <div
                    className="prose max-w-none text-text prose-ul:my-2 prose-ul:list-disc prose-ul:pl-5 prose-li:my-1"
                    dangerouslySetInnerHTML={{ __html: deliverable.items }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What's Included */}
        {proposal.whatsIncluded && (
          <section className="mb-10">
            <h2 className="mb-4 font-serif text-2xl font-bold text-dark">
              What&apos;s Included
            </h2>
            <div
              className="prose prose-lg max-w-none text-text prose-ul:my-3 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: proposal.whatsIncluded }}
            />
          </section>
        )}

        {/* Not Included */}
        {proposal.notIncluded && (
          <section className="mb-10">
            <h2 className="mb-4 font-serif text-2xl font-bold text-dark">
              Not Included
            </h2>
            <div
              className="prose prose-lg max-w-none text-text prose-ul:my-3 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: proposal.notIncluded }}
            />
          </section>
        )}

        {/* Client Responsibilities */}
        {proposal.clientResponsibilities && (
          <section className="mb-10">
            <h2 className="mb-4 font-serif text-2xl font-bold text-dark">
              Client Responsibilities
            </h2>
            <div
              className="prose prose-lg max-w-none text-text prose-ul:my-3 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: proposal.clientResponsibilities }}
            />
          </section>
        )}

        {/* Ownership & Hosting */}
        {proposal.ownershipText && (
          <section className="mb-10">
            <h2 className="mb-4 font-serif text-2xl font-bold text-dark">
              Ownership & Hosting
            </h2>
            <div
              className="prose prose-lg max-w-none text-text prose-ul:my-3 prose-ul:list-disc prose-ul:pl-6 prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: proposal.ownershipText }}
            />
          </section>
        )}

        {/* Payment */}
        {proposal.paymentMilestones && proposal.paymentMilestones.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-4 font-serif text-2xl font-bold text-dark">
              Payment Schedule
            </h2>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full">
                <thead className="bg-cream">
                  <tr>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-dark">
                      Milestone
                    </th>
                    <th className="px-5 py-3 text-right text-sm font-semibold text-dark">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {proposal.paymentMilestones.map((payment, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="px-5 py-3 text-text">{payment.milestone}</td>
                      <td className="px-5 py-3 text-right font-mono font-medium text-dark">
                        {payment.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Signatures */}
        <section className="mt-16 border-t-2 border-border pt-10">
          <h2 className="mb-8 font-serif text-2xl font-bold text-dark">
            Agreement
          </h2>
          <p className="mb-8 text-text">
            By signing below, both parties agree to the scope, deliverables, and
            terms outlined in this proposal.
          </p>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Client Signature */}
            <div>
              <p className="mb-16 text-sm font-medium uppercase tracking-wider text-text-light">
                Client
              </p>
              <div className="border-b-2 border-dark" />
              <p className="mt-2 text-dark">
                {proposal.signatureClientName || proposal.clientName}
              </p>
              <p className="mt-1 text-sm text-text-light">Date: ____________</p>
            </div>
            {/* Consultant Signature */}
            <div>
              <p className="mb-16 text-sm font-medium uppercase tracking-wider text-text-light">
                Consultant
              </p>
              <div className="border-b-2 border-dark" />
              <p className="mt-2 text-dark">
                {proposal.signatureConsultantName || "Good Company"}
              </p>
              <p className="mt-1 text-sm text-text-light">Date: ____________</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-6">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/images/logos/pennant.png"
              alt=""
              width={24}
              height={24}
              className="h-5 w-auto opacity-50"
            />
            <p className="text-sm text-text-light">
              Good Company | goodcompany.works
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
