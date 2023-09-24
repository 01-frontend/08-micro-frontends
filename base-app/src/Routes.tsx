import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { CryptoInfo } from "./pages/Dashboard/CryptoInfo";
import { Holdings } from "./pages/Dashboard/Holdings";
import { OrderMgt } from "./pages/Dashboard/OrderMgt";
import { Tab } from "./pages/Dashboard/types";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: Tab.CryptoInfo,
          element: <CryptoInfo />,
        },
        {
          path: Tab.Holdings,
          element: <Holdings />,
        },
        {
          path: Tab.OrderMgt,
          element: <OrderMgt />,
        },
        {
          path: "/",
          element: <Navigate to={Tab.CryptoInfo} replace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement="Loading..." />;
};
