"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import type { LogisticsVehicle, LogisticsCategory } from "@/generated/client";
import { LogisticsSidebar } from "@/components/logistics/LogisticsSidebar";
import { LogisticsGrid } from "@/components/logistics/LogisticsGrid";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { LuSearch, LuCar } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LogisticsClient({ 
  initialVehicles,
  categories
}: { 
  initialVehicles: (LogisticsVehicle & { categoryRel?: LogisticsCategory | null })[],
  categories: LogisticsCategory[]
}) {
  const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [filteredVehicles, setFilteredVehicles] = useState<LogisticsVehicle[]>(initialVehicles);

  useEffect(() => {
    let result = [...initialVehicles];

    if (activeCategory) {
      result = result.filter((v) => (v.categoryRel?.name || v.category) === activeCategory);
    }

    if (searchQuery) {
      result = result.filter((v) => 
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (sortBy === "premium") {
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    setFilteredVehicles(result);
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-brand-background px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs />

        {/* Hero Section: Luxury Fleet Showcase */}
        <section className="relative mb-16 overflow-hidden rounded-[10px] bg-brand-primary p-6 md:p-10 lg:p-20 text-white shadow-2xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-secondary/20 rounded-[10px] text-brand-secondary text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-secondary/30">
                <LuCar className="h-3 w-3" />
                Elite Transportation
              </div>
              <h1 className="mb-6 text-4xl font-extrabold font-heading leading-[1.05] md:text-5xl lg:text-7xl">
                Luxury Logistics <span className="text-brand-secondary">& Escort</span>
              </h1>
              <p className="mb-10 text-lg font-medium text-white/70 leading-relaxed max-w-lg">
                Exclusive vehicle fleet and professional security services for the Nigerian market. From armored G-Wagons to luxury Lexuses, we provide the ultimate in mobility.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:flex sm:gap-6">
                 <div className="px-4 py-4 md:px-6 md:py-3 bg-white/10 rounded-[10px] backdrop-blur-md border border-white/10 text-center sm:text-left">
                    <span className="block text-xl md:text-2xl font-bold font-heading text-brand-secondary">24/7</span>
                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-white/50 tracking-widest">Rapid Support</span>
                 </div>
                 <div className="px-4 py-4 md:px-6 md:py-3 bg-white/10 rounded-[10px] backdrop-blur-md border border-white/10 text-center sm:text-left">
                    <span className="block text-xl md:text-2xl font-bold font-heading text-brand-secondary">100%</span>
                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-white/50 tracking-widest">Private Fleet</span>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
               className="relative h-[300px] lg:h-[450px]"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Luxury%20Rides/prado%20jeep.jpg"
                alt="Fleet Showcase"
                fill
                className="rounded-[10px] object-cover shadow-2xl brightness-90 contrast-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                priority
              />
              <div className="absolute inset-0 rounded-[10px] ring-1 ring-white/20" />
            </motion.div>
          </div>

          {/* Decorative Navy Gradient Background */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-secondary/10 blur-[140px] pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-full pointer-events-none bg-gradient-to-l from-brand-secondary/5 to-transparent" />
        </section>

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
            All Vehicles
          </button>
          
          {categories.map((catObj) => (
            <button
              key={catObj.id}
              onClick={() => setActiveCategory(catObj.name)}
              className={`flex-shrink-0 px-6 py-3 rounded-[10px] text-sm font-bold font-heading whitespace-nowrap transition-all ${
                activeCategory === catObj.name 
                  ? "bg-brand-primary text-white shadow-lg" 
                  : "bg-white text-brand-muted hover:bg-brand-primary/5"
              }`}
            >
              {catObj.name}
            </button>
          ))}
        </div>

        {/* Main Interface: Sidebar + Fleet Grid */}
        <div className="flex flex-col gap-10 lg:flex-row xl:gap-14">
          <LogisticsSidebar 
            activeCategory={activeCategory} 
            onCategoryChange={(cat) => setActiveCategory(cat || undefined)} 
            categories={categories}
          />

          <div className="flex-1">
            {/* Fleet Controls */}
            <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-[10px] bg-white p-8 shadow-2xl ring-1 ring-black/5 md:flex-row md:px-12">
              <div className="relative w-full md:max-w-lg">
                <LuSearch className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-muted" />
                <Input 
                  placeholder="Search our luxury fleet..." 
                  className="h-14 w-full rounded-[10px] border-none bg-brand-muted/5 pl-14 pr-8 text-sm font-bold placeholder:text-brand-muted/40 focus-visible:ring-brand-primary/20"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
                <div className="w-full sm:w-56">
                  <Select 
                    value={sortBy} 
                    onValueChange={(val) => setSortBy(val ?? "premium")}
                  >
                    <SelectTrigger className="h-14 w-full rounded-[10px] border-none bg-brand-muted/5 font-bold font-heading text-xs text-brand-primary focus:ring-brand-primary/20">
                      <SelectValue placeholder="Sort Fleet" />
                    </SelectTrigger>
                    <SelectContent className="rounded-[10px] border-none shadow-2xl p-2 min-w-[200px]">
                      <SelectItem value="premium" className="text-xs font-bold font-heading py-3 rounded-lg transition-all">Premium Fleet First</SelectItem>
                      <SelectItem value="price-asc" className="text-xs font-bold font-heading py-3 rounded-xl transition-all">Daily Rate: Low to High</SelectItem>
                      <SelectItem value="price-desc" className="text-xs font-bold font-heading py-3 rounded-xl transition-all">Daily Rate: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="hidden h-10 w-px bg-brand-muted/20 md:block" />
                
                <span className="shrink-0 text-[10px] md:text-xs font-bold font-heading text-brand-muted uppercase tracking-[0.2em] opacity-60 text-center sm:text-left">
                  {filteredVehicles.length} Vehicles Available
                </span>
              </div>
            </div>

            {/* Fleet Listing */}
            {filteredVehicles.length > 0 ? (
              <LogisticsGrid vehicles={filteredVehicles} />
            ) : (
              <div className="flex min-h-[500px] flex-col items-center justify-center rounded-[10px] border-2 border-dashed border-brand-muted/10 bg-white/30 p-16 text-center backdrop-blur-xl">
                <LuCar className="mb-8 h-16 w-16 text-brand-muted/20" />
                <h3 className="mb-4 text-2xl font-bold font-heading text-brand-primary">No vehicles found in this category</h3>
                <p className="text-brand-muted/70 mb-10 text-lg max-w-sm">We are constantly updating our fleet. Please check back soon or consult an agent.</p>
                <button 
                  onClick={() => { setActiveCategory(undefined); setSearchQuery(""); }}
                  className="text-brand-secondary font-extrabold font-heading text-sm uppercase tracking-widest underline underline-offset-[12px] transition-all hover:text-brand-primary"
                >
                  View All Premium Vehicles
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
