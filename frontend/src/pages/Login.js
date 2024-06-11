import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/auth/login', { email, password })
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                onLogin();
                navigate('/');
            })
            .catch((error) => {
                if (error.response && error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError('An error occurred while logging in.');
                }
            });
    };

    const handleRegisterRedirect = () => {
        navigate('/register');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
            <h3 style={{ marginTop: "10px" }}>Don't have an account?</h3>
            <button style={{ marginTop: "10px" }} onClick={handleRegisterRedirect} className="login-button">
                Register Now?
            </button>
        </div>
    );
};

export default Login;