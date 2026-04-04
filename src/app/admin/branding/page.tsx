import { prisma } from '@/lib/prisma';
import BrandingTable from './BrandingTable';

export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable caching for admin dashboard

export default async function AdminBrandingPage() {
  const products = await prisma.brandingProduct.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-heading text-brand-primary tracking-tight">Branding Products</h1>
        <p className="mt-2 text-sm md:text-base text-brand-muted">Manage your branding and printing catalog.</p>
      </div>

      <div className="rounded-[10px] bg-white shadow-sm ring-1 ring-black/5">
        <BrandingTable initialProducts={products} />
      </div>
    </>
  );
}
