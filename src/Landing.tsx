import React from "react";
import "./Landing.scss";
import logo from "./logo.svg";
import pablo from "./pablo-sign-in.svg";

function Landing() {
  return (
    <div className="position-relative">
        <nav className="w-100 pt-5 ps-5 py-2 me-2 d-inline-block position-absolute">
            <a href="" className="navbar-brand">
                <img src={logo} alt="logo" />
            </a>
        </nav>
        <div className="container-fluid">
            <div className="row vh-100 align-items-center">
                <div className="col-md-6">
                    <img src={pablo} alt="pablo" className="image-fluid w-100" />
                </div>
                <div className="col-md-6">
                    <div className="form-wrapper px-2">
                        <h1 className="text-info">Welcome!</h1>
                        <p className="mt-2 text-secondary">Enter details to login.</p>
                        <form className="mt-5">
                            <div className="form-group mb-3">
                                <input 
                                    type="email" 
                                    className="form-control bg-light"
                                    name="email"
                                    placeholder="Email" 
                                />
                                <small className="error-message text-danger"></small>
                            </div>
                            <div className="form-group mb-3">
                                <div className="password-field position-relative">
                                    <input 
                                        type="password" 
                                        className="form-control bg-light"
                                        name="password"
                                        placeholder="Password" 
                                    />
                                    <button 
                                        className="btn btn-link text-decoration-none position-absolute fw-bold text-info" 
                                        type="button">
                                            SHOW
                                    </button>
                                </div>
                                <small className="error-message text-danger"></small>
                            </div>
                            <div className="mt-3 forgot-btn d-flex">
                                <a className="btn-ref btn-link text-decoration-none">FORGOT PASSWORD?</a>
                                <a className="btn-ref btn-link text-decoration-none">SIGN UP</a>
                            </div>
                            <button
                                className="btn btn-primary btn-block mt-3 d-inline-flex sub bg-info border-info align-items-center rounded-2 px-3 w-100"
                                type="submit"
                            >
                                LOG IN</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
      <span></span>
      <span></span>
    </div>
  );
}

export default Landing;
