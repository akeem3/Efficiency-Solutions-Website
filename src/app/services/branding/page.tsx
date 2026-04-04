import { prisma } from "@/lib/prisma";
import { BrandingClient } from "./BrandingClient";
import type { BrandingProduct } from "@prisma/client";

// Revalidate occasionally, though admin actions should revalidate explicitly
export const revalidate = 60; 

export default async function BrandingPage() {
  const products = await prisma.brandingProduct.findMany({
    orderBy: [
      { isFeatured: 'desc' },
      { name: 'asc' },
    ],
  });

  return <BrandingClient initialProducts={products as BrandingProduct[]} />;
}
