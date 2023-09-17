import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { CryptoInfo } from "./pages/Dashboard/CryptoInfo";
import { Holdings } from "./pages/Dashboard/Holdings";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/overview",
          element: <CryptoInfo />,
        },
        {
          path: "/holdings",
          element: <Holdings />,
        },

        {
          path: "/",
          element: <Navigate to="/overview" replace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement="Loading..." />;
};
