import { createTRPCReact } from "@trpc/react-query";
import type { Router } from "be/src/trpc/router";

export const trpc = createTRPCReact<Router>();
