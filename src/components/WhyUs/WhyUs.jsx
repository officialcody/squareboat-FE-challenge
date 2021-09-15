import React from 'react';
import Card from '../Card/Card';
import {
  goldline,
  ideaa,
  kanba,
  lightai,
  liva,
  solaytic,
  velocity9,
  ztos,
} from '../../images';

import './WhyUs.css';

const WhyUs = () => {
  return (
  <>
    <div className="container-fluid pt-5 pb-5 why-us-container">
      <div className="row justify-content-center">
        <div className="col mt-5 ms-5">
          <p className="why-us-title">Why Us</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col col-sm-12 col-md-8 col-lg-3">
          <Card title="Get more visibility" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-3">
          <Card title="Organize your candidates" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-3">
          <Card title="Verify their abilities" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col mt-5 ms-5">
          <p className="why-us-title">Companies Who Trust Us</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col col-sm-12 col-md-8 col-lg-2 ms-5">
          <div className="img-logo-container">
            <img className="img-logo" src={solaytic} alt="" />
          </div>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-2">
          <div className="img-logo-container">
            <img className="img-logo" src={kanba} alt="" />
          </div>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-2">
          <div className="img-logo-container">
            <img className="img-logo" src={lightai} alt="" />
          </div>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-2">
          <div className="img-logo-container">
            <img className="img-logo" src={ztos} alt="" />
          </div>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-2">
          <div className="img-logo-container">
            <img className="img-logo" src={kanba} alt="" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col col-sm-12 col-md-8 col-lg-2 ms-5">
          <div className="img-logo-container">
            <img className="img-logo" src={goldline} alt="" />
          </div>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-2">
          <div className="img-logo-container">
            <img className="img-logo" src={ideaa} alt="" />
          </div>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-2">
          <div className="img-logo-container">
            <img className="img-logo" src={liva} alt="" />
          </div>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-2">
          <div className="img-logo-container">
            <img className="img-logo" src={velocity9} alt="" />
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default WhyUs;
