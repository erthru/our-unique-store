import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import Router from "./router";
import "./assets/css/global.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Router} />
);
