import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

prisma.$connect().then(() => {
  console.log("Database connected");
});

process.on("beforeExit", async () => {
  await prisma.$disconnect();
});
