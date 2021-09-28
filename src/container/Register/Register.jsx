import React, { useRef } from 'react';
import axiosInstance from '../../axios'
import {useHistory} from 'react-router'
import {Link} from 'react-router-dom';

import "./register.css"

export const Register = (props) => {
    const username = useRef();
    const email = useRef();
    const password= useRef();
    const confirmPassword = useRef();
    const history = useHistory();

    const handleClick= async(e)=>{
        e.preventDefault();
        if(confirmPassword.current.value !== password.current.value){
            confirmPassword.current.setCustomValidity("Passwords didn't match!")
        } else{
            const user ={
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
                await axiosInstance.post("/auth/register", user);
                history.push("/login")
            }
            catch(err){
                console.log(err)
            }
            
        }
    }
  return(
    <div className="login">
        <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">MemeVerse</h3>
            <span className="loginDesc">
                Share memes with your friends on MemeVerse
            </span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Username" required ref={username} className="loginInput" />
                <input placeholder="Email" required type="email"  ref={email} className="loginInput" />
                <input placeholder="Password" required type="password" minLength="6" ref={password} className="loginInput" />
                <input placeholder="ConfirmPassword" required type="password"  ref={confirmPassword} className="loginInput" />
                <button className="loginButton" type="submit">Sign Up</button>
                <Link to="/login">
                <button className="loginRegisterButton">Log into Account</button>
                </Link>
            </form>
        </div>
        </div>
    </div>
   )
  }

export default Register;