"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { env } from "@/env";

export const FloatingWhatsApp = () => {
  const whatsappNumber = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut" as const,
      }}
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 drop-shadow-2xl"
      >
        <Image 
          src="/whatsapp.png" 
          alt="WhatsApp Chat" 
          width={64} 
          height={64} 
          className="object-contain"
          priority
        />
      </Link>
    </motion.div>
  );
};
