import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="dark h-full">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/signup" element={<Login />}></Route>
            <Route path="/login" element={<Signup />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
