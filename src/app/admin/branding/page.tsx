import { prisma } from '@/lib/prisma';
import BrandingTable from './BrandingTable';
import Link from 'next/link';
import { LuSettings2 } from 'react-icons/lu';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable caching for admin dashboard

export default async function AdminBrandingPage() {
  const [products, categories] = await Promise.all([
    prisma.brandingProduct.findMany({
      orderBy: { createdAt: 'desc' },
    }),
    prisma.brandingCategory.findMany({
      orderBy: { name: 'asc' },
    })
  ]);

  return (
    <>
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading text-brand-primary tracking-tight">Branding Products</h1>
          <p className="mt-2 text-sm md:text-base text-brand-muted">Manage your branding and printing catalog.</p>
        </div>
        <Link href="/admin/branding/categories">
          <Button variant="outline" className="rounded-[10px] gap-2 font-bold font-heading">
            <LuSettings2 className="h-4 w-4" />
            Manage Categories
          </Button>
        </Link>
      </div>

      <div className="rounded-[10px] bg-white shadow-sm ring-1 ring-black/5">
        <BrandingTable 
          initialProducts={products} 
          categories={categories}
        />
      </div>
    </>
  );
}
