import { FastifyRequest, FastifyReply } from "fastify";
import { habitsService } from "../services/habits.service.js";
import {
  createHabitSchema,
  habitParamsSchema,
} from "../schemas/habits.schema.js";

export const habitsController = {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const parsed = createHabitSchema.parse(request.body);
    const habit = await habitsService.create(parsed);
    return reply.code(201).send(habit);
  },

  async findAll(_request: FastifyRequest, reply: FastifyReply) {
    const habits = await habitsService.findAll();
    return reply.send(habits);
  },

  async findById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = habitParamsSchema.parse(request.params);
    const habit = await habitsService.findById(id);

    if (!habit) {
      return reply.code(404).send({ error: "Habit not found" });
    }

    return reply.send(habit);
  },

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = habitParamsSchema.parse(request.params);
    const habit = await habitsService.findById(id);

    if (!habit) {
      return reply.code(404).send({ error: "Habit not found" });
    }

    await habitsService.delete(id);
    return reply.code(204).send();
  },
};
