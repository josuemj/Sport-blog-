import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Only one import for useAuth
import './Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('https://api.tiburoncin.lat/22397/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.status === 200) {
            login();
            navigate('/admincrud');
        } else {
            console.error(data.error);
            alert(data.error || 'Failed to login');
        }
    };

    return (
        <div className='form-containter'>

            <form onSubmit={handleSubmit} className='login-form'>
            <label htmlFor='username'><h1>Login</h1></label>

            <label htmlFor='username'>Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Login" />
            </form>
        </div>
        
    );
}

export default Login;
