"use client";

import { LOGISTICS_CATEGORIES } from "@/lib/mock/logistics";
import { cn } from "@/lib/utils";
import { LuChevronRight, LuShield, LuCar, LuUsers } from "react-icons/lu";

interface LogisticsSidebarProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  className?: string;
}

const getCategoryIcon = (category: string) => {
  if (category.includes("Security")) return LuShield;
  if (category.includes("Driver")) return LuUsers;
  return LuCar;
};

export const LogisticsSidebar = ({
  activeCategory,
  onCategoryChange,
  className,
}: LogisticsSidebarProps) => {
  return (
    <aside 
      className={cn(
        "sticky top-24 hidden h-fit w-72 flex-col rounded-[10px] bg-white p-8 text-brand-primary shadow-2xl ring-1 ring-black/5 lg:flex",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-primary text-white">
          <LuShield className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-extrabold font-heading">Our Fleet</h2>
      </div>

      <nav role="list" className="space-y-4">
        {LOGISTICS_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const Icon = getCategoryIcon(category);
          
          return (
            <button
              key={category}
              onClick={() => onCategoryChange?.(isActive ? "" : category)}
              className={cn(
                "group relative flex w-full items-center justify-between overflow-hidden rounded-[10px] px-6 py-4 text-left text-sm font-bold transition-all duration-300",
                isActive ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" : "bg-brand-muted/5 text-brand-muted hover:bg-brand-muted/10 hover:text-brand-primary"
              )}
            >
              <div className="flex items-center gap-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                <Icon className={cn("h-5 w-5", isActive ? "text-brand-secondary" : "text-brand-muted")} />
                {category}
              </div>
              <LuChevronRight 
                className={cn(
                  "h-4 w-4 relative z-10 transition-transform duration-300",
                  isActive ? "translate-x-1 text-brand-secondary" : "text-brand-muted group-hover:translate-x-2"
                )} 
              />
              
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-primary/90" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-12 p-6 rounded-[10px] bg-brand-secondary/10 border border-brand-secondary/20">
         <p className="text-xs font-bold font-heading text-brand-secondary uppercase tracking-widest mb-2">Need a Custom Fleet?</p>
         <p className="text-xs text-brand-muted/80 leading-relaxed mb-4">Contact our logistics team for bulk rentals and diplomatic escort packages.</p>
         <button className="text-brand-primary font-bold font-heading text-xs underline underline-offset-4 hover:text-brand-secondary transition-all">Agent Consultation</button>
      </div>
    </aside>
  );
};
