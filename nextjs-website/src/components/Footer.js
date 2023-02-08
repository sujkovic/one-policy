import "./Footer.css";
import React from "react";
import header_logo from '../images/header_logo.png'
import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <a className="footer-link">About us</a>
      </div>
      <Image className="img" src={header_logo} />
      <div className="footer-container">
        <div className="footer-link">brian@onepolicy.co</div>
      </div>
    </div>
  );
}
