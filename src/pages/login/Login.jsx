import React from "react";
import "./login.css";
import { Link,useNavigate } from "react-router-dom";
import login from '../../assets/login.jpg'

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="signup">
      <div className="container">
        <div className="left-container">
          <img src={login} className='login-img' />
          <h3 className='copyright'>CopyRight Reserved 2023</h3>
        </div>
        <div className="right-container">
        <span onClick={()=>navigate('/')} className='cross'>
      <i className="fa-solid fa-xmark"></i>
      </span>
          <div className="login">
            <div className="login-title">
              <h1>Welcome Back!</h1>
              <p>Login to continue</p>
            </div>
            <div className="login-input">
              <input type="email" placeholder="user@gmail.com" />
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="signbtn">
              <button>Sign In</button>
            </div>
            <h2 className='signin-signup'>
              New User? <span onClick={()=>navigate('/signup')}>Sign Up</span>
            </h2>
            <div className="login-footer">
              <h2>Terms & Conditions</h2>
              <h2>Privacy Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
