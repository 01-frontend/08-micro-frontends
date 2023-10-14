import { FC } from "react";

import { CommonMfeProps } from "@anhthi-deep-dive/fe_rollup";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import { Tab } from "./common/constants";
import { Overview } from "./pages/Overview";

export const Routes: FC<CommonMfeProps> = ({ basePath }) => {
  return (
    <BrowserRouter basename={basePath}>
      <Switch>
        <Route path={Tab.OVERVIEW}>
          <Overview />
        </Route>
        <Route path="/">
          <Redirect to={Tab.OVERVIEW} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
