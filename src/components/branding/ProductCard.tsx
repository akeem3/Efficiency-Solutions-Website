"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { type BrandingProduct } from "@/lib/mock/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: BrandingProduct;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const cart = useCart();

  const handleAddToCart = () => {
    cart.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      type: "branding",
      image: product.imageUrl,
    });
    toast.success(`${product.name} added to selections`, {
      description: "You can view your quote in the cart.",
    });
  };

  // Format price using Nigerian Naira
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <Card className={cn("group overflow-hidden border-none bg-surface shadow-sm transition-all duration-300 hover:shadow-md", className)}>
      <div className="relative aspect-square overflow-hidden bg-brand-muted/10 p-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.isFeatured && (
          <div className="absolute top-4 left-4 z-10 rounded-[10px] bg-brand-secondary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            Featured
          </div>
        )}
      </div>

      <CardContent className="bg-white p-6 pt-6">
        <h3 className="mb-1 text-base font-bold font-heading text-brand-primary line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-brand-muted/70 line-clamp-1">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between bg-white px-6 pb-6 pt-0">
        <span className="text-lg font-bold font-heading text-brand-primary">
          {formattedPrice}
        </span>
        <Button 
          variant="secondary" 
          size="sm"
          onClick={handleAddToCart}
          className="group/btn relative bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-300 px-4 rounded-[10px]"
        >
          <span className="mr-2 text-xs font-bold font-heading">Add to Cart</span>
          <ShoppingCart className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};
