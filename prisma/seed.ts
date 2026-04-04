const { PrismaClient } = require("@prisma/client");
const { MOCK_BRANDING_PRODUCTS } = require("../src/lib/mock/products");
const { MOCK_LOGISTICS_PRODUCTS } = require("../src/lib/mock/logistics");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seeding...");

  // 1. Clear existing data
  console.log("🗑️ Clearing existing data...");
  await prisma.brandingProduct.deleteMany();
  await prisma.logisticsVehicle.deleteMany();

  // 2. Seed Branding Products
  console.log("🎁 Seeding Branding Products...");
  for (const product of MOCK_BRANDING_PRODUCTS) {
    await prisma.brandingProduct.create({
      data: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        imageUrl: product.imageUrl,
        isFeatured: product.isFeatured || false,
      },
    });
  }

  // 3. Seed Logistics Vehicles
  console.log("🚗 Seeding Logistics Vehicles...");
  for (const vehicle of MOCK_LOGISTICS_PRODUCTS) {
    await prisma.logisticsVehicle.create({
      data: {
        id: vehicle.id,
        name: vehicle.name,
        model: vehicle.model,
        description: vehicle.description,
        pricePerDay: vehicle.pricePerDay,
        category: vehicle.category,
        imageUrl: vehicle.imageUrl,
        features: vehicle.features,
        isFeatured: vehicle.isFeatured || false,
      },
    });
  }

  console.log("✅ Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
