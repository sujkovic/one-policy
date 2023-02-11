import "./Header.css";
import React from "react";
import Link from "next/link";
import transp_logo from '../../../assets/transp_logo.png'
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <Link href="/" className="header-logo">
          <Image alt="small-logo" src={transp_logo} className="logo" />  
          nePolicy
        </Link>
      </div>
      <div className="header-right">
        <Link href="/about" className="about-us-header header-left-item">About us</Link>
        <Link href="/signup" className="signup-button">Sign up</Link>
      </div>
    </header>
  );
}