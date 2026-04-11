"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { BrandingProduct, BrandingCategory } from "@/generated/client";
import { CategorySidebar } from "@/components/branding/CategorySidebar";
import { ProductGrid } from "@/components/branding/ProductGrid";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LuSearch, LuChevronDown } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

import { CustomOrderCTA } from "@/components/branding/CustomOrderCTA";

export function BrandingClient({ 
  initialProducts, 
  categories 
}: { 
  initialProducts: BrandingProduct[],
  categories: BrandingCategory[]
}) {
  const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filteredProducts, setFilteredProducts] = useState<BrandingProduct[]>(initialProducts);

  // Filtering Logic (Introductory in Story 2.2, Finalized in 2.3)
  useEffect(() => {
    let result = [...initialProducts];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery) {
      result = result.filter((p) => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "featured") {
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    setFilteredProducts(result);
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-brand-background px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Navigation & Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative mb-8 overflow-hidden rounded-[10px] bg-brand-primary/5 p-6 md:p-10 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="z-10">
              <h1 className="mb-6 text-4xl font-extrabold font-heading text-brand-primary leading-[1.1] md:text-5xl lg:text-6xl">
                Premium Branding <span className="text-brand-secondary">& Printing</span>
              </h1>
              <p className="mb-8 text-lg font-medium text-brand-muted leading-relaxed max-w-lg">
                Elevate your corporate identity with high-end custom merchandise, 
                signage, and office branding solutions tailored for the Nigerian market.
              </p>
              <div className="h-1.5 w-24 bg-brand-secondary" />
            </div>
            
            <div className="relative h-[300px] lg:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1200"
                alt="Branding Showcase"
                fill
                className="rounded-[10px] object-cover shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-[10px] ring-1 ring-black/10" />
            </div>
          </div>

          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 h-96 w-96 rounded-full bg-brand-secondary/5 blur-[120px]" />
        </section>

        {/* Custom Order CTA - New Feature */}
        <CustomOrderCTA />

        {/* Horizontal Navigation (Mobile Only) */}
        <div className="flex lg:hidden overflow-x-auto pb-6 mb-8 no-scrollbar -mx-2 px-2 gap-3">
          <button
            onClick={() => setActiveCategory(undefined)}
            className={`flex-shrink-0 px-6 py-3 rounded-[10px] text-sm font-bold font-heading whitespace-nowrap transition-all ${
              activeCategory === undefined
                ? "bg-brand-primary text-white shadow-lg" 
                : "bg-white text-brand-muted hover:bg-brand-primary/5"
            }`}
          >
            All Services
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex-shrink-0 px-6 py-3 rounded-[10px] text-sm font-bold font-heading whitespace-nowrap transition-all ${
                activeCategory === cat.name 
                  ? "bg-brand-primary text-white shadow-lg" 
                  : "bg-white text-brand-muted hover:bg-brand-primary/5"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Main Interface: Sidebar + Grid */}
        <div className="flex flex-col gap-8 lg:flex-row xl:gap-12">
          {/* Sidebar */}
          <CategorySidebar 
            activeCategory={activeCategory} 
            categories={categories}
            onCategoryChange={(cat) => setActiveCategory(cat === activeCategory ? undefined : cat)} 
          />

          {/* Catalog Area */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="mb-10 flex flex-col items-center justify-between gap-6 rounded-[10px] bg-white p-6 shadow-sm ring-1 ring-black/5 md:flex-row md:px-10">
              <div className="relative w-full md:max-w-md">
                <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
                <Input 
                  placeholder="Search premium items..." 
                  className="h-12 w-full rounded-[10px] border-none bg-brand-muted/5 pl-12 pr-6 text-sm font-medium focus-visible:ring-brand-secondary/50"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
                <div className="w-full sm:w-48">
                  <Select 
                    value={sortBy} 
                    onValueChange={(val) => setSortBy(val ?? "name")}
                  >
                    <SelectTrigger className="h-12 w-full rounded-[10px] border-none bg-brand-muted/5 font-bold font-heading text-xs text-brand-primary focus:ring-brand-secondary/50">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="rounded-[10px] border-none shadow-xl min-w-[180px]">
                      <SelectItem value="featured" className="text-xs font-bold font-heading py-3">Featured First</SelectItem>
                      <SelectItem value="name" className="text-xs font-bold font-heading py-3">Alphabetical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="hidden h-8 w-px bg-brand-muted/20 md:block" />
                
                <span className="shrink-0 text-[10px] md:text-xs font-bold font-heading text-brand-muted uppercase tracking-widest text-center sm:text-left">
                  {filteredProducts.length} Items Found
                </span>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[10px] border-2 border-dashed border-brand-muted/20 bg-white/50 p-12 text-center">
                <LuSearch className="mb-6 h-12 w-12 text-brand-muted/30" />
                <h3 className="mb-2 text-xl font-bold font-heading text-brand-primary">No items found</h3>
                <p className="text-brand-muted mb-8">Try adjusting your search or filters to discover our services.</p>
                <button 
                  onClick={() => { setActiveCategory(undefined); setSearchQuery(""); }}
                  className="text-brand-secondary font-bold font-heading underline underline-offset-8 transition-all hover:text-brand-primary"
                >
                  View All Branding & Printing Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
