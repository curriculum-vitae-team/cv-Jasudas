import React from "react";
import { Navigate } from "react-router-dom";

export function PublicRoute({ children }: { children: JSX.Element }): ReturnType<React.FC> {
  if (localStorage.getItem("access_token") === "") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
