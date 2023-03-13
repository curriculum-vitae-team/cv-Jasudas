import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { ResetPassword } from "./pages/ResetPassword";
import { SignUp } from "./pages/SignUp";

function App(): ReturnType<React.FC> {
  return (
    <div className="dark flex min-h-screen flex-col ">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
