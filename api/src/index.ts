import fastify from "fastify";
import cors from "@fastify/cors";
import autoload from "@fastify/autoload";
import path from "path";
import { consola } from "consola";
import chalk from "chalk";

const app = fastify({ logger: true });

app.register(cors, { origin: "*" });

app.register(autoload, {
  dir: path.join(import.meta.dirname, "routes"),
  routeParams: true,
});

app.addHook("onRoute", ({ method, path }) => {
  consola.success(`${chalk.green(method)} ${chalk.blue(path)}`);
});

const port = parseInt(process.env.PORT || "3333", 10);

await app.listen({ port, host: "0.0.0.0" }).catch((err) => {
  consola.error(err);
  process.exit(1);
});

consola.success(chalk.green(`Server running on http://localhost:${port}`));
