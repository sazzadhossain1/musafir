import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero_section_parent_div">
      {/* <img src={heroPhoto} alt="" /> */}
      <div className="hero_text_div">
        {/* <p className="destination">Destinations</p> */}
        <h1 className="italy">
          Enjoy seamless journeys & unforgettable adventures!
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
