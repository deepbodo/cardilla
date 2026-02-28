import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import '../../styles/regForm.css';
import Navbar from './Navbar';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    };

    return (
        <div className="auth-page">
            <Navbar />
            <div className="auth-wrapper">
                <form className="auth-form" method="POST" onSubmit={handleSubmit}>
                    <div className="auth-header">
                        <h3>Create Account</h3>
                        <p>Get started with Cardilla today</p>
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
                            placeholder="Create a strong password"
                        />
                    </div>
                    <button className="auth-submit" disabled={isLoading}>
                        {isLoading ? 'Creating account...' : 'Create Account'}
                    </button>
                    {error && <div className="auth-error">{error}</div>}
                    <p className="auth-switch">
                        Already have an account?{' '}
                        <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;