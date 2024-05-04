import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const response = await fetch('https://api.tiburoncin.lat/22397/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.status === 200) {
            navigate('/admincrud');  // Navigate to the AdminPage after successful login
        } else {
            // Handle errors or invalid login here (e.g., show an error message)
            console.error(data.error);
            alert(data.error || 'Failed to login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Login;
