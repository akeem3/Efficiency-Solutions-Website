import { prisma } from '@/lib/prisma';
import LogisticsTable from './LogisticsTable';
import Link from 'next/link';
import { LuSettings2 } from 'react-icons/lu';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminLogisticsPage() {
  const [vehicles, categories] = await Promise.all([
    prisma.logisticsVehicle.findMany({
      include: { categoryRel: true },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.logisticsCategory.findMany({
      orderBy: { name: 'asc' },
    })
  ]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading text-brand-primary tracking-tight">Logistics Fleet</h1>
          <p className="mt-2 text-sm md:text-base text-brand-muted">Manage your luxury logistics and car rentals.</p>
        </div>
        <Link href="/admin/logistics/categories">
          <Button variant="outline" className="gap-2 rounded-[10px] bg-white w-full sm:w-auto">
            <LuSettings2 className="h-4 w-4" />
            Manage Categories
          </Button>
        </Link>
      </div>

      <div className="rounded-[10px] bg-white shadow-sm ring-1 ring-black/5">
        <LogisticsTable initialVehicles={vehicles} categories={categories} />
      </div>
    </>
  );
}
