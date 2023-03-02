import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { EquityInfo } from "./pages/Dashboard/EquityInfo";
import { Holdings } from "./pages/Dashboard/Holdings";
import { Overview } from "./pages/Dashboard/Overview";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/overview",
          element: <Overview />,
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
    {
      path: "/equity-info",
      element: <EquityInfo />,
    },
  ]);

  return <RouterProvider router={router} fallbackElement="Loading..." />;
};

export default App;
