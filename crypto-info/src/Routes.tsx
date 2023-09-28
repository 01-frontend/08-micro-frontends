import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";

import { Overview } from "./pages/Overview";

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="/crypto-info">
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/" element={<Navigate to="/overview" />} />
      </Routes>
    </BrowserRouter>
  );
};
