import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import { Overview } from "./pages/Overview";

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="/crypto-info">
      <Switch>
        <Route path="/overview">
          <Overview />
        </Route>
        <Route path="/">
          <Redirect to="/overview" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
