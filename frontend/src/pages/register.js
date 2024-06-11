import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    return (
        <form onSubmit={handleRegister}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
