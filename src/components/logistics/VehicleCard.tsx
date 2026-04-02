"use client";

import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { type LogisticsProduct } from "@/lib/mock/logistics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LuShieldCheck, LuUsers, LuClock, LuExternalLink } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  vehicle: LogisticsProduct;
  className?: string;
}

export const VehicleCard = ({ vehicle, className }: VehicleCardProps) => {
  const cart = useCart();

  const handleAddToSelections = () => {
    cart.addItem({
      id: vehicle.id,
      name: vehicle.name,
      price: vehicle.pricePerDay,
      quantity: 1,
      type: "logistics",
      image: vehicle.imageUrl,
      metadata: {
        days: 1,
        model: vehicle.model,
      },
    });
    toast.success(`${vehicle.name} added to your fleet selections`, {
      description: "Manage your rental days in the cart.",
    });
  };

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(vehicle.pricePerDay);

  return (
    <Card className={cn("group overflow-hidden border-none bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2", className)}>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={vehicle.imageUrl}
          alt={vehicle.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {vehicle.isFeatured && (
          <div className="absolute top-4 left-4 z-10 rounded-[10px] bg-brand-secondary px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
            Premium Fleet
          </div>
        )}

        <div className="absolute bottom-4 left-4 z-10 opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
           <div className="flex gap-2">
             {vehicle.features.slice(0, 3).map(f => (
               <span key={f} className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-1 rounded text-white font-bold">{f}</span>
             ))}
           </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold font-heading text-brand-primary mb-1">
              {vehicle.name}
            </h3>
            <p className="text-xs font-bold text-brand-secondary font-heading uppercase tracking-tighter opacity-80">
              {vehicle.model}
            </p>
          </div>
          <div className="h-10 w-10 rounded-[10px] bg-brand-primary/5 flex items-center justify-center">
             <LuShieldCheck className="h-5 w-5 text-brand-primary" />
          </div>
        </div>
        
        <p className="text-sm text-brand-muted leading-relaxed mb-6 line-clamp-2">
          {vehicle.description}
        </p>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-muted/10">
           <div className="flex items-center gap-2 text-brand-muted">
             <LuUsers className="h-4 w-4" />
             <span className="text-xs font-medium">Professional Driver</span>
           </div>
           <div className="flex items-center gap-2 text-brand-muted">
             <LuClock className="h-4 w-4" />
             <span className="text-xs font-medium">Daily Rental</span>
           </div>
        </div>
      </CardContent>

      <CardFooter className="bg-brand-primary/5 p-6 flex items-center justify-between">
        <div>
           <span className="block text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-1">Daily Rate</span>
           <span className="text-xl font-bold font-heading text-brand-primary">
             {formattedPrice}
           </span>
        </div>
        <Button 
          variant="default"
          onClick={handleAddToSelections}
          className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-[10px] px-6 flex gap-2 font-bold font-heading text-sm h-12"
        >
          Book Now
          <LuExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
