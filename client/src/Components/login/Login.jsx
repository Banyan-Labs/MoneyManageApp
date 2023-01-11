import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="l-div">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="logo-name">Money Managed</div>

      <div className="inner-login-div">
        <br />
        <p>Sign In</p>
        <br />
        <input type="text" className="login-username" />
        <h5>Not Registered?</h5>
        <br />
        <input type="text" className="login-password" />
        <br />
        <br />
        <br />
        <button className="button">Login</button>
        <h6>Forgot Password?</h6>
        <br />
      </div>
    </div>
  );
};

export default Login;
