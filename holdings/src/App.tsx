import { FC, StrictMode } from "react";

import { Routes } from "./Routes";
import { CommonMfeProps } from "./hooks/mfeLoader";

const App: FC<CommonMfeProps> = ({ basePath }) => {
  return (
    <StrictMode>
      <Routes basePath={basePath} />
    </StrictMode>
  );
};

export default App;
