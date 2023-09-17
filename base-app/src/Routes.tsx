import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { CryptoInfo } from "./pages/Dashboard/CryptoInfo";
import { Holdings } from "./pages/Dashboard/Holdings";
import { OrderMgt } from "./pages/Dashboard/OrderMgt";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/crypto-info",
          element: <CryptoInfo />,
        },
        {
          path: "/holdings",
          element: <Holdings />,
        },
        {
          path: "/order-mgt",
          element: <OrderMgt />,
        },
        {
          path: "/",
          element: <Navigate to="/crypto-info" replace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement="Loading..." />;
};
