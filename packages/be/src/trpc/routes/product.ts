import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const router = t.router({
  getAll: t.procedure.query(() => {
    return [
      {
        name: "hehe",
      },
    ];
  }),
});

export default router;
