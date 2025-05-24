import { createReactQueryHooks } from "@trpc/react";
import type { Router } from "be/src/trpc/router";

export const trpc = createReactQueryHooks<Router>();
trpc.useQuery([""]);
