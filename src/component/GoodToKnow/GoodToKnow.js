import React from "react";
import "./GoodToKnow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faComment,
  faFileLines,
  faLocationDot,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const GoodToKnow = () => {
  return (
    <div className="good_to_know_parent_div">
      <h2 className="good_to_know_heading">Good to Know </h2>
      <p className="read_the_basic">
        Read the basic info and also some fun facts about Australia! Here you
        will find everything you should know about the ‘’Land of Plenty’’!
      </p>
      <div>
        <div className="good_to_know_parent_flex_div">
          <div className="good_to_know_icon_flex_div">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Country</p>
          </div>
          <p>Not Needed For EU Citizens.</p>
        </div>
        <div className="good_to_know_parent_flex_div">
          <div className="good_to_know_icon_flex_div">
            <FontAwesomeIcon icon={faFileLines} />
            <p>Visa Requirements</p>
          </div>
          <p>taiwan</p>
        </div>
        <div className="good_to_know_parent_flex_div">
          <div className="good_to_know_icon_flex_div">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Country</p>
          </div>
          <p>English</p>
        </div>
        <div className="good_to_know_parent_flex_div">
          <div className="good_to_know_icon_flex_div">
            <FontAwesomeIcon icon={faComment} />
            <p>Languages spokem</p>
          </div>
          <p>Euro</p>
        </div>
        <div className="good_to_know_parent_flex_div">
          <div className="good_to_know_icon_flex_div">
            <FontAwesomeIcon icon={faWallet} />
            <p>Currency Used</p>
          </div>
          <p>750.63 km2</p>
        </div>
        <div className="good_to_know_parent_flex_div">
          <div className="good_to_know_icon_flex_div">
            <FontAwesomeIcon icon={faClock} />
            <p>Area(km2)</p>
          </div>
          <p>taiwan</p>
        </div>
      </div>
    </div>
  );
};

export default GoodToKnow;
