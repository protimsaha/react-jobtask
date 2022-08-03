import React from 'react';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase';
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault()
    }

    const navigate = useNavigate()

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    if (user) {
        navigate('/')
    }


    return (
        <div className='login-form mx-auto shadow mt-5'>
            <h2>Please Login</h2>
            <form className='d-flex flex-column ' onSubmit={handleLogin}>
                <input className='form-in' type="email" name="" id="" placeholder='Your Email' required />
                <input className='form-in' type="password" name="" id="" placeholder='Password' required />
                <input className='btn btn-info sub-btn' type="submit" value="Login" />
                <p className='mt-3'>Don't have any account? <Link to='/signup'>Signup </Link> </p>
            </form>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='or-sec'></div>
                <p className='mt-3 mx-3'>or</p>
                <div className='or-sec'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='btn btn-warning'>GOOGLE</button>
        </div>
    );
};

export default Login;