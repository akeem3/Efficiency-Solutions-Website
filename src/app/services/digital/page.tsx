"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { generateDigitalLink } from "@/lib/whatsapp";
import { LuCheck, LuLayoutTemplate, LuSmartphone, LuGlobe, LuRocket } from "react-icons/lu";

const samples = [
  {
    id: 1,
    title: "Web development",
    image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Digital%20Product%20Developement/Discover%20Creative.jpg",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mobile Apps",
    image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Digital%20Product%20Developement/download.jpg",
  },
  {
    id: 4,
    title: "Product Design",
    image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Digital%20Product%20Developement/Digital-Product-Development_Content-1024x639.jpg",
  },
];

const benefits = [
  "Scalable Cloud-First Architecture",
  "User-Centric UI/UX Design",
  "Performance & Speed Optimized",
  "Agile Development Cycle",
  "Post-Launch Support & Evolution",
];

const WHAT_WE_DO = [
  {
    title: "Product Design",
    description: "Conceptualization and high-fidelity prototyping focusing on user experience.",
    icon: LuLayoutTemplate,
  },
  {
    title: "Mobile Development",
    description: "High-performance native and cross-platform applications for iOS and Android.",
    icon: LuSmartphone,
  },
  {
    title: "Web Development",
    description: "Robust, scalable, and secure web platforms built with modern technology stacks.",
    icon: LuGlobe,
  },
  {
    title: "Strategy & MVP Launch",
    description: "Strategic roadmap from discovery to market entry, ensuring a successful launch.",
    icon: LuRocket,
  },
];

export default function DigitalPage() {
  const handleConsult = () => {
    const link = generateDigitalLink();
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-brand-background px-6 py-12 lg:px-12 text-blue-900">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs />

        {/* 1. Hero Section */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-indigo-600/5 text-indigo-600 font-bold font-heading text-xs uppercase tracking-widest mb-8 border border-indigo-600/10">
              <Icons.Digital className="h-4 w-4" />
              Innovation & Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-brand-primary leading-[1.05] tracking-tight mb-8">
              Digital Product <br/> 
              <span className="text-indigo-600">Development</span>
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              Build the future of your enterprise with high-impact digital solutions. From scalable web 
              platforms to intuitive mobile experiences, we turn your vision into world-class software.
            </p>
            <Button 
              size="lg" 
              onClick={handleConsult}
              className="h-14 px-10 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold font-heading shadow-lg shadow-indigo-600/20"
            >
              Start Your Project
            </Button>
          </motion.div>
        </section>

        {/* 2. What We Do Section */}
        <section className="py-16 md:py-24 border-t border-brand-primary/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">What We Do</h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
            {WHAT_WE_DO.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-10 rounded-[10px] bg-white border border-brand-primary/5 shadow-sm hover:shadow-2xl hover:border-indigo-600/20 transition-all duration-500"
              >
                <div className="h-14 w-14 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-brand-primary mb-4 leading-tight">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed font-medium">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. Samples Section */}
        <section className="py-16 border-t border-brand-primary/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-brand-primary">Our Portfolio</h2>
            <p className="text-brand-muted mt-4">Programmatic solutions for modern business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {samples.map((sample) => (
              <div key={sample.id} className="group relative overflow-hidden rounded-[10px] aspect-video bg-white shadow-xl ring-1 ring-black/5">
                <Image
                  src={sample.image}
                  alt={sample.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                  <h3 className="text-2xl font-bold font-heading text-white">{sample.title}</h3>
                  <div className="mt-4 w-12 h-1 bg-indigo-400 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. What You Get Section */}
        <section className="py-24 border-t border-brand-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-heading text-brand-primary mb-8">The Digital Advantage</h2>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-[10px] bg-white shadow-sm ring-1 ring-black/5 hover:translate-x-2 transition-transform">
                    <div className="mt-1 h-6 w-6 rounded-full bg-indigo-600/10 flex items-center justify-center flex-shrink-0">
                      <LuCheck className="h-4 w-4 text-indigo-600" />
                    </div>
                    <p className="text-lg text-brand-muted leading-relaxed font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[10px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Digital strategy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 4. Final CTA Section */}
        <section className="py-24 border-t border-brand-primary/5">
          <div className="bg-gradient-to-br from-brand-primary to-indigo-900 rounded-[10px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
              <Icons.Digital className="h-96 w-96" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Build Something Exceptional</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
                Ready to transform your business with cutting-edge technology? Our development team 
                is ready to map out your digital strategy.
              </p>
              <Button 
                size="lg" 
                onClick={handleConsult}
                className="h-14 px-12 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold font-heading border-none"
              >
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
