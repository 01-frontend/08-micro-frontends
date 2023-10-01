import { FC, StrictMode } from "react";

import { CommonMfeProps } from "shared-lib/dist/common/types";

import { Routes } from "./Routes";

const App: FC<CommonMfeProps> = ({ basePath }) => {
  return (
    <StrictMode>
      <Routes basePath={basePath} />
    </StrictMode>
  );
};

export default App;
