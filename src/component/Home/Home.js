import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import TouristPlaces from "../TouristPlaces/TouristPlaces";
import Municipalities from "../Municipalities/Municipalities";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>

      <div className="home_flex_div">
        <div>
          <TouristPlaces></TouristPlaces>
          {/* <GoodToKnow></GoodToKnow> */}
          <Municipalities></Municipalities>
          {/* <LeaveAreply></LeaveAreply> */}
        </div>
        <div>{/* <RightSideContent></RightSideContent> */}</div>
      </div>
    </div>
  );
};

export default Home;
