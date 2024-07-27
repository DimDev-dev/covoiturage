import React from "react";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({ Child }) => {
  const user = localStorage.getItem("token");

  return user ? <Child /> : <Navigate to="/" />;
};


