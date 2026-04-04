import { z } from "zod";

export const LOGISTICS_CATEGORIES = [
  "Car Rental",
  "Car Rental + Driver",
  "Security Escort",
] as const;

export const LogisticsCategorySchema = z.enum(LOGISTICS_CATEGORIES);

export const LogisticsProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  model: z.string(),
  description: z.string(),
  pricePerDay: z.number().int(),
  category: LogisticsCategorySchema,
  imageUrl: z.string().url(),
  features: z.array(z.string()),
  isFeatured: z.boolean().optional(),
});

export type LogisticsProduct = z.infer<typeof LogisticsProductSchema>;

export const MOCK_LOGISTICS_PRODUCTS: LogisticsProduct[] = [
  {
    id: "l1",
    name: "Lexus LX 600 VIP",
    model: "2024 Black Edition",
    description: "The pinnacle of Nigerian executive transit. Fully tinted, black-on-black luxury SUV offering unmatched presence and comfort.",
    pricePerDay: 250000,
    category: "Car Rental + Driver",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
    features: ["V6 Twin Turbo", "VIP Passenger Cabin", "Armored Glass Option", "Elite Chauffeur"],
    isFeatured: true,
  },
  {
    id: "l2",
    name: "Mercedes-Benz G-Wagon",
    model: "G63 AMG Magno Black",
    description: "The ultimate status symbol. A matte black powerhouse designed for those who demand attention and absolute security.",
    pricePerDay: 350000,
    category: "Car Rental + Driver",
    imageUrl: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1200",
    features: ["V8 Bi-Turbo", "Night Package", "Custom Ambient Lighting", "Escort Ready"],
    isFeatured: true,
  },
  {
    id: "l3",
    name: "Toyota Land Cruiser 300",
    model: "2023 GR-Sport Black",
    description: "The gold standard for government and corporate convoys. Rugged capability meet's executive refinement.",
    pricePerDay: 200000,
    category: "Car Rental",
    imageUrl: "https://images.unsplash.com/photo-1594971775674-6a97f8f8c2ad?auto=format&fit=crop&q=80&w=1200",
    features: ["E-KDSS Suspension", "Cool Box", "Satellite Navigation", "4WD Low-Range"],
    isFeatured: true,
  },
  {
    id: "l4",
    name: "Range Rover Autobiography",
    model: "2023 Long Wheelbase",
    description: "Unrivaled sophistication. The preferred choice for diplomatic missions and high-society events in Lagos and Abuja.",
    pricePerDay: 400000,
    category: "Car Rental + Driver",
    imageUrl: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=1200",
    features: ["Executive Rear Seating", "Meridian Sound System", "Panic Button", "Soft Close Doors"],
  },
  {
    id: "l5",
    name: "Toyota Hilux Escort",
    model: "Adventure Edition (Black)",
    description: "Essential security support. High-speed pursuit capable and equipped for full convoy protection services.",
    pricePerDay: 120000,
    category: "Security Escort",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200",
    features: ["Armed Personnel Space", "Siren & PA System", "Heavy Duty Bullbar", "Run-flat Tyres"],
  },
  {
    id: "l6",
    name: "Toyota Land Cruiser Prado",
    model: "TX-L Black Edition",
    description: "The most versatile luxury jeep in Nigeria. Ideal for long-distance travel and urban executive movement.",
    pricePerDay: 150000,
    category: "Car Rental",
    imageUrl: "https://images.unsplash.com/photo-1603386330491-646400e07c3d?auto=format&fit=crop&q=80&w=1200",
    features: ["7-Seater", "Dual Tank", "Sunroof", "Reverse Camera"],
  },
];

export const getLogisticsProducts = async () => {
  // Simulating small delay for UI smoothness
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_LOGISTICS_PRODUCTS;
};
