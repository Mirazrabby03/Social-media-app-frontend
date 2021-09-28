import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import {loginCall} from "../../apiCalls";
import { AuthContext } from '../../context/AuthContext';
import "./login.css"

export const Login = (props) => {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick =(e)=>{
        e.preventDefault();
        loginCall({email: email.current.value, password:password.current.value}, dispatch)
    }
    console.log(user);
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
                <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <Link to ="/register" >
                <button className="loginRegisterButton">Create a New Account</button>
                </Link>
            </form>
        </div>
        </div>
    </div>
   )
  }
export default Login;