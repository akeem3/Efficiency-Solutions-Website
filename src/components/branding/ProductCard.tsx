"use client";

import Image from "next/image";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { type BrandingProduct } from "@/generated/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { env } from "@/env";

interface ProductCardProps {
  product: BrandingProduct;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const cart = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = product.imageUrls && product.imageUrls.length > 0 
    ? product.imageUrls 
    : [product.imageUrl];

  const handleAddToCart = () => {
    cart.addItem({
      id: product.id,
      name: product.name,
      price: null,
      quantity: 1,
      type: "branding",
      image: images[0],
    });
    toast.success(`${product.name} added to selections`, {
      description: "You can send your request via the cart.",
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
    <Card className={cn("group overflow-hidden border-none bg-surface shadow-sm transition-all duration-300 hover:shadow-md", className)}>
      <div className="relative aspect-square overflow-hidden bg-brand-muted/10 touch-pan-y">
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
              alt={product.name}
              fill
              className="object-contain p-6 select-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
        
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
            <button 
              onClick={prevImage}
              className="p-1 rounded-full bg-white/80 text-brand-primary backdrop-blur-sm shadow-md transition-transform hover:scale-110 pointer-events-auto"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button 
              onClick={nextImage}
              className="p-1 rounded-full bg-white/80 text-brand-primary backdrop-blur-sm shadow-md transition-transform hover:scale-110 pointer-events-auto"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {product.isFeatured && (
          <div className="absolute top-4 left-4 z-10 rounded-[10px] bg-brand-secondary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            Featured
          </div>
        )}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_unused: any, i: number) => (
            <div 
              key={i} 
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === currentImageIndex ? "w-4 bg-brand-secondary" : "w-1 bg-white/50"
              )}
            />
          ))}
        </div>
      </div>

      <CardContent className="bg-white p-6 pt-6 text-center">
        <h3 className="mb-1 text-base font-bold font-heading text-brand-primary line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-brand-muted/70 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="bg-brand-muted/5 px-4 pb-6 pt-6 flex flex-col gap-3">
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleAddToCart}
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
            const message = `Hi Efficiency Solutions, I'm interested in buying ${product.name}: ${product.description}`;
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
      </CardFooter>
    </Card>
  );
};
