import { StrictMode } from "react";

import { AppRoutes } from "./Routes";

const App = (props) => {
  console.log(props);
  return (
    <StrictMode>
      <AppRoutes />
    </StrictMode>
  );
};

export default App;
