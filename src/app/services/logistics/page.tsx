import { prisma } from "@/lib/prisma";
import { LogisticsClient } from "./LogisticsClient";
import type { LogisticsVehicle } from "@/generated/client";

export const revalidate = 60; // 1 minute revalidation for caching

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
