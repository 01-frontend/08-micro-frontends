import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { CryptoInfo } from "./pages/Dashboard/CryptoInfo";
import { Holdings } from "./pages/Dashboard/Holdings";
import { OrderMgt } from "./pages/Dashboard/OrderMgt";
import { Tab } from "./pages/Dashboard/types";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path={`${Tab.CryptoInfo}/*`} element={<CryptoInfo />} />
          <Route path={`${Tab.Holdings}/*`} element={<Holdings />} />
          <Route path={`${Tab.OrderMgt}/*`} element={<OrderMgt />} />
          <Route path="/" element={<Navigate to={Tab.CryptoInfo} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
