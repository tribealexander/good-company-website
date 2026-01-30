import { getCaseStudies } from "@/lib/strapi";
import CaseStudiesClient from "./CaseStudiesClient";

// Fallback data for when Strapi is unavailable
const fallbackCaseStudies = [
  {
    id: "customer-success-workflow-automation",
    department: "Operations",
    title: "Customer Success Workflow Automation",
    description:
      "Automated reporting and early warning system for a managed services provider.",
    results: [
      "80% reduction in reporting time",
      "3 at-risk accounts flagged early",
    ],
  },
  {
    id: "real-time-project-profitability-dashboard",
    department: "Finance",
    title: "Real-Time Project Profitability Dashboard",
    description:
      "Live margin tracking and utilization visibility for a professional services firm.",
    results: [
      "Real-time margin tracking",
      "15% improvement in utilization",
    ],
  },
  {
    id: "knowledge-capture-system",
    department: "Operations",
    title: "Knowledge Capture System",
    description:
      "Process documentation and institutional knowledge system for a growing team.",
    results: [
      "40% faster onboarding",
      "Reduced tribal knowledge dependency",
    ],
  },
  {
    id: "lead-response-automation",
    department: "Sales",
    title: "Lead Response Automation",
    description:
      "Automated lead routing and follow-up sequences for a sales team.",
    results: [
      "Response time under 5 minutes",
      "23% increase in conversion",
    ],
  },
  {
    id: "client-health-monitoring",
    department: "Customer Success",
    title: "Client Health Monitoring",
    description:
      "Proactive alerting system for at-risk accounts.",
    results: [
      "Churn reduced by 18%",
      "Early warning on 12 accounts",
    ],
  },
  {
    id: "employee-onboarding-automation",
    department: "HR",
    title: "Employee Onboarding Automation",
    description:
      "Automated new hire workflows from offer acceptance to day one.",
    results: [
      "60% reduction in admin time",
      "Zero missed onboarding steps",
    ],
  },
];

export default async function CaseStudiesPage() {
  // Fetch from Strapi
  const strapiCaseStudies = await getCaseStudies();

  // Use Strapi data if available, otherwise fall back to hardcoded data
  const caseStudies = strapiCaseStudies.length > 0 ? strapiCaseStudies : fallbackCaseStudies;

  return <CaseStudiesClient initialCaseStudies={caseStudies} />;
}
