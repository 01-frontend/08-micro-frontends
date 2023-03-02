import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Dashboard from "./Dashboard";
import { EquityInfo } from "./Dashboard/EquityInfo";
import { Holdings } from "./Dashboard/Holdings";
import { Overview } from "./Dashboard/Overview";

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
          path: "/equity-info",
          element: <EquityInfo />,
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

export default App;
