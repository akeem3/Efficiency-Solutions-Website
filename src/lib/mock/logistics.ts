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
    name: "Lexus LX 570",
    model: "2022 Luxury Edition",
    description: "The ultimate luxury SUV for navigating Nigerian roads with supreme comfort and presence.",
    pricePerDay: 150000,
    category: "Car Rental",
    imageUrl: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200",
    features: ["V8 Engine", "Leather Seats", "4WD", "AC"],
    isFeatured: true,
  },
  {
    id: "l2",
    name: "Mercedes-Benz G-Wagon",
    model: "G63 AMG",
    description: "Iconic status and rugged capability. Ideal for premium arrival and luxury transport.",
    pricePerDay: 250000,
    category: "Car Rental + Driver",
    imageUrl: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1200",
    features: ["Armored Options", "Elite Driver", "Tinted Windows"],
    isFeatured: true,
  },
  {
    id: "l3",
    name: "Toyota Hilux",
    model: "Hilux Revo",
    description: "Reliable and versatile. Essential for logistics and secure escort operations.",
    pricePerDay: 60000,
    category: "Security Escort",
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200",
    features: ["Security Personnel", "Police Escort Option", "4WD"],
  },
  {
    id: "l4",
    name: "Range Rover Autobiography",
    model: "2023 SV",
    description: "Peerless luxury and refinement. Perfect for diplomatic and high-profile movements.",
    pricePerDay: 200000,
    category: "Car Rental + Driver",
    imageUrl: "https://images.unsplash.com/photo-1606148301666-da2297926127?auto=format&fit=crop&q=80&w=1200",
    features: ["Adaptive Cruise", "Panoramic Roof", "Executive Rear Seats"],
  },
];

export const getLogisticsProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_LOGISTICS_PRODUCTS;
};
