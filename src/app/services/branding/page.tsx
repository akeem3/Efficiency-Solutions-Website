import { prisma } from "@/lib/prisma";
import { BrandingClient } from "./BrandingClient";

// Revalidate occasionally, though admin actions should revalidate explicitly
export const revalidate = 60; 

import { constructMetadata } from "@/lib/metadata";
export const metadata = constructMetadata({
  title: "Premium Branding Catalog",
  description: "Browse our exclusive selection of premium branded products, from custom apparel to high-end accessories.",
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
});

export default async function BrandingPage() {
  const [products, categories] = await Promise.all([
    prisma.brandingProduct.findMany({
      orderBy: [
        { isFeatured: 'desc' },
        { name: 'asc' },
      ],
      include: { categoryRel: true }
    }),
    prisma.brandingCategory.findMany({
      orderBy: { name: 'asc' }
    })
  ]);

  return <BrandingClient initialProducts={products} categories={categories} />;
}
