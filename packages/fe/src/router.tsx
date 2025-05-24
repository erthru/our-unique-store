import { createBrowserRouter } from "react-router";
import LayoutDefault from "./layouts/default";
import Index from "./pages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
]);

export default Router;
