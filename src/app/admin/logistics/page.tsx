import { prisma } from '@/lib/prisma';
import LogisticsTable from './LogisticsTable';

export const revalidate = 0;

export default async function AdminLogisticsPage() {
  const vehicles = await prisma.logisticsVehicle.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading text-brand-primary">Logistics Fleet</h1>
          <p className="mt-2 text-brand-muted">Manage your luxury logistics and car rentals.</p>
        </div>
      </div>

      <div className="rounded-[10px] bg-white shadow-sm ring-1 ring-black/5">
        <LogisticsTable initialVehicles={vehicles} />
      </div>
    </div>
  );
}
