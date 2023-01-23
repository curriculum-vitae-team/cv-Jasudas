import { Routes, Route, Link, Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  console.log(document.cookie);

  if (!localStorage.getItem("access_token")) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
