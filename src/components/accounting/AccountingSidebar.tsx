"use client";

import { AccountingCategory, ACCOUNTING_CATEGORIES } from "@/lib/mock/accounting";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LuChevronRight, LuCalendar } from "react-icons/lu";

interface AccountingSidebarProps {
  activeCategory: AccountingCategory;
  onCategoryChange: (category: AccountingCategory) => void;
  className?: string;
}

export const AccountingSidebar = ({
  activeCategory,
  onCategoryChange,
  className,
}: AccountingSidebarProps) => {
  return (
    <aside 
      className={cn(
        "sticky top-24 hidden h-fit w-72 flex-col rounded-3xl bg-brand-primary p-8 text-white shadow-2xl space-y-8 lg:flex",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30 shadow-lg">
          <LuCalendar className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-extrabold font-heading text-white">Services</h2>
      </div>

      <nav role="list" className="space-y-4">
        {ACCOUNTING_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "group relative flex w-full items-center justify-between overflow-hidden rounded-2xl px-6 py-5 text-left text-sm font-bold transition-all duration-300",
                isActive 
                  ? "bg-white text-brand-primary shadow-xl shadow-white/10" 
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              <div className="flex items-center gap-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                <span className={cn(
                  "block h-1.5 w-1.5 rounded-full transition-all duration-500",
                  isActive ? "bg-brand-secondary scale-150" : "bg-white/20 group-hover:bg-brand-secondary/50 group-hover:scale-125"
                )} />
                {category}
              </div>
              <LuChevronRight 
                className={cn(
                  "h-4 w-4 relative z-10 transition-transform duration-300",
                  isActive ? "translate-x-1 text-brand-secondary" : "text-white/30 group-hover:translate-x-2 group-hover:text-white"
                )} 
              />
              
              {!isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/[0.03] transition-opacity opacity-0 group-hover:opacity-100" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Advisory Card */}
      <div className="mt-8 p-6 rounded-2xl bg-brand-secondary/10 border border-brand-secondary/20 backdrop-blur-sm shadow-inner group transition-colors hover:bg-brand-secondary/15">
         <div className="text-xs font-extrabold font-heading text-brand-secondary uppercase tracking-widest mb-2 flex items-center gap-2">
           <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary animate-pulse" />
           Corporate Advisory
         </div>
         <p className="text-[11px] text-white/50 leading-relaxed font-medium mb-5">Professional guidance for audits and business restructuring.</p>
         <button className="text-white font-bold font-heading text-[11px] underline underline-offset-8 decoration-brand-secondary/30 hover:decoration-brand-secondary transition-all">Schedule a Call</button>
      </div>
    </aside>
  );
};
