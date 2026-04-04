'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { upsertLogisticsVehicle } from '../actions';
import { LogisticsVehicleSchema } from '../schemas';
import { LOGISTICS_CATEGORIES } from '@/lib/mock/logistics';
import type { LogisticsVehicle } from '@prisma/client';

type VehicleFormValues = z.infer<typeof LogisticsVehicleSchema>;

interface VehicleFormModalProps {
  vehicle?: LogisticsVehicle;
  trigger?: React.ReactNode;
}

export default function VehicleFormModal({ vehicle, trigger }: VehicleFormModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(LogisticsVehicleSchema),
    defaultValues: vehicle ? {
      id: vehicle.id,
      name: vehicle.name,
      model: vehicle.model,
      description: vehicle.description,
      pricePerDay: vehicle.pricePerDay,
      category: vehicle.category,
      imageUrl: vehicle.imageUrl,
      features: vehicle.features,
      isFeatured: vehicle.isFeatured,
    } : {
      name: '',
      model: '',
      description: '',
      pricePerDay: 0,
      category: '',
      imageUrl: '',
      features: [],
      isFeatured: false,
    },
  });

  async function onSubmit(data: VehicleFormValues) {
    setLoading(true);
    try {
      await upsertLogisticsVehicle(data);
      toast.success(vehicle ? 'Vehicle updated successfully' : 'Vehicle created successfully');
      setOpen(false);
      if (!vehicle) form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Helper to handle features input as comma-separated string
  const [featuresString, setFeaturesString] = useState(vehicle?.features.join(', ') || '');

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={trigger || <Button variant="outline">Edit</Button>} />
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{vehicle ? 'Edit Vehicle' : 'Add New Vehicle'}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand/Manufacturer</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Lexus" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. LX 600" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {LOGISTICS_CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pricePerDay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price Per Day (₦)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-[10px] border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Featured</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Features</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="AC, WiFi, Bulletproof, etc (comma separated)" 
                      value={featuresString}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFeaturesString(val);
                        field.onChange(val.split(',').map(s => s.trim()).filter(Boolean));
                      }}
                    />
                  </FormControl>
                  <FormDescription>Enter features separated by commas.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe the vehicle..." 
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Saving...' : vehicle ? 'Update Vehicle' : 'Create Vehicle'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
