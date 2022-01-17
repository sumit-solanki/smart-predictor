import React from "react";
import logo from './smartPredictorLogo.svg';

const Header = () => {
  return (
    <div className="headerMain">
      <div className="headerInfo">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="headerLabel">Smart Predictor</div>
      </div>
      <div className="studioInfo">
        <div className="studioName">Power Fitness Studio</div>
        <div className="studioLocation">San Diego, CA</div>
      </div>
    </div>
  );
};
export default Header;
