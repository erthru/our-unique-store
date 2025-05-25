import { createBrowserRouter } from "react-router";
import LayoutDefault from "./layouts/default";
import Index from "./pages";
import BySlug from "./pages/products/by-slug";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/products/:slug",
        element: <BySlug />,
      },
    ],
  },
]);

export default Router;
