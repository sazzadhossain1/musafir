import React from "react";
import "./AboutMe.css";
import aboutMePhoto from "../../accets/aboutMePhoto/aboutMePhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <div className="about_me_parent_div">
      <div className="join">
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn join-item search_btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div>
        <h3 className="aboutMe_heading">About Me</h3>
        <img src={aboutMePhoto} alt="" />
        <p className="about_me_photo_text">
          Lorem ipsum dolor sit ametco sec tetuisc ing elit. In ut ullamc orper
          li eget euism tellus eget
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
