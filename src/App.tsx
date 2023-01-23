import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { ResetPassword } from "./pages/ResetPassword";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="dark min-h-screen flex flex-col ">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
