import { RouterProvider } from "react-router";
import Router from "./router";
import "./assets/css/global.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./lib/trpc";
import { httpBatchLink } from "@trpc/client";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: process.env.NODE_ENV === "production" ? "https://api.our-unique-store.my.id/trpc" : "http://localhost:3000/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
