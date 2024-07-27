import React from "react";
import { Navigate } from "react-router-dom";

export const NoAuthGuard = ({ Child }) => {
  const user = localStorage.getItem("token");

  return user ? <Navigate to="/dashboard" /> : <Child />;
};
