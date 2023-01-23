import { Routes, Route, Link, Navigate } from "react-router-dom";

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  console.log(document.cookie);

  if (localStorage.getItem("access_token")) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
