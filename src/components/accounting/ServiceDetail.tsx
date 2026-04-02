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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1"
      >
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16">
          {/* Content Left Column */}
          <div className="xl:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-brand-secondary font-bold font-heading text-[10px] uppercase tracking-[0.3em] bg-brand-secondary/5 px-4 py-2 rounded-[10px] border border-brand-secondary/10">
                 Specialized Practice
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-5xxl font-extrabold font-heading text-brand-primary leading-tight tracking-tight">
                {service.title}
              </h2>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed font-medium max-w-2xl">
                {service.description}
              </p>
            </div>

            {/* Bento-Style Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col justify-between p-6 rounded-xl bg-white border border-brand-primary/5 shadow-sm hover:shadow-xl hover:shadow-brand-primary/5 hover:border-brand-primary/10 transition-all duration-500"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-brand-primary/[0.03] text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 mb-6">
                    <LuCheck className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-bold text-brand-primary font-heading leading-snug">
                    {feature}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* Authority Detail Panel */}
            <div className="p-8 md:p-10 rounded-xl bg-brand-primary text-white relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 right-0 h-64 w-64 bg-brand-secondary/10 blur-3xl -z-0 -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-1000" />
               <div className="relative z-10 space-y-6">
                 <h4 className="text-xl font-bold font-heading text-brand-secondary">Why Strategy Matters</h4>
                 <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium">
                   Our approach goes beyond basic compliance. We integrate our {service.title.toLowerCase()} service with your broader business objectives, identifying tax-saving opportunities and operational efficiencies that others miss.
                 </p>
                 <div className="flex items-center gap-6 pt-4">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => (
                         <div key={i} className="h-10 w-10 rounded-full border-2 border-brand-primary bg-brand-muted/20 overflow-hidden">
                           <Image src={`https://images.unsplash.com/photo-${1500 + i}?auto=format&fit=crop&q=80&w=100`} alt="Agent" width={40} height={40} className="object-cover" />
                         </div>
                       ))}
                    </div>
                    <div className="text-xs font-bold font-heading text-brand-secondary uppercase tracking-widest">
                       Elite Advisory Team
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Visual Right Column */}
          <div className="xl:col-span-5 space-y-8">
            <div className="relative aspect-[4/5] xl:aspect-auto xl:h-[600px] w-full group rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.98]"
              />
              {/* Glass Overlay Card */}
              <div className="absolute inset-x-6 bottom-6 p-8 bg-white/10 backdrop-blur-2xl rounded-xl border border-white/20 shadow-2xl space-y-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                <div className="text-[10px] font-extrabold font-heading text-brand-secondary uppercase tracking-[0.2em]">Service Insight</div>
                <p className="text-sm font-bold text-white font-heading leading-tight drop-shadow-md">
                  Tailored solutions designed for the Nigerian regulatory landscape.
                </p>
              </div>
            </div>

            {/* Direct Consultation CTA Box */}
            <div className="p-1 px-8 py-10 rounded-xl bg-brand-secondary/5 border border-brand-secondary/10 flex flex-col items-center text-center space-y-6">
               <div className="space-y-2">
                 <h4 className="text-lg font-bold font-heading text-brand-primary">Ready to start?</h4>
                 <p className="text-sm text-brand-muted font-medium">Connect with an expert regarding {service.title}.</p>
               </div>
               
               <Button
                 onClick={onConsult}
                 className="h-14 md:h-16 px-10 rounded-[10px] bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold font-heading text-base group shadow-xl shadow-[#25D366]/20 transition-all active:scale-95 w-full"
               >
                 Consult via WhatsApp
                 <NextImage
                   src="/whatsapp.png"
                   alt="WhatsApp"
                   width={24}
                   height={24}
                   className="ml-4 transition-transform group-hover:scale-110 group-hover:rotate-12"
                 />
               </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
