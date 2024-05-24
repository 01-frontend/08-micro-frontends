import { FC, StrictMode } from "react";

import { CommonMfeProps } from "./hooks/mfeLoader";
import { Routes } from "./Routes";

const App: FC<CommonMfeProps> = ({ basePath }) => {
  return (
    <StrictMode>
      <Routes basePath={basePath} />
    </StrictMode>
  );
};

export default App;
