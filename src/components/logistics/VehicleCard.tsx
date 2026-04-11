"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type LogisticsVehicle } from "@/generated/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { formatNaira } from "@/lib/whatsapp";
import { 
  ChevronRight, 
  Users, 
  Fuel, 
  Settings, 
  Wind, 
  ChevronLeft,
  Star,
  ShoppingCart
} from "lucide-react";

import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { env } from "@/env";

interface VehicleCardProps {
  vehicle: LogisticsVehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const cart = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = vehicle.imageUrls && vehicle.imageUrls.length > 0 
    ? vehicle.imageUrls 
    : [vehicle.imageUrl];

  const handleBook = () => {
    cart.addItem({
      id: vehicle.id,
      name: vehicle.name,
      price: vehicle.pricePerDay,
      quantity: 1,
      type: "logistics",
      image: images[0],
      metadata: {
        days: 1,
        model: vehicle.model
      }
    });
    toast.success(`${vehicle.name} added to selections`, {
      description: "You can send your booking request via the cart.",
    });
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-white rounded-[15px] md:rounded-[20px] overflow-hidden border border-brand-primary/5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-brand-primary/10 hover:-translate-y-2 h-full"
    >
      {/* Image Gallery Section */}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-primary/5 touch-pan-y">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentImageIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextImage();
              } else if (swipe > swipeConfidenceThreshold) {
                prevImage();
              }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${vehicle.name} ${vehicle.model}`}
              fill
              className="object-cover select-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
        
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-3 md:px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
            <button 
              onClick={prevImage}
              className="p-1.5 md:p-2 rounded-full bg-white/90 text-brand-primary backdrop-blur-sm shadow-xl transition-all hover:bg-brand-secondary hover:text-white transform hover:scale-110 pointer-events-auto"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button 
              onClick={nextImage}
              className="p-1.5 md:p-2 rounded-full bg-white/90 text-brand-primary backdrop-blur-sm shadow-xl transition-all hover:bg-brand-secondary hover:text-white transform hover:scale-110 pointer-events-auto"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        {vehicle.isFeatured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center gap-1.5 rounded-full bg-brand-gold px-3 py-1.5 text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest text-brand-primary shadow-lg backdrop-blur-sm">
               <Star className="h-3 w-3 fill-brand-primary" />
               Premium fleet
            </div>
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 px-2 py-1 rounded-full bg-black/20 backdrop-blur-md">
            {images.map((_unused: any, i: number) => (
              <div 
                key={i} 
                className={cn(
                  "h-1 md:h-1.5 rounded-full transition-all duration-300",
                  i === currentImageIndex ? "w-4 md:w-6 bg-brand-gold shadow-sm" : "w-1 md:w-1.5 bg-white/60"
                )}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-8">
        <div className="mb-4">
          <Badge variant="secondary" className="mb-2 md:mb-3 bg-brand-secondary/5 text-brand-secondary border-none px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider">
            {vehicle.category}
          </Badge>
          <h3 className="text-xl md:text-2xl font-extrabold font-heading text-brand-primary group-hover:text-brand-secondary transition-colors line-clamp-1">
            {vehicle.name} <span className="font-medium text-brand-muted/70">{vehicle.model}</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-y-3 md:gap-y-4 mb-6 md:mb-8 border-t border-brand-primary/5 pt-5 md:pt-6">
          <div className="flex items-center gap-2 md:gap-3 text-brand-muted/80">
            <div className="flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-lg bg-brand-primary/5 text-brand-primary">
              <Users className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </div>
            <span className="text-[11px] md:text-sm font-bold uppercase tracking-wide">4-5 Seats</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-brand-muted/80">
            <div className="flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-lg bg-brand-primary/5 text-brand-primary">
              <Fuel className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </div>
            <span className="text-[11px] md:text-sm font-bold uppercase tracking-wide">Petrol/Hybrid</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-brand-muted/80">
            <div className="flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-lg bg-brand-primary/5 text-brand-primary">
              <Settings className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </div>
            <span className="text-[11px] md:text-sm font-bold uppercase tracking-wide">Automatic</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-brand-muted/80">
            <div className="flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-lg bg-brand-primary/5 text-brand-primary">
              <Wind className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </div>
            <span className="text-[11px] md:text-sm font-bold uppercase tracking-wide">Chauffeur</span>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-brand-primary/5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-muted mb-1">Daily Rate</span>
              <span className="text-2xl md:text-3xl font-extrabold font-heading text-brand-primary">
                {formatNaira(vehicle.pricePerDay)}
              </span>
            </div>
            <div className="h-12 w-12 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary">
               <Icons.Logistics className="h-6 w-6" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleBook}
              className="w-full h-11 rounded-full border-brand-primary/10 bg-white text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 font-bold font-heading text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm"
            >
              Add to Cart
              <ShoppingCart className="h-4 w-4" />
            </Button>

            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => {
                const whatsappNumber = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
                const message = `Hi Efficiency Solutions, I'm interested in booking ${vehicle.name} ${vehicle.model} for rental.`;
                window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="w-full h-11 rounded-full bg-[#25D366] text-white hover:bg-[#1EBE57] transition-all duration-300 font-bold font-heading text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm border-none px-6"
            >
              Buy Now
              <div className="h-6 w-6 flex items-center justify-center overflow-hidden shrink-0 relative p-0.5 bg-white rounded-full">
                 <Image 
                    src="/whatsapp.png" 
                    alt="WhatsApp" 
                    width={22} 
                    height={22} 
                    className="object-contain" 
                 />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
