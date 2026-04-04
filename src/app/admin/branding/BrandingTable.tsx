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
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import type { BrandingProduct } from '@prisma/client';
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

export default function BrandingTable({ initialProducts }: { initialProducts: BrandingProduct[] }) {
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
    <div>
      <div className="flex items-center justify-between p-4 border-b border-black/5">
        <h2 className="text-lg font-bold font-heading text-brand-primary">Inventory</h2>
        <ProductFormModal 
          trigger={
            <Button className="bg-brand-primary text-white hover:bg-brand-primary/90 gap-2">
              <LuPlus className="h-4 w-4" />
              Add Product
            </Button>
          } 
        />
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
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
                  <TableCell>
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="h-10 w-10 rounded-[10px] object-cover" 
                    />
                  </TableCell>
                  <TableCell className="font-medium text-brand-primary">
                    {product.name}
                    {product.isFeatured && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-brand-gold/10 px-2 py-0.5 text-[10px] font-medium text-brand-gold">
                        Featured
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <ProductFormModal 
                        product={product} 
                        trigger={
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <LuPencil className="h-4 w-4" />
                          </Button>
                        } 
                      />
                      
                      <AlertDialog>
                        <AlertDialogTrigger 
                          render={
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8 text-destructive hover:text-destructive"
                              disabled={loadingId === product.id}
                            >
                              <LuTrash2 className="h-4 w-4" />
                            </Button>
                          }
                        />
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete <strong>{product.name}</strong> from the database.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => onDelete(product.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
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
