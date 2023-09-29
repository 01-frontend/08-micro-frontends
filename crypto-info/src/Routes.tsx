import { FC } from "react";

import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import { CommonMfeProps } from "shared-lib/dist/common/types";

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
