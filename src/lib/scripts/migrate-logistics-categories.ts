import { PrismaClient } from "../../generated/client";
import { LOGISTICS_CATEGORIES } from "../mock/logistics";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Starting Logistics Category Migration...");

  // 1. Create categories from the hardcoded list
  console.log("📝 Creating categories in the database...");
  for (const catName of LOGISTICS_CATEGORIES) {
    await prisma.logisticsCategory.upsert({
      where: { name: catName },
      update: {},
      create: { name: catName },
    });
  }

  const allCategories = await prisma.logisticsCategory.findMany();
  console.log(`✅ Created ${allCategories.length} categories.`);

  // 2. Map existing vehicles
  console.log("🔗 Linking existing vehicles to new category IDs...");
  const vehicles = await prisma.logisticsVehicle.findMany();
  
  let count = 0;
  for (const vehicle of vehicles) {
    const matchingCat = allCategories.find(c => c.name === vehicle.category);
    if (matchingCat) {
      await prisma.logisticsVehicle.update({
        where: { id: vehicle.id },
        data: { categoryId: matchingCat.id }
      });
      count++;
    } else {
      console.warn(`⚠️ No matching category for vehicle: ${vehicle.name} (${vehicle.category})`);
    }
  }

  console.log(`🎉 Migration complete! Updated ${count} vehicles.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
