import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Dashboard";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};
