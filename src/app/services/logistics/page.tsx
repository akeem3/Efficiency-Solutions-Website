import { prisma } from "@/lib/prisma";
import { LogisticsClient } from "./LogisticsClient";
import type { LogisticsVehicle } from "@prisma/client";

export const revalidate = 60; // 1 minute revalidation for caching

export default async function LogisticsPage() {
  const vehicles = await prisma.logisticsVehicle.findMany({
    orderBy: [
      { isFeatured: 'desc' },
      { name: 'asc' },
    ],
  });

  return <LogisticsClient initialVehicles={vehicles} />;
}
