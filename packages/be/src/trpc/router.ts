import { initTRPC } from "@trpc/server";
import productRouter from "./routes/product";

const t = initTRPC.create();

const router = t.router({
  product: productRouter,
});

export type Router = typeof router;
export default router;
