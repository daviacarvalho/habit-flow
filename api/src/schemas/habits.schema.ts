import { z } from "zod";

export const createHabitSchema = z.object({
  name: z.string().min(1, "Name is required."),
});

export const habitParamsSchema = z.object({
  id: z.string().cuid(),
});

export const habitsResponseSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date(),
  }),
);
