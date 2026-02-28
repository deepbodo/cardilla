import "./styles/Home.css";
import Main from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Docs from "./components/pages/Docs";
import { useAuthContext } from "./hooks/useAuthContext";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.js";

import "./App.css";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <HashRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Dashboard /> : <Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/docs" element={<Docs />} />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}
