"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuChevronRight, LuLayoutDashboard } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export const Breadcrumbs = () => {
  const pathname = usePathname();
  
  // Convert path to items (e.g., /services/branding -> Home > Services > Branding)
  const pathSegments = pathname.split("/").filter((v) => v.length > 0 && v !== "services");
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const isCurrent = index === pathSegments.length - 1;
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      return {
        label,
        href: isCurrent ? undefined : href,
        isCurrent,
      };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-brand-muted">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <LuChevronRight className="mx-1 h-4 w-4 shrink-0 text-brand-muted/50" />}
            
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand-primary flex items-center transition-colors"
                aria-current={item.isCurrent ? "page" : undefined}
              >
                {item.label === "Home" && <LuLayoutDashboard className="mr-1.5 h-3.5 w-3.5" />}
                {item.label}
              </Link>
            ) : (
              <span 
                className="text-brand-primary font-semibold" 
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
