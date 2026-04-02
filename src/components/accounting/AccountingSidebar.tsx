"use client";

import { AccountingCategory, ACCOUNTING_CATEGORIES } from "@/lib/mock/accounting";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LuChevronRight, LuBriefcase } from "react-icons/lu";

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
        "sticky top-24 hidden h-fit w-80 flex-col rounded-xl bg-brand-primary p-2 text-white shadow-[0_32px_64px_-16px_rgba(50,64,106,0.3)] ring-1 ring-white/10 lg:flex",
        className
      )}
    >
      <div className="p-8 pb-4">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-10 w-10 flex items-center justify-center rounded-[10px] bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/5 text-brand-secondary border border-brand-secondary/30 shadow-lg">
            <LuBriefcase className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-extrabold font-heading text-white tracking-tight">Our Expertise</h2>
        </div>
        <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold font-heading">Financial Solutions</p>
      </div>

      <nav role="list" className="relative px-2 pb-2 space-y-1">
        {ACCOUNTING_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "group relative flex w-full items-center justify-between overflow-hidden rounded-[10px] px-6 py-5 text-left text-sm font-bold transition-all duration-500",
                isActive 
                  ? "text-brand-primary" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-white rounded-[10px] shadow-xl shadow-white/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <div className="flex items-center gap-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                <span className={cn(
                  "block h-1.5 w-1.5 rounded-[10px] transition-all duration-500",
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
            </button>
          );
        })}
      </nav>

      {/* Advisory Card - Enhanced */}
      <div className="m-2 mt-4 p-8 rounded-xl bg-gradient-to-br from-brand-secondary/15 to-transparent border border-brand-secondary/20 relative overflow-hidden group">
         <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-[10px] bg-brand-secondary/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
         
         <div className="relative z-10">
           <div className="text-[10px] font-extrabold font-heading text-brand-secondary uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
             <span className="h-1.5 w-1.5 rounded-[10px] bg-brand-secondary animate-pulse" />
             Strategic Path
           </div>
           <h3 className="text-sm font-bold text-white mb-2 leading-tight">Need custom financial restructuring?</h3>
           <p className="text-[11px] text-white/50 leading-relaxed font-medium mb-6">Our experts are ready to audit and guide your business expansion.</p>
           
           <button className="flex items-center gap-2 text-white font-bold font-heading text-[11px] group/btn">
              <span className="underline underline-offset-8 decoration-brand-secondary/30 group-hover/btn:decoration-brand-secondary transition-all">Consult on WhatsApp</span>
              <LuChevronRight className="h-3 w-3 text-brand-secondary group-hover/btn:translate-x-1 transition-transform" />
           </button>
         </div>
      </div>
    </aside>
  );
};
