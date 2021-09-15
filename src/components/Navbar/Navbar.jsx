import React from 'react';
import { homepage } from '../../images';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-bar p-4">
        <div className="d-flex row justify-content-sm-center">
          <div className="col col-sm-12 col-md-8 col-lg-10 ms-5 title">
              My<span className="title-jobs">Jobs</span>
          </div>
          <div className="col">
            <button className="btn login-button">Login/Signup</button>
          </div>
        </div>
        <center><hr align="center" className="horizontal-rule" /></center>
      </div>
      <div className="container-fluid nav-bar p-5">
        <div className="d-flex row justify-content-sm-center">
          <div className="col col-sm-12 col-md-8 col-lg-10 offset-sm-0 offset-md-4 offset-lg-4 ms-5 heading">
              Welcome to<br/> My<span className="heading-jobs">Jobs</span>
          </div>
        </div>
        <div className="d-flex row justify-content-sm-center">
          <div className="col col-sm-12 col-md-8 col-lg-10 ms-5 heading position-relative">
              <button className="btn get-started-button">Get Started</button>
              <img className="image" src={homepage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
