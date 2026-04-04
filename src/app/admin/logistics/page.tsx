import { prisma } from '@/lib/prisma';
import LogisticsTable from './LogisticsTable';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminLogisticsPage() {
  const vehicles = await prisma.logisticsVehicle.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-heading text-brand-primary tracking-tight">Logistics Fleet</h1>
        <p className="mt-2 text-sm md:text-base text-brand-muted">Manage your luxury logistics and car rentals.</p>
      </div>

      <div className="rounded-[10px] bg-white shadow-sm ring-1 ring-black/5">
        <LogisticsTable initialVehicles={vehicles} />
      </div>
    </>
  );
}
