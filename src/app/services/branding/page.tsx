import { prisma } from "@/lib/prisma";
import { BrandingClient } from "./BrandingClient";

// Revalidate occasionally, though admin actions should revalidate explicitly
export const revalidate = 60; 

import { constructMetadata } from "@/lib/metadata";
export const metadata = constructMetadata({
  title: "Premium Branding Catalog",
  description: "Browse our exclusive selection of premium branded products, from custom apparel to high-end accessories.",
  image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Premium%20Branding%20&%20Printing/KUKU.jpg",
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
