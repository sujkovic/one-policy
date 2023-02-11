import "./Footer.css";
import React from "react";
import header_logo from "../../../assets/header_logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <Link href="/about" className="about">About us</Link>
      </div>
      <Image alt="logo" className="img" src={header_logo} />
      <div className="footer-container">
        <div className="footer-link">team@onepolicy.co</div>
      </div>
    </div>
  );
}
