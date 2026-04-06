import { z } from 'zod';

export const BrandingProductSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().int().min(0, "Price must be a positive integer"),
  category: z.string().min(1, "Category is required"), // Keep for display/fallback
  categoryId: z.string().min(1, "Category assignment is required"),
  imageUrl: z.string().url("Invalid image URL"),
  isFeatured: z.boolean().default(false),
});

export const BrandingCategorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Category name is required"),
});

export const LogisticsVehicleSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  model: z.string().min(1, "Model is required"),
  description: z.string().min(1, "Description is required"),
  pricePerDay: z.coerce.number().int().min(0, "Price must be a positive integer"),
  category: z.string().min(1, "Category is required"),
  imageUrl: z.string().url("Invalid image URL"),
  features: z.array(z.string()).min(1, "At least one feature is required"),
  isFeatured: z.boolean().default(false),
});
