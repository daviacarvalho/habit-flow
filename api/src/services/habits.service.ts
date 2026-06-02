import { prisma } from "../lib/prisma.js";

export const habitsService = {
  async create(data: { name: string }) {
    return prisma.habit.create({
      data: {
        name: data.name,
      },
    });
  },

  async findAll() {
    return prisma.habit.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  async findById(id: string) {
    return prisma.habit.findUnique({
      where: { id },
    });
  },

  async delete(id: string) {
    return prisma.habit.delete({
      where: { id },
    });
  },
};
