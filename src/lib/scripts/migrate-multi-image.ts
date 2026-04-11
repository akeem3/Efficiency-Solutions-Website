import { PrismaClient } from '../../generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting migration...');

  // Migrate BrandingProducts
  const brandingProducts = await prisma.brandingProduct.findMany();
  for (const product of brandingProducts) {
    if (product.imageUrl && (!product.imageUrls || product.imageUrls.length === 0)) {
      await prisma.brandingProduct.update({
        where: { id: product.id },
        data: {
          imageUrls: [product.imageUrl]
        }
      });
      console.log(`Migrated BrandingProduct: ${product.name}`);
    }
  }

  // Migrate LogisticsVehicles
  const vehicles = await prisma.logisticsVehicle.findMany();
  for (const vehicle of vehicles) {
    if (vehicle.imageUrl && (!vehicle.imageUrls || vehicle.imageUrls.length === 0)) {
      await prisma.logisticsVehicle.update({
        where: { id: vehicle.id },
        data: {
          imageUrls: [vehicle.imageUrl]
        }
      });
      console.log(`Migrated LogisticsVehicle: ${vehicle.name}`);
    }
  }

  console.log('Migration complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
