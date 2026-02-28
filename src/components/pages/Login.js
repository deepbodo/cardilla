import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/loginform.css';
import { useLogin } from '../../hooks/useLogin';
import Navbar from './Navbar';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div className="auth-page">
            <Navbar />
            <div className="auth-wrapper">
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-header">
                        <h3>Welcome Back</h3>
                        <p>Sign in to your Cardilla account</p>
                    </div>
                    <div className="auth-field">
                        <label>Email</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="auth-field">
                        <label>Password</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button className="auth-submit" type="submit" disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                    {error && <div className="auth-error">{error}</div>}
                    <p className="auth-switch">
                        Don't have an account?{' '}
                        <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;