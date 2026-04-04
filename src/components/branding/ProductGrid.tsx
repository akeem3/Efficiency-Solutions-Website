"use client";

import type { BrandingProduct } from "@prisma/client";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: BrandingProduct[];
  className?: string;
}

export const ProductGrid = ({ products, className }: ProductGridProps) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
