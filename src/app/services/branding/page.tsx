import { prisma } from "@/lib/prisma";
import { BrandingClient } from "./BrandingClient";

// Revalidate occasionally, though admin actions should revalidate explicitly
export const revalidate = 60; 

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
