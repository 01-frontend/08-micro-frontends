import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import { BaseRoute } from "./common/constants";
import Dashboard from "./pages/Dashboard";
import { CryptoInfo } from "./pages/Dashboard/CryptoInfo";
import { Holdings } from "./pages/Dashboard/Holdings";
import { OrderMgt } from "./pages/Dashboard/OrderMgt";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Dashboard />
          <Route path={BaseRoute.CryptoInfo}>
            <CryptoInfo />
          </Route>
          <Route path={BaseRoute.Holdings}>
            <Holdings />
          </Route>
          <Route path={BaseRoute.OrderMgt}>
            <OrderMgt />
          </Route>
          <Route path="/">
            <Redirect to={BaseRoute.CryptoInfo} />
          </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
