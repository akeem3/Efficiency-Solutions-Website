"use client";

import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LuTrash2, LuLock, LuCheck } from "react-icons/lu";
import { upsertBrandingCategory, deleteBrandingCategory } from "../../actions";
import { BrandingCategorySchema } from "../../schemas";

type CategoryFormValues = z.infer<typeof BrandingCategorySchema>;

interface CategoryFormModalProps {
  category?: {
    id: string;
    name: string;
    _count?: { products: number };
  };
  trigger?: React.ReactNode;
}

export default function CategoryFormModal({ category, trigger }: CategoryFormModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [password, setPassword] = useState("");

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(BrandingCategorySchema),
    defaultValues: category ? {
      id: category.id,
      name: category.name,
    } : {
      name: "",
    },
  });

  const productCount = category?._count?.products || 0;

  async function onSubmit(data: CategoryFormValues) {
    setLoading(true);
    try {
      await upsertBrandingCategory(data);
      toast.success(category ? "Category updated" : "Category created");
      setOpen(false);
      if (!category) form.reset();
    } catch (error) {
      toast.error("Failed to save category");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (productCount > 0 && !password) {
      toast.error("Password is required for non-empty categories");
      return;
    }

    setLoading(true);
    try {
      await deleteBrandingCategory(category!.id, password);
      toast.success("Category and associated products deleted");
      setOpen(false);
    } catch (error: any) {
      if (error.message === 'PASSWORD_REQUIRED') {
        toast.error("Invalid admin password");
      } else {
        toast.error("Failed to delete category");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) {
        setIsDeleting(false);
        setPassword("");
      }
    }}>
      <DialogTrigger 
        render={(props) => (
          trigger ? (
            React.cloneElement(trigger as React.ReactElement, props)
          ) : (
            <Button {...props} variant="outline">Edit Category</Button>
          )
        )}
      />
      
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold font-heading text-brand-primary">
            {isDeleting ? "Confirm Deletion" : category ? "Update Category" : "New Category"}
          </DialogTitle>
          {isDeleting && (
            <DialogDescription className="text-red-600 font-medium mt-2">
              ⚠️ Warning: Deleting this category will permanantly remove <b>{productCount} products</b>.
            </DialogDescription>
          )}
        </DialogHeader>

        {isDeleting ? (
          <div className="space-y-6 pt-4">
            {productCount > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-bold font-heading text-brand-primary flex items-center gap-2">
                  <LuLock className="h-4 w-4" />
                  Enter Admin Password to Proceed
                </label>
                <Input 
                  type="password"
                  placeholder="Admin Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-[10px] focus:ring-red-500"
                />
              </div>
            )}
            <DialogFooter className="gap-2">
              <Button 
                variant="ghost" 
                onClick={() => setIsDeleting(false)} 
                disabled={loading}
                className="font-bold font-heading"
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDelete} 
                disabled={loading || (productCount > 0 && !password)}
                className="gap-2 rounded-[10px] font-bold font-heading"
              >
                {loading ? "Deleting..." : "Confirm Delete"}
              </Button>
            </DialogFooter>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold font-heading text-brand-primary">Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Luxury Gift Boxes" {...field} className="rounded-[10px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="flex flex-col sm:flex-row gap-3">
                {category && (
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => setIsDeleting(true)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors gap-2 font-bold font-heading"
                  >
                    <LuTrash2 className="h-4 w-4" />
                    Delete
                  </Button>
                )}
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="bg-brand-primary rounded-[10px] flex-1 font-bold font-heading gap-2"
                >
                  <LuCheck className="h-4 w-4" />
                  {loading ? "Saving..." : category ? "Update Category" : "Create Category"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
