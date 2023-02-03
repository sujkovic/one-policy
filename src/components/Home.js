import "./Home.css";
import React from "react";
import temphomeimg from "../images/temphomeimg.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="home-main">
        <div className="home-main-text">
          <div className="home-main-text-title">
            The smarter way to buy insurance
          </div>
          <div className="home-main-text-subtitle">
            Select a product to compare quotes
          </div>
          <div className="home-main-categories">
            <div className="home-main-category">
              <div className="home-main-category-text">Life</div>
            </div>
            <div className="home-main-category">
              <div className="home-main-category-text">Home</div>
            </div>
            <div className="home-main-category">
              <div className="home-main-category-text">Auto</div>
            </div>
            <div className="home-main-category">
              <div className="home-main-category-text">Disability</div>
            </div>
            <div className="home-main-subtext">
              Don't worry, we won't share your information
            </div>
          </div>
        </div>
        <img alt="Main" className="home-main-img" src={temphomeimg}></img>
      </div>
      <div className="home-sub">
        <div className="home-sub-left">
          Compare among America's top insurers
        </div>
        <div className="home-sub-right">
          <div>Prudential</div>
          <div>A|G</div>
          <div>Nationwide</div>
          <div>Travelers</div>
          <div>Pacific Life</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
