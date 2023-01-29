import "./Header.css";
import React from "react";
const Header = (props) => {
  return (
    <header>
      <div className="header-left">
        <div className="header-logo">One Policy</div>
        <div className="header-left-nav">
          <span>Life</span>
          <span>Home</span>
          <span>Auto</span>
          <span>Disability</span>
        </div>
      </div>
      <div className="header-right">
        <div className="about-us-header">About us</div>
        <button>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
