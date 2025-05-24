import { PrismaClient } from "@prisma/client";
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const prisma = new PrismaClient();

const router = t.router({
  getAll: t.procedure.query(async () => {
    return await prisma.product.findMany();
  }),
});

export default router;
