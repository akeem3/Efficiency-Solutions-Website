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
import { generateAccountingLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function AccountingPage() {
  const [activeCategory, setActiveCategory] = useState<AccountingCategory>("Accounting");

  const handleConsultation = () => {
    const link = generateAccountingLink();
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-brand-background px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs />

        {/* Hero Section */}
        <AccountingHero onConsult={handleConsultation} />

        {/* Premium Tab Navigation (Mobile Only) */}
        <div className="sticky top-16 z-30 -mx-6 lg:hidden mb-12">
          <div className="bg-white/80 backdrop-blur-md border-y border-brand-primary/5 px-6 py-4 overflow-x-auto no-scrollbar flex gap-2">
            {ACCOUNTING_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "relative flex-shrink-0 px-6 py-3 rounded-[10px] text-xs font-extra-bold font-heading uppercase tracking-widest transition-all duration-300",
                    isActive 
                      ? "text-white" 
                      : "text-brand-muted hover:text-brand-primary hover:bg-brand-primary/5"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobile-tab-active"
                      className="absolute inset-0 bg-brand-primary rounded-[10px] shadow-lg shadow-brand-primary/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
          {/* Subtle bottom shadow for the sticky nav */}
          <div className="h-4 w-full bg-gradient-to-b from-black/[0.02] to-transparent" />
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
