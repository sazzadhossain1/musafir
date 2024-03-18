import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import musafirAirTravelLogo from "../../accets/MusafirAirTravelsLogo.png";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer_paren_div">
      <div className="footer_parent_grid_div">
        <div>
          <h2 className="musafir_title">Musafir Air Travels</h2>
          {/* <img
            className="musafirAirTravelLogo"
            src={musafirAirTravelLogo}
            alt=""
          /> */}
          <p className="footer_lorem">Address</p>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>musafirairtravels1@gmail.com</span>
          </div>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>musafirairtravels@yahoo.com</span>
          </div>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faPhone} />
            <span>+880 1717-055-201</span>
          </div>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faLocationDot} />
            <div>
              <span>House # 83/2-A (2nd Floor)</span>
              <span>Matikata Main Road</span>
              <span>Dhaka Cant, Dhaka-1206</span>
            </div>
          </div>
        </div>

        <div className="footer_siteMap_parent_div">
          <h3 className="our_recent_posts">SiteMap</h3>
          <div className="footer_navigation_menue_div">
            <Link to="/airTickets" className="footer_navigation_menu">
              Air Tickets
            </Link>
            <br />
            <Link to="/hotels" className="footer_navigation_menu">
              Hotels
            </Link>
            <br />
            <Link to="/tourPackages" className="footer_navigation_menu">
              Tour Packages
            </Link>
            <br />
            <Link to="/visaService" className="footer_navigation_menu">
              Visa Service
            </Link>
            <br />
            <Link to="/hajjUmrah" className="footer_navigation_menu">
              Hajj/Umrah
            </Link>
          </div>
        </div>
        {/* <div>
          <h3 className="footer_subscribe_to">Subscribe to our Newsletter</h3>
          <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
          <input className="footer_input_name" type="name" placeholder="Name" />
          <input
            className="footer_input_email"
            type="email"
            placeholder="Email"
          />
          <br />
          <button className="footer_subscribe_btn">Subscribe</button>
        </div> */}
        <div>
          <h3 className="ourInstagram">Social Handles</h3>
          <div className="Aliquam_lorem">
            <FontAwesomeIcon className="social_media" icon={faFacebook} />
            <FontAwesomeIcon
              className="social_media_instagram"
              icon={faInstagram}
            />
          </div>
        </div>
      </div>
      <span className="footer_qode">
        Musafir Air Travels © All rights reserved 2024
      </span>
    </div>
  );
};

export default Footer;
