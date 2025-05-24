import { Hono } from "hono";
import { cors } from "hono/cors";
import { trpcServer } from "@hono/trpc-server";
import router from "./trpc/router";

const app = new Hono();

app.use(cors());

app.use(
  "/trpc/*",
  trpcServer({
    router,
  })
);

export default app;
