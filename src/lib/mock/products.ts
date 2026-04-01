import { z } from "zod";

export const BRANDING_CATEGORIES = [
  "Apparel",
  "Corporate Gifts",
  "Promotional Items",
  "Office Branding",
] as const;

export const CategorySchema = z.enum(BRANDING_CATEGORIES);

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number().int(),
  category: CategorySchema,
  imageUrl: z.string().url(),
  isFeatured: z.boolean().optional(),
});

export type BrandingProduct = z.infer<typeof ProductSchema>;

export const MOCK_BRANDING_PRODUCTS: BrandingProduct[] = [
  {
    id: "1",
    name: "Classic Branding T-Shirt",
    description: "Premium cotton T-shirt with high-quality screen printing options.",
    price: 3500,
    category: "Apparel",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    isFeatured: true,
  },
  {
    id: "2",
    name: "Luxury Ceramic Mug",
    description: "Elegant matte finish ceramic mug for corporate branding.",
    price: 2500,
    category: "Corporate Gifts",
    imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fbed20?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "Branded Snapback Cap",
    description: "Stylish snapback cap with 3D embroidery branding.",
    price: 4500,
    category: "Apparel",
    imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800",
    isFeatured: true,
  },
  {
    id: "4",
    name: "Executive Leather Notebook",
    description: "Premium leather-bound notebook for high-end corporate gifts.",
    price: 7500,
    category: "Corporate Gifts",
    imageUrl: "https://images.unsplash.com/photo-1531346878377-a5ec20888e23?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    name: "Branded USB Flash Drive",
    description: "High-speed USB drive with sleek aluminum branding surface.",
    price: 3200,
    category: "Promotional Items",
    imageUrl: "https://images.unsplash.com/photo-1528640715335-467479708970?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    name: "Office Acrylic Wall Sign",
    description: "Professional acrylic signage for office reception branding.",
    price: 15000,
    category: "Office Branding",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "7",
    name: "Premium Lanyard",
    description: "High-durability silk-screened lanyards for corporate events.",
    price: 1200,
    category: "Promotional Items",
    imageUrl: "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "8",
    name: "Corporate Tote Bag",
    description: "Eco-friendly canvas tote bags with vibrant branding.",
    price: 2800,
    category: "Apparel",
    imageUrl: "https://images.unsplash.com/photo-1544816153-12ad5d7133a2?auto=format&fit=crop&q=80&w=800",
  },
];

export const getBrandingProducts = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_BRANDING_PRODUCTS;
};

export const getProductsByCategory = async (category: string) => {
  const products = await getBrandingProducts();
  return products.filter((p) => p.category === category);
};
