import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route, Navigate  } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/home';
import HackathonPage from './pages/Main';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
      <Router>
          <div>
              {isAuthenticated ? (
                  <button onClick={handleLogout}>Logout</button>
              ) : (
                  <Navigate to="/login" replace />
              )}
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/event" element={<HackathonPage />} />
                  <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;
