import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./css/all.css";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/register";
import Main from "./pages/Main";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            style={{
              position: "fixed",
              top: "10px",
              right: "10px",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
        
        {!isAuthenticated &&
          window.location.pathname !== "/login" &&
          window.location.pathname !== "/register" && (
            <Navigate to="/login" />
          )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/addHackathonEvent" element={<Main />} />
          <Route path="/editHackathonEvent/:id" element={<Main />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
