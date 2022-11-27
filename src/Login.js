import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo2 from './logo2.png'
import './Login.css'
import {auth} from './firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
     e.preventDefault();
     //login
    signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
        //logged in , redirect to home
        navigate("/");
        
    }

    )
    .catch(e => alert(e.message))
     
  }

  const register = (e) => {
    e.preventDefault();
    //register
    createUserWithEmailAndPassword(auth,email, password)
    .then((auth) => {
        //create a user and logged in , redirect to home

        navigate("/");
    })
    .catch(e => alert(e.message))
  }

  return (
    <div className='login'>
      <Link to="/">
        <img className='login__logo'
        src={logo2}
        />
      </Link>
    
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
            <h5>E-mail</h5><input value={email} onChange={event => setEmail(event.target.value)} type="text" />
            <h5>Password</h5><input value={password} onChange={event => setPassword(event.target.value)} type="password" />
            <button onClick={login} className='login__signInButton'>Sign In</button>
        </form>
        <p>
        By continuing, you agree to Amazon's 
        Conditions of Use and Privacy Notice.
        </p>
        <button onClick={register} className='login__createAccountButton'>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
