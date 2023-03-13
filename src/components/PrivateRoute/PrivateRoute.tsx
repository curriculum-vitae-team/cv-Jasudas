import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: { children: JSX.Element }): ReturnType<React.FC> {
  if (!(localStorage.getItem("access_token") === "")) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
