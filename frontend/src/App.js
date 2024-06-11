import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/register';
import Main from './pages/Main';

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
                {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
                
                {/* Only redirect to login page if not authenticated and not on login or register page */}
                {!isAuthenticated && window.location.pathname !== '/login' && window.location.pathname !== '/register' && <Navigate to="/login" replace />}                
                <Routes>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/addHackathonEvent" element={<Main />} />
                    <Route path="/editHackathonEvent/:id" element={<Main />} />
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
