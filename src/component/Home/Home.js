import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection/HeroSection";
import TouristPlaces from "../TouristPlaces/TouristPlaces";
import RightSideContent from "../RightSideContent/RightSideContent";
import GoodToKnow from "../GoodToKnow/GoodToKnow";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>

      <div className="home_flex_div">
        <div>
          <TouristPlaces></TouristPlaces>
          <GoodToKnow></GoodToKnow>
        </div>
        <div>
          <RightSideContent></RightSideContent>
        </div>
      </div>
    </div>
  );
};

export default Home;
