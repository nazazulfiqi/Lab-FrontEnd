import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("device")) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="form-container sign-in-container">
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
          <div className="bottom-button d-flex">
            <button className="btn-auth">Sign Up</button>
            <Link to={"/login"}>
              <button className="btn-auth create-account">Sign In</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
