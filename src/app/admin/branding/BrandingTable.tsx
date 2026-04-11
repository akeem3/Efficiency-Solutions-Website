'use client';

import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button, buttonVariants } from '@/components/ui/button';
import { formatCurrency, cn } from '@/lib/utils';
import type { BrandingProduct } from '@/generated/client';
import ProductFormModal from './ProductFormModal';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '@/components/ui/alert-dialog';
import { deleteBrandingProduct } from '../actions';
import { toast } from 'sonner';
import { LuPlus, LuPencil, LuTrash2 } from 'react-icons/lu';
import type { BrandingCategory } from '@/generated/client';

export default function BrandingTable({ 
  initialProducts,
  categories 
}: { 
  initialProducts: (BrandingProduct & { categoryRel?: BrandingCategory | null })[],
  categories: BrandingCategory[]
}) {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function onDelete(id: string) {
    setLoadingId(id);
    try {
      await deleteBrandingProduct(id);
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error('Failed to delete product');
      console.error(error);
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-black/5 gap-4">
        <h2 className="text-lg font-bold font-heading text-brand-primary">Inventory</h2>
        <ProductFormModal 
          categories={categories}
          trigger={
            <button className={cn(
              buttonVariants({ variant: "default" }), 
              "w-full sm:w-auto bg-brand-primary text-white hover:bg-brand-primary/90 gap-2 h-10 px-4 rounded-lg flex items-center justify-center font-medium"
            )}>
              <LuPlus className="h-4 w-4" />
              Add Product
            </button>
          } 
        />
      </div>

      {/* Mobile View: Stacked Cards */}
      <div className="sm:hidden space-y-4 px-4 pb-8">
        {initialProducts.length === 0 ? (
          <div className="text-center py-12 bg-muted/30 rounded-[10px] border border-dashed text-brand-muted">
            No products found.
          </div>
        ) : (
          initialProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-black/5 rounded-[12px] p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              <div className="flex gap-4">
                <img 
                  src={product.imageUrls[0] || product.imageUrl} 
                  alt={product.name} 
                  className="h-20 w-20 rounded-[10px] object-cover flex-shrink-0" 
                />
                <div className="flex flex-col flex-grow min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-bold text-brand-primary truncate">{product.name}</span>
                    <div className="flex gap-2">
                       <ProductFormModal 
                        product={product} 
                        categories={categories}
                        trigger={
                          <button 
                            className={cn(
                              buttonVariants({ variant: "outline", size: "icon-xs" }), 
                              "flex items-center justify-center bg-muted/50"
                            )}
                          >
                            <LuPencil className="size-3" />
                          </button>
                        } 
                      />
                      
                      <AlertDialog>
                        <AlertDialogTrigger 
                          render={
                            <button 
                              className={cn(
                                buttonVariants({ variant: "outline", size: "icon-xs" }),
                                "text-destructive hover:bg-destructive/10 bg-muted/50"
                              )}
                              disabled={loadingId === product.id}
                            >
                              <LuTrash2 className="size-3" />
                            </button>
                          }
                        />
                        <AlertDialogContent className="w-[95vw] max-w-lg rounded-[10px]">
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Delete <strong>{product.name}</strong>?
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                            <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => onDelete(product.id)}
                              className="w-full sm:w-auto bg-destructive"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                  <span className="text-xs text-brand-muted mt-1">{product.category}</span>
                </div>
              </div>
              {product.isFeatured && (
                <div className="w-fit inline-flex items-center rounded-full bg-brand-gold/10 px-2 py-0.5 text-[10px] font-medium text-brand-gold">
                  Featured
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Desktop View: Traditional Table */}
      <div className="hidden sm:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px] md:w-[80px] px-4">Image</TableHead>
              <TableHead className="px-2 md:px-4">Name</TableHead>
              <TableHead className="hidden sm:table-cell px-4">Category</TableHead>
              <TableHead className="px-2 md:px-4">Price</TableHead>
              <TableHead className="text-right px-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialProducts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No products found.
                </TableCell>
              </TableRow>
            ) : (
              initialProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="px-4">
                    <img 
                      src={product.imageUrls[0] || product.imageUrl} 
                      alt={product.name} 
                      className="h-10 w-10 md:h-12 md:w-12 rounded-[10px] object-cover" 
                    />
                  </TableCell>
                  <TableCell className="font-medium text-brand-primary px-2 md:px-4 max-w-[120px] md:max-w-none truncate">
                    <div className="flex flex-col">
                      <span>{product.name}</span>
                      <span className="sm:hidden text-xs text-brand-muted font-normal">{product.category}</span>
                      {product.isFeatured && (
                        <span className="mt-1 w-fit inline-flex items-center rounded-full bg-brand-gold/10 px-2 py-0.5 text-[10px] font-medium text-brand-gold">
                          Featured
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell px-4">{product.category}</TableCell>
                  <TableCell className="text-right px-4">
                    <div className="flex justify-end gap-1.5 md:gap-2">
                      <ProductFormModal 
                        product={product} 
                        categories={categories}
                        trigger={
                          <button 
                            className={cn(
                              buttonVariants({ variant: "outline", size: "icon" }), 
                              "h-8 w-8 md:h-9 md:w-9 flex items-center justify-center"
                            )}
                          >
                            <LuPencil className="h-4 w-4" />
                          </button>
                        } 
                      />
                      
                      <AlertDialog>
                        <AlertDialogTrigger 
                          render={
                            <button 
                              className={cn(
                                buttonVariants({ variant: "outline", size: "icon" }),
                                "h-8 w-8 md:h-9 md:w-9 text-destructive hover:text-destructive"
                              )}
                              disabled={loadingId === product.id}
                            >
                              <LuTrash2 className="h-4 w-4" />
                            </button>
                          }
                        />
                        <AlertDialogContent className="w-[95vw] max-w-lg rounded-[10px]">
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Delete <strong>{product.name}</strong>?
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                            <AlertDialogCancel className="w-full sm:w-auto">Cancel</AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => onDelete(product.id)}
                              className="w-full sm:w-auto bg-destructive"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
