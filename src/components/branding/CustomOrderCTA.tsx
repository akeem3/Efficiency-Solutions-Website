"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Zap } from "lucide-react";
import Image from "next/image";
import { env } from "@/env";

export const CustomOrderCTA = () => {
  const whatsappNumber = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = "Hi Efficiency Solutions, I'm interested in a custom branding/printing order not listed on your website. Can we discuss this?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[10px] bg-brand-primary p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl"
          >
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} 
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-center lg:items-start space-y-6 md:space-y-8 text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-widest backdrop-blur-md mx-auto lg:mx-0 w-fit">
                  <span className="h-2 w-2 rounded-full bg-brand-secondary animate-pulse" />
                  Custom Projects
                </div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight md:leading-[1.1] text-center lg:text-left">
                  Have a Unique <br/>
                  <span className="text-brand-secondary">Branding Need?</span>
                </h2>
                
                <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                  From large-format installations to bespoke corporate gifts, we bring any vision to life. Let&apos;s discuss your specific requirements.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <Button 
                    size="lg"
                    className="h-14 md:h-16 rounded-[12px] md:rounded-[16px] bg-brand-secondary hover:bg-white hover:text-brand-primary text-brand-primary font-extrabold font-heading text-base md:text-lg group shadow-xl px-8 w-full sm:w-auto"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    Discuss Custom Order
                    <div className="ml-3 h-7 w-7 flex items-center justify-center rounded-full bg-brand-primary/10 transform transition-transform group-hover:translate-x-1 overflow-hidden">
                       <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="object-contain" />
                    </div>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block relative h-[400px]">
                 <div className="absolute inset-0 bg-white/5 rounded-[30px] backdrop-blur-sm border border-white/10 p-8 transform rotate-3">
                    <div className="w-full h-full rounded-[20px] bg-gradient-to-br from-brand-secondary/20 to-brand-primary/10 flex items-center justify-center">
                       <div className="text-center p-8">
                          <Zap className="h-16 w-16 text-brand-secondary mx-auto mb-6" />
                          <p className="text-xl font-bold font-heading mb-2">Tailored Solutions</p>
                          <p className="text-sm text-white/60 font-medium italic">"Quality is not an act, it is a habit."</p>
                       </div>
                    </div>
                 </div>
                 {/* Floating accents */}
                 <div className="absolute -top-6 -right-6 h-20 w-20 bg-brand-gold rounded-[20px] rotate-12 flex items-center justify-center shadow-xl">
                    <Star className="h-8 w-8 text-brand-primary fill-brand-primary" />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
