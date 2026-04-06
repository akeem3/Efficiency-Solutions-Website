"use client";

import { cn } from "@/lib/utils";
import { LuChevronRight, LuTag } from "react-icons/lu";
import type { BrandingCategory } from "@/generated/client";

interface CategorySidebarProps {
  activeCategory?: string;
  categories: BrandingCategory[];
  onCategoryChange?: (category: string) => void;
  className?: string;
}

export const CategorySidebar = ({
  activeCategory,
  categories,
  onCategoryChange,
  className,
}: CategorySidebarProps) => {
  return (
    <aside 
      className={cn(
        "sticky top-24 hidden h-fit w-64 flex-col rounded-[10px] bg-brand-primary p-6 text-white shadow-xl lg:flex",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-8">
        <LuTag className="h-5 w-5 text-brand-secondary" />
        <h2 className="text-xl font-bold font-heading">Branding Services</h2>
      </div>

      <nav role="list" className="space-y-4">
        {categories.map((category) => {
          const isActive = activeCategory === category.name;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange?.(category.name)}
              className={cn(
                "group flex w-full items-center justify-between text-left text-sm font-semibold transition-all duration-300 hover:translate-x-2",
                isActive ? "text-brand-secondary" : "text-white/70 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <span 
                  className={cn(
                    "block h-1.5 w-1.5 rounded-full transition-all duration-300",
                    isActive ? "scale-125 bg-brand-secondary ring-4 ring-brand-secondary/30" : "bg-white/20"
                  )} 
                />
                {category.name}
              </div>
              <LuChevronRight 
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  isActive ? "translate-x-1 text-brand-secondary" : "text-white/20 group-hover:translate-x-1"
                )} 
              />
            </button>
          );
        })}
      </nav>

      {/* Footer Decoration */}
      <div className="mt-12 opacity-10">
        <div className="h-px bg-white/50 mb-4" />
        <div className="h-1 w-20 bg-brand-secondary" />
      </div>
    </aside>
  );
};
