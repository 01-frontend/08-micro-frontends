import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Overview } from "./pages/Overview";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/" element={<Navigate to="/overview" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
