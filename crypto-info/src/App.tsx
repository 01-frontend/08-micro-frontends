import { FC, StrictMode } from "react";

import { CommonMfeProps } from "@anhthi-deep-dive/fe_rollup";

import { Routes } from "./Routes";

const App: FC<CommonMfeProps> = ({ basePath }) => {
  return (
    <StrictMode>
      <Routes basePath={basePath} />
    </StrictMode>
  );
};

export default App;
