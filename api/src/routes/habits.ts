import { FastifyInstance } from "fastify";
import { habitsController } from "../controllers/habits.controller.js";

export const autoPrefix = "/habits";

export default async function habitsRoutes(app: FastifyInstance) {
  // GET
  app.get("/", habitsController.findAll);

  // POST
  app.post("/", habitsController.create);

  // GET /:id
  app.get("/:id", habitsController.findById);

  // DELETE /:id
  app.delete("/:id", habitsController.delete);
}
