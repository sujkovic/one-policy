import "./Header.css";
import React from "react";
const Header = (props) => {
  return (
    <header>
      <div className="header-left">
        <div className="header-logo">One Policy</div>
        <div className="header-left-nav">
          <span className="header-left-item">Life</span>
          <span className="header-left-item">Home</span>
          <span className="header-left-item">Auto</span>
          <span className="header-left-item">Disability</span>
        </div>
      </div>
      <div className="header-right">
        <div className="about-us-header header-left-item">About us</div>
        <button className="signup-button">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
