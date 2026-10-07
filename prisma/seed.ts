import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client.js';
import { readFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

async function main() {
  const unitsJson = JSON.parse(
    readFileSync(join(__dirname, '../data/units.json'), 'utf-8')
  );

  for (const property of unitsJson.properties) {
    for (const building of property.buildings) {
      for (const unit of building.units) {
        await prisma.unit.upsert({
          where: { unitId: unit.unit_id },
          update: {},
          create: {
            unitId: unit.unit_id,
            buildingId: building.building_id,
            propertyId: property.property_id,
            label: unit.label,
            type: unit.type,
            areaSqm: unit.area_sqm,
            parkingBay: unit.parking_bay ?? null,
            status: unit.status,
          },
        });
      }
    }
  }

  console.log('Seeded units successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });