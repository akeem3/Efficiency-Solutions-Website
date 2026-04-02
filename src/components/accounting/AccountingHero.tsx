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
    <section className="relative mb-20 overflow-hidden rounded-[2.5rem] bg-brand-primary/[0.03] p-10 lg:p-20 shadow-sm ring-1 ring-black/5">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-secondary/10 rounded-full text-brand-secondary text-[10px] font-extrabold font-heading uppercase tracking-widest mb-6">
            Financial Excellence
          </div>
          <h2 className="text-brand-secondary font-bold font-heading text-lg lg:text-xl mb-4 italic">
            Helping You Stay Financially Secure & Compliant
          </h2>
          <h1 className="mb-8 text-5xl font-extrabold font-heading text-brand-primary leading-[1.05] md:text-7xl">
            Accounting - Advisory - Tax - Audit
          </h1>
          <p className="mb-10 text-lg font-medium text-brand-muted leading-relaxed max-w-lg">
            We help businesses manage finances, reduce risk and stay compliant with expert accounting services.
          </p>
          <Button 
            size="lg" 
            onClick={onConsult}
            className="h-16 px-10 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold font-heading text-lg group shadow-xl shadow-brand-primary/10 transition-all active:scale-95"
          >
            Book Free Consultation
            <Icons.ExternalLink className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Button>
        </motion.div>
        
        <motion.div 
          className="relative h-[350px] lg:h-[500px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1554224154-26032fb68df8?auto=format&fit=crop&q=80&w=1200"
            alt="Accounting Services"
            fill
            className="rounded-[2rem] object-cover shadow-2xl brightness-95"
            priority
          />
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-black/10" />
          
          {/* Decorative floating element */}
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-brand-primary/5 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                <Icons.Accounting className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-primary">Corporate Tax Relief</div>
                <div className="text-xs text-brand-muted font-medium">Compliance guaranteed</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />
    </section>
  );
};
