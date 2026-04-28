import { prisma } from "@/lib/prisma";
import { LogisticsClient } from "./LogisticsClient";
import type { LogisticsVehicle } from "@/generated/client";

export const revalidate = 60; // 1 minute revalidation for caching

import { constructMetadata } from "@/lib/metadata";
export const metadata = constructMetadata({
  title: "Luxury Logistics & Escort",
  description: "Exclusive vehicle fleet and professional security services for the Nigerian market. From armored G-Wagons to luxury Lexuses.",
  image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Luxury%20Rides/prado%20jeep.jpg",
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
