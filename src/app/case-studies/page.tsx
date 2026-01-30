import { getCaseStudies, CaseStudy } from "@/lib/strapi";
import CaseStudiesClient from "./CaseStudiesClient";

// Fallback data for when Strapi is unavailable
const fallbackCaseStudies: CaseStudy[] = [
  {
    id: "customer-success-workflow-automation",
    slug: "customer-success-workflow-automation",
    department: "Operations",
    title: "Customer Success Workflow Automation",
    description:
      "Automated reporting and early warning system for a managed services provider.",
    results: [
      { text: "80% reduction in reporting time" },
      { text: "3 at-risk accounts flagged early" },
    ],
  },
  {
    id: "real-time-project-profitability-dashboard",
    slug: "real-time-project-profitability-dashboard",
    department: "Finance",
    title: "Real-Time Project Profitability Dashboard",
    description:
      "Live margin tracking and utilization visibility for a professional services firm.",
    results: [
      { text: "Real-time margin tracking" },
      { text: "15% improvement in utilization" },
    ],
  },
  {
    id: "knowledge-capture-system",
    slug: "knowledge-capture-system",
    department: "Operations",
    title: "Knowledge Capture System",
    description:
      "Process documentation and institutional knowledge system for a growing team.",
    results: [
      { text: "40% faster onboarding" },
      { text: "Reduced tribal knowledge dependency" },
    ],
  },
  {
    id: "lead-response-automation",
    slug: "lead-response-automation",
    department: "Sales",
    title: "Lead Response Automation",
    description:
      "Automated lead routing and follow-up sequences for a sales team.",
    results: [
      { text: "Response time under 5 minutes" },
      { text: "23% increase in conversion" },
    ],
  },
  {
    id: "client-health-monitoring",
    slug: "client-health-monitoring",
    department: "Customer Success",
    title: "Client Health Monitoring",
    description:
      "Proactive alerting system for at-risk accounts.",
    results: [
      { text: "Churn reduced by 18%" },
      { text: "Early warning on 12 accounts" },
    ],
  },
  {
    id: "field-service-dispatch-optimization",
    slug: "field-service-dispatch-optimization",
    department: "Field Services",
    title: "Field Service Dispatch Optimization",
    description:
      "Automated scheduling and route optimization for a field services company.",
    results: [
      { text: "30% reduction in drive time" },
      { text: "25% more jobs per day" },
    ],
  },
];

export default async function CaseStudiesPage() {
  // Fetch from Strapi (uses ISR with 60s revalidation)
  const strapiCaseStudies = await getCaseStudies();

  // Use Strapi data if available, otherwise fall back to hardcoded data
  const caseStudies = strapiCaseStudies.length > 0 ? strapiCaseStudies : fallbackCaseStudies;

  return <CaseStudiesClient initialCaseStudies={caseStudies} />;
}
