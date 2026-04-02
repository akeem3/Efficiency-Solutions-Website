"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { 
  AccountingCategory, 
  ACCOUNTING_CATEGORIES, 
  MOCK_ACCOUNTING_SERVICES 
} from "@/lib/mock/accounting";
import { AccountingHero } from "@/components/accounting/AccountingHero";
import { AccountingSidebar } from "@/components/accounting/AccountingSidebar";
import { ServiceDetail } from "@/components/accounting/ServiceDetail";
import { ProcessStepper } from "@/components/accounting/ProcessStepper";
import { generateConsultationLink } from "@/lib/whatsapp";

export default function AccountingPage() {
  const [activeCategory, setActiveCategory] = useState<AccountingCategory>("Accounting");

  const handleConsultation = () => {
    const link = generateConsultationLink(activeCategory);
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-brand-background px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs />

        {/* Hero Section */}
        <AccountingHero onConsult={handleConsultation} />

        {/* Horizontal Navigation (Mobile Only) */}
        <div className="flex lg:hidden overflow-x-auto pb-6 mb-8 no-scrollbar -mx-2 px-2 gap-3">
          {ACCOUNTING_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-bold font-heading whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? "bg-brand-primary text-white shadow-lg" 
                  : "bg-white text-brand-muted hover:bg-brand-primary/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Section: Sidebar + Details */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 mb-24">
          <AccountingSidebar 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
          
          <ServiceDetail service={MOCK_ACCOUNTING_SERVICES[activeCategory]} onConsult={handleConsultation} />
        </div>

        {/* Stepper Section */}
        <ProcessStepper onStart={handleConsultation} />
      </div>
    </div>
  );
}
