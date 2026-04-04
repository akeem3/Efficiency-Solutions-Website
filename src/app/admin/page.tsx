import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { LuTags, LuCar } from 'react-icons/lu';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminDashboardPage() {
  const [brandingCount, logisticsCount] = await Promise.all([
    prisma.brandingProduct.count(),
    prisma.logisticsVehicle.count()
  ]);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-heading text-brand-primary tracking-tight">Overview Dashboard</h1>
        <p className="mt-2 text-sm md:text-base text-brand-muted">Welcome to the Efficiency Solutions admin panel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-[10px] bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center gap-4 border-b border-brand-primary/5 pb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-primary/10">
              <LuTags className="h-6 w-6 text-brand-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading text-brand-primary">Branding & Printing</h2>
              <p className="text-sm text-brand-muted">Manage product catalog</p>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-brand-secondary">{brandingCount}</span>
              <span className="text-sm font-medium text-brand-muted uppercase tracking-wider">Total Items</span>
            </div>
            <div className="mt-6">
              <Link 
                href="/admin/branding" 
                className="inline-block w-full rounded-[10px] bg-brand-primary/5 px-4 py-3 text-center text-sm font-bold text-brand-primary transition-all hover:bg-brand-primary/10"
              >
                Manage Inventory
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-[10px] bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="flex items-center gap-4 border-b border-brand-primary/5 pb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-brand-primary/10">
              <LuCar className="h-6 w-6 text-brand-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading text-brand-primary">Logistics Fleet</h2>
              <p className="text-sm text-brand-muted">Manage vehicle rentals</p>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-brand-secondary">{logisticsCount}</span>
              <span className="text-sm font-medium text-brand-muted uppercase tracking-wider">Total Vehicles</span>
            </div>
            <div className="mt-6">
              <Link 
                href="/admin/logistics" 
                className="inline-block w-full rounded-[10px] bg-brand-primary/5 px-4 py-3 text-center text-sm font-bold text-brand-primary transition-all hover:bg-brand-primary/10"
              >
                Manage Fleet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
