import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase';
import { useNavigate, Link } from 'react-router-dom'


const Signup = () => {
    const navigate = useNavigate()


    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        emailUser,

    ] = useCreateUserWithEmailAndPassword(auth);


    if (user || emailUser) {
        navigate('/')
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='login-form mx-auto shadow mt-5'>
                <h2>Please Sign Up</h2>
                <form className='d-flex flex-column ' onSubmit={handleSignUp}>
                    <input className='form-in' name='name' type="text" placeholder='Your Name' />
                    <input className='form-in' type="email" name="email" id="" placeholder='Your Email' required />
                    <input className='form-in' type="password" name="password" id="" placeholder='Password' required />
                    <input className='btn btn-info sub-btn' type="submit" value="Sign Up" />
                    <p className='mt-3'>Already have an account?<Link to='/login'>Login</Link> </p>
                </form>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='or-sec'></div>
                    <p className='mt-3 mx-3'>or</p>
                    <div className='or-sec'></div>
                </div>
                <button onClick={() => signInWithGoogle()} className='btn btn-warning'>GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;