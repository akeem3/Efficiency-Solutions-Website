"use client";

import Image from "next/image";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AccountingService } from "@/lib/mock/accounting";
import { LuCheck, LuArrowRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";

interface ServiceDetailProps {
  service: AccountingService;
  onConsult?: () => void;
}

export const ServiceDetail = ({ service, onConsult }: ServiceDetailProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-1 space-y-12"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-brand-secondary font-bold font-heading text-sm uppercase tracking-[0.2em] opacity-80 mb-2">Our expertise</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-primary leading-tight">
                {service.title}
              </h3>
            </div>
            
            <p className="text-lg text-brand-muted leading-relaxed font-medium">
              {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-primary/5 text-brand-primary border border-brand-primary/5 shadow-sm transition-colors group/item:bg-brand-primary group/item:text-white">
                    <LuCheck className="h-5 w-5" />
                  </div>
                  <span className="text-base font-bold text-brand-primary font-heading group-hover/item:translate-x-1 transition-transform">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-brand-primary/5">
               <div className="flex items-center gap-2 text-brand-secondary font-bold font-heading text-sm uppercase tracking-widest animate-pulse">
                 Compliance Secured <LuArrowRight className="h-4 w-4" />
               </div>
            </div>
          </div>

          {/* Service Image + CTA */}
          <div className="w-full lg:w-[450px] space-y-6">
             <div className="relative h-[300px] lg:h-[400px] w-full group overflow-hidden rounded-[2.5rem] shadow-2xl">
               <Image
                 src={service.image}
                 alt={service.title}
                 fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-95"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent transition-opacity opacity-40 group-hover:opacity-20" />
               <div className="absolute inset-0 ring-1 ring-black/10 rounded-[2.5rem]" />
             </div>

             {/* Book Consultation CTA */}
             <div className="flex justify-end">
               <Button
                 onClick={onConsult}
                 className="h-14 px-8 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold font-heading text-sm group shadow-lg shadow-[#25D366]/20 transition-all active:scale-95"
               >
                 Book Consultation
                 <NextImage
                   src="/whatsapp.png"
                   alt="WhatsApp"
                   width={24}
                   height={24}
                   className="ml-3 transition-transform group-hover:scale-110"
                 />
               </Button>
             </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
