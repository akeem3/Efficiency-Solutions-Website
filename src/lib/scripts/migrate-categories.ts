import { PrismaClient } from "../../generated/client";
import { BRANDING_CATEGORIES } from "../mock/products";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Starting Category Migration...");

  // 1. Create categories from the hardcoded list
  console.log("📝 Creating categories in the database...");
  for (const catName of BRANDING_CATEGORIES) {
    await prisma.brandingCategory.upsert({
      where: { name: catName },
      update: {},
      create: { name: catName },
    });
  }

  const allCategories = await prisma.brandingCategory.findMany();
  console.log(`✅ Created ${allCategories.length} categories.`);

  // 2. Map existing products
  console.log("🔗 Linking existing products to new category IDs...");
  const products = await prisma.brandingProduct.findMany();
  
  let count = 0;
  for (const product of products) {
    const matchingCat = allCategories.find(c => c.name === product.category);
    if (matchingCat) {
      await prisma.brandingProduct.update({
        where: { id: product.id },
        data: { categoryId: matchingCat.id }
      });
      count++;
    } else {
      console.warn(`⚠️ No matching category for product: ${product.name} (${product.category})`);
    }
  }

  console.log(`🎉 Migration complete! Updated ${count} products.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
