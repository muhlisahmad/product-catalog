import { Laptop, PrismaClient, Prisma } from "@prisma/client";
import fs from "fs";
import csv from "csv-parser";

const prisma = new PrismaClient();

async function main() {
  const laptops: Partial<Laptop>[] = [];
  fs.createReadStream("./prisma/amazon_laptop_prices_v01.csv")
    .pipe(csv())
    .on("data", (row) => {
      laptops.push({
        brand: row.brand || null,
        model: row.model || null,
        screen_size: row.screen_size || null,
        color: row.color || null,
        harddisk: row.harddisk || null,
        cpu: row.cpu || null,
        ram: row.ram || null,
        OS: row.OS || null,
        special_features: row.special_features || null,
        graphics: row.graphics || null,
        graphics_coprocessor: row.graphics_coprocessor || null,
        cpu_speed: row.cpu_speed || null,
        rating: row.rating ? new Prisma.Decimal(String(row.rating)) : null,
        price: row.price || null,
      });
    })
    .on("end", async () => {
      const data = await prisma.laptop.createMany({
        data: laptops,
        skipDuplicates: true,
      });
      console.log({ data });
    });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
