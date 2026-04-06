import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuPlus, LuArrowLeft, LuSettings2 } from "react-icons/lu";
import CategoryFormModal from "@/app/admin/logistics/categories/CategoryFormModal";

export default async function LogisticsCategoriesPage() {
  const categories = await prisma.logisticsCategory.findMany({
    include: {
      _count: {
        select: { vehicles: true }
      }
    },
    orderBy: { name: 'asc' }
  });

  return (
    <div className="flex-1 space-y-8 p-4 sm:p-8 pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <Link 
            href="/admin/logistics" 
            className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-primary transition-colors mb-2"
          >
            <LuArrowLeft className="h-4 w-4" />
            Back to Vehicles
          </Link>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-heading text-brand-primary">
            Logistics Categories
          </h2>
          <p className="text-brand-muted font-medium text-sm sm:text-base">
            Manage categories for your vehicle fleet and escort services.
          </p>
        </div>
        <CategoryFormModal 
          trigger={
            <Button className="rounded-[10px] bg-brand-primary gap-2 w-full sm:w-auto">
              <LuPlus className="h-4 w-4" />
              Add Category
            </Button>
          }
        />
      </div>

      <div className="rounded-[10px] border bg-card shadow-sm overflow-hidden">
        {/* Mobile View: Stacked Cards */}
        <div className="sm:hidden divide-y divide-black/5">
          {categories.length === 0 ? (
            <div className="p-12 text-center text-brand-muted font-medium border-dashed border-2 m-4 rounded-[10px]">
              No categories found. Create one to get started.
            </div>
          ) : (
            categories.map((category) => (
              <div key={category.id} className="p-4 flex flex-col gap-3 hover:bg-brand-muted/5 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="font-bold font-heading text-brand-primary text-lg">{category.name}</div>
                  <CategoryFormModal 
                    category={category}
                    trigger={
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-brand-primary/10 hover:text-brand-primary shrink-0">
                        <LuSettings2 className="h-4 w-4" />
                      </Button>
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold font-heading bg-brand-primary/10 text-brand-primary">
                    {category._count.vehicles} vehicles
                  </div>
                  <div className="text-xs text-brand-muted">
                    {new Date(category.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Desktop View: Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-brand-muted/5 border-b">
              <tr>
                <th className="p-4 font-bold font-heading text-brand-primary text-sm uppercase tracking-wider">Category Name</th>
                <th className="p-4 font-bold font-heading text-brand-primary text-sm uppercase tracking-wider">Vehicles Count</th>
                <th className="p-4 font-bold font-heading text-brand-primary text-sm uppercase tracking-wider">Created</th>
                <th className="p-4 font-bold font-heading text-brand-primary text-sm uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center text-brand-muted font-medium border-dashed border-2 m-4 rounded-[10px]">
                    No categories found. Create one to get started.
                  </td>
                </tr>
              ) : (
                categories.map((category) => (
                  <tr key={category.id} className="hover:bg-brand-muted/5 transition-colors group">
                    <td className="p-4">
                      <div className="font-bold font-heading text-brand-primary">{category.name}</div>
                    </td>
                    <td className="p-4">
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold font-heading bg-brand-primary/10 text-brand-primary">
                        {category._count.vehicles} vehicles
                      </div>
                    </td>
                    <td className="p-4 text-sm text-brand-muted">
                      {new Date(category.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <CategoryFormModal 
                          category={category}
                          trigger={
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-brand-primary/10 hover:text-brand-primary">
                              <LuSettings2 className="h-4 w-4" />
                            </Button>
                          }
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
