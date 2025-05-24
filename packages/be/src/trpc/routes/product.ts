import { PrismaClient } from "@prisma/client";
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

const prisma = new PrismaClient();

const router = t.router({
  getAll: t.procedure.query(async () => {
    return await prisma.product.findMany();
  }),

  getById: t.procedure.input(z.string()).query(async ({ input }) => {
    return await prisma.product.findUnique({
      where: {
        id: input,
      },
    });
  }),
});

export default router;
