"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { generateTailoringLink } from "@/lib/whatsapp";
import { LuCheck, LuScissors, LuBriefcase, LuHeart, LuPlus } from "react-icons/lu";

const samples = [
  {
    id: 1,
    title: "Bespoke Agbada",
    image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Fashion%20Design/agbada.jpg",
  },
  {
    id: 2,
    title: "Men's Native Wear",
    image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Fashion%20Design/ankara%20shirt%20and%20trousers%20men.jpg",
  },
  {
    id: 3,
    title: "Bridal Corset Dress",
    image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Fashion%20Design/corset%20dress.jpg",
  },
  {
    id: 4,
    title: "Kids' Fashion",
    image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Fashion%20Design/kids%20ankara.jpeg",
  },
];

const benefits = [
  "Perfect Fit Guarantee (Bespoke measurement)",
  "Premium Fabric Selection",
  "Traditional & Modern Style Fusion",
  "Quick Turnaround Time",
  "Expert Alteration Services",
];

const WHAT_WE_DO = [
  {
    title: "Bespoke Couture Design",
    description: "Precision custom garment construction for traditional and western styles.",
    icon: LuScissors,
  },
  {
    title: "Corporate Identity Apparel",
    description: "Branding-integrated professional uniforms and office wear for teams.",
    icon: LuBriefcase,
  },
  {
    title: "High-End Bridal Wear",
    description: "Exquisite designs and perfect fitting for your special ceremonial day.",
    icon: LuHeart,
  },
  {
    title: "Premium Fitting & Restoration",
    description: "Expert alterations and luxury fabric restoration for high-end wardrobes.",
    icon: LuPlus,
  },
];

export default function TailoringPage() {
  const handleConsult = () => {
    const link = generateTailoringLink();
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-brand-background px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs />

        {/* 1. Hero Section */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-orange-600/5 text-orange-600 font-bold font-heading text-xs uppercase tracking-widest mb-8 border border-orange-600/10">
              <Icons.Tailoring className="h-4 w-4" />
              Excellence in Craftsmanship
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-brand-primary leading-[1.05] tracking-tight mb-8">
              Premium Tailoring & <br/> 
              <span className="text-orange-600">Fashion Design</span>
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              Elevate your wardrobe with bespoke couture. From traditional masterpieces to modern 
              corporate fashion, we deliver the perfect fit for the Nigerian elite.
            </p>
            <Button 
              size="lg" 
              onClick={handleConsult}
              className="h-14 px-8 rounded-[10px] bg-orange-600 hover:bg-orange-700 text-white font-bold font-heading shadow-lg shadow-orange-600/20"
            >
              Book a Measurement
            </Button>
          </motion.div>
        </section>

        {/* 2. What We Do Section */}
        <section className="py-16 md:py-24 border-t border-brand-primary/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">What We Do</h2>
            <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_WE_DO.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-8 rounded-[10px] bg-white border border-brand-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-orange-600/10 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-primary mb-3 leading-tight">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. Samples Section */}
        <section className="py-16 border-t border-brand-primary/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-brand-primary">Our Craftsmanship</h2>
            <p className="text-brand-muted mt-4">Selected samples from our latest collections</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {samples.map((sample) => (
              <div key={sample.id} className="group relative overflow-hidden rounded-[10px] aspect-[3/4] bg-white shadow-sm ring-1 ring-black/5">
                <Image
                  src={sample.image}
                  alt={sample.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold font-heading">{sample.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. What You Get Section */}
        <section className="py-24 border-t border-brand-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-[10px] overflow-hidden shadow-2xl">
              <Image
                src="https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Fashion%20Design/sewing%20image.jpg"
                alt="Craftsmanship process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-heading text-brand-primary mb-8">What You Get</h2>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-orange-600/10 flex items-center justify-center flex-shrink-0">
                      <LuCheck className="h-4 w-4 text-orange-600" />
                    </div>
                    <p className="text-lg text-brand-muted leading-relaxed font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Final CTA Section */}
        <section className="py-24 border-t border-brand-primary/5">
          <div className="bg-brand-primary rounded-[10px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
              <Icons.Tailoring className="h-96 w-96" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 relative z-10">Start Your Style Journey Today</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 relative z-10">
              Ready to experience the ultimate in bespoke fashion? Click the button below to start 
              your consultation via WhatsApp.
            </p>
            <Button 
              size="lg" 
              onClick={handleConsult}
              className="h-14 px-10 rounded-[10px] bg-orange-600 hover:bg-orange-700 text-white font-bold font-heading relative z-10"
            >
              Consult with a Stylist
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
