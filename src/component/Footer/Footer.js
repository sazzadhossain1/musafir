import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import musafirAirTravelLogo from "../../accets/MusafirAirTravelsLogo.png";

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

        <div>
          <h3 className="our_recent_posts">Our Recent Posts</h3>
          <div>
            <small> Lorem ipsum dolor sit amet.</small>
            <br />
            <small>september 7, 2024</small>
          </div>
          <div>
            <small> Lorem ipsum dolor sit amet.</small>
            <br />
            <small>september 7, 2024</small>
          </div>
          <div>
            <small> Lorem ipsum dolor sit amet.</small>
            <br />
            <small>september 7, 2024</small>
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
          <p className="Aliquam_lorem">
            Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus.
            Phasellus null
          </p>
        </div>
      </div>
      <span className="footer_qode">
        Musafir Air Travels © All rights reserved 2024
      </span>
    </div>
  );
};

export default Footer;
