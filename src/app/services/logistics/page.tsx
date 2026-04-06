import { prisma } from "@/lib/prisma";
import { LogisticsClient } from "./LogisticsClient";
import type { LogisticsVehicle } from "@/generated/client";

export const revalidate = 60; // 1 minute revalidation for caching

import { constructMetadata } from "@/lib/metadata";
export const metadata = constructMetadata({
  title: "Luxury Logistics & Escort",
  description: "Exclusive vehicle fleet and professional security services for the Nigerian market. From armored G-Wagons to luxury Lexuses.",
  image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1200",
});
export default async function LogisticsPage() {
  const [vehicles, categories] = await Promise.all([
    prisma.logisticsVehicle.findMany({
      include: { categoryRel: true },
      orderBy: [
        { isFeatured: 'desc' },
        { name: 'asc' },
      ],
    }),
    prisma.logisticsCategory.findMany({
      orderBy: { name: 'asc' }
    })
  ]);

  return <LogisticsClient initialVehicles={vehicles} categories={categories} />;
}
