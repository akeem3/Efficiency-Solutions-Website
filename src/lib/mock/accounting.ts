import { Icons } from "@/components/ui/icons";

export interface AccountingService {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const ACCOUNTING_CATEGORIES = [
  "Accounting",
  "Business Advisory",
  "Taxation",
  "Internal Audit",
] as const;

export type AccountingCategory = (typeof ACCOUNTING_CATEGORIES)[number];

export const MOCK_ACCOUNTING_SERVICES: Record<AccountingCategory, AccountingService> = {
  Accounting: {
    id: "accounting-core",
    title: "Accounting & Bookkeeping",
    description: "Comprehensive financial management to help your business maintain accurate records and make informed strategic decisions.",
    features: [
      "Book Keeping",
      "Financial Reporting",
      "Cash Flow Management",
      "Payroll Support",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
  },
  "Business Advisory": {
    id: "business-advisory",
    title: "Business Strategic Advisory",
    description: "Expert guidance to optimize your business operations and identify growth opportunities in the competitive Nigerian market.",
    features: [
      "Strategic Planning",
      "Market Entry Analysis",
      "Financial Modeling",
      "Operational Efficiency",
    ],
    image: "https://images.unsplash.com/photo-1454165833059-446738b97d26?auto=format&fit=crop&q=80&w=1200",
  },
  Taxation: {
    id: "taxation",
    title: "Taxation & Compliance",
    description: "Stay tax-compliant while optimizing your liability through strategic tax planning and deep regional expertise.",
    features: [
      "Corporate Tax Filing",
      "VAT Management",
      "Personal Income Tax",
      "Tax Planning & Minimization",
    ],
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200",
  },
  "Internal Audit": {
    id: "internal-audit",
    title: "Internal Audit & Risk",
    description: "Rigorous internal auditing to safeguard your assets, ensure policy compliance, and manage operational risks effectively.",
    features: [
      "Operational Audits",
      "Risk Assessment",
      "Compliance Monitoring",
      "Internal Controls Evaluation",
    ],
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&q=80&w=1200",
  },
};
