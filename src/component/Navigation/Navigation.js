import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhoneFlip,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import musafirAirTravelLogoTwo from "../../accets/musafirAirTravelLogoTwo.png";

const Navigation = () => {
  let [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navigation_main_parent_div">
      {/* Navigaton Login Part Site */}
      <div className="navigation_second_parent_div">
        <div className="navigation_parent_div">
          <div className="navigation_email_div">
            <div className="icon_div">
              <FontAwesomeIcon
                className="nav_envelope_icon"
                icon={faEnvelope}
              />
              <small className="hover"> musafirairtravels1@gmail.com</small>
            </div>

            <div className="icon_div">
              <FontAwesomeIcon className="nav_phone_icon" icon={faPhoneFlip} />
              <small className="hover">+880 1717-055-201</small>
            </div>
            {/* <div className="icon_div">
              <FontAwesomeIcon
                className="nav_location_icon"
                icon={faLocationDot}
              />
              <small className="hover">Location-Address</small>
            </div> */}
          </div>

          <div className="navigation_login_signUp_div">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />

            {/* <Link to="/login">
              <button className="nav_btn">
                <Link to="/login">Login</Link>
              </button>
            </Link>

            <Link to="/signUp">
              <button className="nav_btn">Sign up</button>
            </Link> */}
          </div>
        </div>
      </div>

      {/*  Navigation Menu Part Site*/}

      <div className="nav_menu_main_parent_div">
        <div className="nav_menu_parent_div">
          <div>
            {/* <h1 className="musafir_title">Musafir Air Travels</h1> */}

            <img
              className="MusafirAirTravelsLogoTwo"
              src={musafirAirTravelLogoTwo}
              alt=""
            />
          </div>
          <div onClick={handleClick} className="menu_icons">
            {state.clicked ? (
              <FontAwesomeIcon className="fa_bars" icon={faTimes} />
            ) : (
              <FontAwesomeIcon className="fa_bars" icon={faBars} />
            )}
          </div>
          <ul className={state.clicked ? "unOrderLink active" : "unOrderLink"}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/Airtickets">Air Tickets</Link>
            </li>
            <li>
              <Link to="/hotels">Hotels </Link>
            </li>
            <li>
              <Link to="/tourpackages">Tour Packages</Link>
            </li>
            <li>
              <Link to="/visaService">Visa Service</Link>
            </li>
            <li>
              <Link to="/hajjUmrah">Hajj/Umrah</Link>
            </li>
            <li>
              <Link to="#" onClick={scrollToFooter}>
                Contact
              </Link>
            </li>
            {/* <li>
              <Link className="login" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="signUP" to="/signUp">
                Sign up
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
