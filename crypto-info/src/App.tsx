import { FC, StrictMode } from "react";

import "@anhthi-projects/usy-ui/dist/styles.css";

import { CommonMfeProps } from "./hooks/mfeLoader";
import { Routes } from "./Routes";

const App: FC<CommonMfeProps> = ({ basePath, baseHistory }) => {
  return (
    <StrictMode>
      <Routes basePath={basePath} baseHistory={baseHistory} />
    </StrictMode>
  );
};

export default App;
