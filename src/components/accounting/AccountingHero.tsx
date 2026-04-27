"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

interface AccountingHeroProps {
  onConsult: () => void;
}

export const AccountingHero = ({ onConsult }: AccountingHeroProps) => {
  return (
    <section className="relative mb-24 overflow-hidden rounded-[10px] bg-brand-primary/[0.02] p-8 md:p-12 lg:p-24 shadow-2xl ring-1 ring-black/5">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-secondary/5 via-transparent to-transparent opacity-60" />
      <div className="absolute top-0 right-0 -mr-16 -mt-16 h-96 w-96 rounded-full bg-brand-secondary/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-96 w-96 rounded-full bg-brand-primary/[0.03] blur-[100px] pointer-events-none" />
      
      {/* Structural Decoration Lines */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-secondary/10 rounded-[10px] text-brand-secondary text-[11px] font-extrabold font-heading uppercase tracking-[0.2em] mb-8 border border-brand-secondary/20 shadow-sm animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-brand-secondary animate-pulse" />
            Financial Intelligence
          </div>
          
          <h1 className="mb-8 text-3xl font-extrabold font-heading text-brand-primary leading-[1.1] md:text-4xl lg:text-5xl xl:text-6xl">
            Strategic <span className="text-brand-secondary">Wealth</span> & Business <br className="hidden lg:block" /> Integrity
          </h1>
          
          <p className="mb-12 text-lg md:text-xl font-medium text-brand-muted leading-relaxed max-w-xl">
            Empowering Nigerian enterprises through meticulous accounting, 
            risk mitigation, and strategic financial advisory. We build the substrate for your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button 
              size="lg" 
              onClick={onConsult}
              className="h-14 md:h-16 px-10 w-full sm:w-auto rounded-[10px] bg-brand-primary hover:bg-brand-primary/95 text-white font-bold font-heading text-sm md:text-base group shadow-2xl shadow-brand-primary/20 transition-all active:scale-95"
            >
              Request Consultation
              <Icons.ExternalLink className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
            
            <div className="flex items-center gap-4 text-brand-primary/60 font-heading font-bold text-xs uppercase tracking-widest px-4 border-l border-brand-primary/10 hidden sm:flex">
                <span className="text-brand-secondary underline underline-offset-4 decoration-2">Premium</span> Advisory
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative h-[400px] lg:h-[550px] w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          {/* Layered Image Effect */}
          <div className="absolute top-8 right-8 inset-0 bg-brand-secondary/10 rounded-xl -z-10 translate-x-4 translate-y-4 blur-sm" />
          
          <div className="relative h-full w-full overflow-hidden rounded-xl shadow-[0_32px_64px_-16px_rgba(50,64,106,0.3)] border border-brand-primary/5">
            <Image
              src="https://images.unsplash.com/photo-1554224154-26032fb68df8?auto=format&fit=crop&q=80&w=1200"
              alt="Accounting Services"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.98] contrast-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-brand-secondary/10" />
          </div>
          
          {/* Decorative floating element - Strategic Stats */}
          <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/80 backdrop-blur-xl p-8 rounded-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] border border-brand-primary/5 z-20 hidden md:block group hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-lg bg-brand-primary flex items-center justify-center text-brand-secondary shadow-lg">
                <Icons.Accounting className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-extrabold font-heading text-brand-primary tracking-tighter">100%</div>
                <div className="text-[10px] uppercase font-bold text-brand-muted tracking-[0.2em]">Compliance Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
