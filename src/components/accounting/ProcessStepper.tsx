"use client";

import { motion } from "framer-motion";
import { LuArrowRight, LuMessageSquare, LuSearch, LuSettings, LuShieldCheck } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Consult",
    description: "Chat with an expert",
    icon: LuMessageSquare,
  },
  {
    title: "Access",
    description: "We review your needs",
    icon: LuSearch,
  },
  {
    title: "Set up",
    description: "We Setup your system",
    icon: LuSettings,
  },
  {
    title: "Ongoing",
    description: "Continuous Support",
    icon: LuShieldCheck,
  },
];

interface ProcessStepperProps {
  onStart: () => void;
}

export const ProcessStepper = ({ onStart }: ProcessStepperProps) => {
  return (
    <section className="relative px-6 py-24 lg:py-40 rounded-xl bg-brand-primary overflow-hidden shadow-[0_48px_96px_-24px_rgba(50,64,106,0.4)]">
      {/* Decorative Elite Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-[600px] w-[600px] border-[1px] border-white/10 rounded-full" />
        <div className="absolute -bottom-24 -left-24 h-[600px] w-[600px] border-[1px] border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-[radial-gradient(circle,rgba(198,155,89,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-brand-secondary/10 rounded-[10px] text-brand-secondary text-[11px] font-extrabold font-heading uppercase tracking-[0.3em] mb-6 border border-brand-secondary/20"
          >
            Engagement Flow
          </motion.div>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white mb-8 tracking-tight">
            How We <span className="text-brand-secondary">Onboard</span> You
          </h3>
          <div className="h-1 w-24 bg-brand-secondary mx-auto rounded-xl" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative lg:pb-12">
          {/* Elite Connector lines (Desktop) */}
          <div className="absolute top-[48px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative z-10">
                {/* Step Number Bubble */}
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-brand-secondary text-brand-primary flex items-center justify-center text-xs font-black font-heading shadow-lg border-2 border-brand-primary">
                  0{index + 1}
                </div>
                
                <div className="w-24 h-24 rounded-[10px] bg-brand-primary border-2 border-white/20 flex items-center justify-center text-brand-secondary shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-700 group-hover:scale-110 group-hover:bg-brand-secondary group-hover:text-brand-primary group-hover:-rotate-6 group-hover:border-white">
                  <step.icon className="w-10 h-10 transition-transform duration-700" />
                </div>
              </div>
              
              <div className="mt-10 space-y-4">
                <h4 className="text-2xl font-extrabold font-heading text-white tracking-tight group-hover:text-brand-secondary transition-colors duration-500">{step.title}</h4>
                <p className="text-sm md:text-base font-medium text-white/40 leading-relaxed max-w-[200px] group-hover:text-white/60 transition-colors duration-500">
                  {step.description}
                </p>
              </div>

              {/* Vertical Path Line (Mobile Visual Only) */}
              {index < steps.length - 1 && (
                <div className="h-12 w-[1px] bg-gradient-to-b from-brand-secondary to-transparent my-4 lg:hidden opacity-40" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 lg:mt-32 text-center"
        >
          <Button 
            size="lg" 
            onClick={onStart}
            className="h-16 md:h-18 px-12 rounded-[10px] bg-brand-secondary hover:bg-white text-brand-primary font-black font-heading uppercase tracking-widest transition-all shadow-[0_20px_50px_rgba(198,155,89,0.3)] hover:scale-105 active:scale-95"
          >
            Initiate Consultation
          </Button>
          <p className="mt-6 text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">
             Immediate Response Guaranteed • Expert Advisory
          </p>
        </motion.div>
      </div>
    </section>
  );
};
