import React from "react";
import "./HeroSection.css";
import heroPhoto from "../../accets/heorPhoto.jpg";

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
/*
 * We work hard to make your flight pleasant.
 * Great service. Great value. Great flying.
 * Welcome Aboard
 * Feel the miles.
 * We make flying pleasurable.
 * Travel made simple
 * Have a good flight!
 * We're here for you.
 * Go where you want to go.
 */
