import React from "react";
import "./signup.css";
import { Link,useNavigate } from "react-router-dom";
import sign from '../../assets/sign.svg'

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="signup">
      <div className="container">
      <div className="right-container">
          <div className="sign">
            <div className="sign-title">
              <h1>Create an account!</h1>
              <p>Easy to SignUp</p>
            </div>
            <div className="sign-input">
              <input type="text" placeholder="Enter username" />
              <input type="email" placeholder="user@gmail.com" />
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="signbtn">
              <button>Sign Up</button>
            </div>
            <h2 className='signin-signup'>
              Already have account? <span onClick={()=>navigate('/login')}>Sign In</span>
            </h2>
          </div>
        </div>
        <div className="left-container">
      <span onClick={()=>navigate('/')} className='cross'>
      <i className="fa-solid fa-xmark"></i>
      </span>

          <img src={sign} className='sign-img' />
        </div>
      </div>
    </div>
  );
};

export default Signup;
