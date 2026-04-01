"use client";

import { type LogisticsProduct } from "@/lib/mock/logistics";
import { VehicleCard } from "./VehicleCard";
import { cn } from "@/lib/utils";

interface LogisticsGridProps {
  vehicles: LogisticsProduct[];
  className?: string;
}

export const LogisticsGrid = ({ vehicles, className }: LogisticsGridProps) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:gap-10",
        className
      )}
    >
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};
