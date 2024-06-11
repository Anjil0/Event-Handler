import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css'; // Import the CSS file

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            window.alert("Passwords don't match");
            return;
        }
        axios.post('http://localhost:3001/auth/register', { email, password })
            .then(() => {
                window.alert('Registration successful');
                navigate('/login');
            })
            .catch((error) => {
                let errorMessage = 'An error occurred while registering.';
                if (error.response && error.response.data.message) {
                    errorMessage = error.response.data.message;
                }
                window.alert(errorMessage);
            });
    };

    const loginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Register</h2>
            <form onSubmit={handleRegister} className="register-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
            <h3 style={{ marginTop: "10px" }}>Already Have an Account?</h3>
            <button style={{ marginTop: "10px" }}onClick={loginRedirect} className="register-button">Login Now</button>
        </div>
    );
};

export default Register;