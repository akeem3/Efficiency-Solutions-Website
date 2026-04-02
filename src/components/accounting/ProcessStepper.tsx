"use client";

import { motion } from "framer-motion";
import { LuArrowRight, LuCalendarDays, LuSearch, LuSettings, LuShieldCheck } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Consult",
    description: "Book a call",
    icon: LuCalendarDays,
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
    <section className="relative px-6 py-20 lg:py-32 rounded-[3rem] bg-brand-primary overflow-hidden shadow-2xl">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none opacity-10">
        <div className="absolute -top-24 -right-24 h-[400px] w-[400px] border-[40px] border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] border border-white/10 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-brand-secondary font-bold font-heading text-sm uppercase tracking-[0.3em] mb-4">Engagement Flow</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold font-heading text-white mb-6">How It Works</h3>
          <div className="h-1.5 w-24 bg-brand-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {/* Connector lines (Desktop) */}
          <div className="absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-white/10 hidden lg:block" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center text-center px-4"
            >
              <div className="relative z-10 w-20 h-20 rounded-full bg-brand-primary border-4 border-white/10 flex items-center justify-center text-brand-secondary shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-secondary group-hover:text-brand-primary group-hover:border-white animate-fade-in group-hover:rotate-12">
                <step.icon className="w-8 h-8" />
              </div>
              
              <div className="mt-8 space-y-3">
                <h4 className="text-2xl font-extrabold font-heading text-white">{step.title}</h4>
                <p className="text-sm font-medium text-white/50">{step.description}</p>
              </div>

              {/* Connector Arrow (Mobile Display) */}
              {index < steps.length - 1 && (
                <div className="my-6 lg:hidden opacity-20 text-white">
                   <LuArrowRight className="w-6 h-6 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 lg:mt-32 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onStart}
            className="h-14 px-10 rounded-full border-brand-secondary text-brand-secondary font-extrabold font-heading uppercase tracking-widest hover:bg-brand-secondary hover:text-brand-primary transition-all shadow-xl shadow-black/20"
          >
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
};
