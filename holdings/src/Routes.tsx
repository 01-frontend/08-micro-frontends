import { FC } from "react";

import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import { Tab } from "./common/constants";
import { HoldingsList } from "./pages/HoldingsList";
import { CommonMfeProps } from "./hooks/mfeLoader";

export const Routes: FC<CommonMfeProps> = ({ basePath }) => {
  return (
    <BrowserRouter basename={basePath}>
      <Switch>
        <Route path={Tab.HOLDINGS_LIST}>
          <HoldingsList />
        </Route>
        <Route path="/">
          <Redirect to={Tab.HOLDINGS_LIST} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
