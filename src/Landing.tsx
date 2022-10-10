import React from "react";
import "./Landing.scss";
import logo from "./logo.svg";
import pablo from "./pablo-sign-in.svg";

function Landing() {
  return (
    <div className="container-fluid">
      <nav className="row">
        <a href="">
          <img src={logo} alt="logo" />
        </a>
      </nav>
    <div className="row align-items-center">
        <div className="col-md-6 align-self-center">
            <img src={pablo} alt="pablo" className="image-fluid w-100" />
        </div>
        <div className="col-md-6 align-self-center">
            <div>
                <h1 className="">Welcome!</h1>
                <p className="mt-2">Enter details to login.</p>
                <form className="mt-5">
                    <div className="form-group mb-3">
                        <input 
                            type="email" 
                            className="form-control bg-light"
                            name="email"
                            placeholder="email" 
                        />
                        <small className="error-message text-danger"></small>
                    </div>
                    <div className="form-group mb-3">
                        <div className="password-field">
                            <input 
                                type="password" 
                                className="form-control bg-light"
                                name="password"
                                placeholder="password" 
                            />
                            <button 
                                className="btn btn-link" 
                                type="button">
                                    SHOW
                            </button>
                        </div>
                        <small className="error-message text-danger"></small>
                    </div>
                    <div>
                        <span>FORGOT PASSWORD?</span>
                        <span>SIGN UP</span>
                    </div>
                    <button
                        className="btn btn-primary btn-lg"
                    >
                        LOGIN</button>
                    </form>
            </div>
        </div>
    </div>
      <span></span>
      <span></span>
    </div>
  );
}

export default Landing;
