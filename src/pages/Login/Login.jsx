import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = (e) => {
    setIsActive(true);
  };

  const handleSignIn = (e) => {
    setIsActive(false);
  };

  const handleHp = () => {
    localStorage.setItem("device", "hp");
  };
  return (
    <div className="wrapper-login">
      <div
        className={
          isActive
            ? "container container-login right-panel-active"
            : "container container-login"
        }
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#" className="form-auth">
            <h1 className="fw-bold">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social link-auth">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social link-auth">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social link-auth">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="sub-auth">or use your email for registration</span>
            <input className="input-auth" type="text" placeholder="Name" />
            <input className="input-auth" type="email" placeholder="Email" />
            <input
              className="input-auth"
              type="password"
              placeholder="Password"
            />
            <button className="btn-auth">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" className="form-auth">
            <h1 className="fw-bold">Sign In</h1>
            <div className="social-container">
              <a href="#" className="social link-auth">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social link-auth">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social link-auth">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="sub-auth">or use your account</span>
            <input className="input-auth" type="email" placeholder="Email" />
            <input
              className="input-auth"
              type="password"
              placeholder="Password"
            />

            <a href="#" className="link-auth">
              Forgot your password?
            </a>

            <div className="bottom-button d-flex">
              <button className="btn-auth">Sign In</button>

              <Link to={"/register"}>
                <button className="btn-auth create-account" onClick={handleHp}>
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left overlay-register">
              <img src="assets/images/logowhite.svg" alt="" />
              <p className="text-auth">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost btn-auth"
                id="signIn"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right overlay-login">
              <img src="assets/images/logowhite.svg" alt="" />

              <p className="text-auth">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost btn-auth"
                id="signUp"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
