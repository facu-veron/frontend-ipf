import { Dashboard } from "../pages/dashboard/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<Login />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
};
