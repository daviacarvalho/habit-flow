import { z } from "zod";

export const createHabitLogSchema = z.object({
  habitId: z.string().cuid("Invalid ID"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid DATE. Formato: YYYY-MM-DD"),
});

export const habitLogParamsSchema = z.object({
  id: z.string().cuid(),
});

export const habitLogByHabitParamsSchema = z.object({
  habitId: z.string().cuid(),
});

export const habitLogsResponseSchema = z.array(
  z.object({
    id: z.string(),
    habitId: z.string(),
    date: z.string(),
  }),
);
