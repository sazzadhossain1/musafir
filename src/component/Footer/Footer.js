import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer_paren_div">
      <div className="footer_parent_grid_div">
        <div>
          <h2 className="musafir_title">Musafir Air Travels</h2>
          <p className="footer_lorem">System</p>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>musafir@gmail.com</span>
          </div>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faPhone} />
            <span>01010101010</span>
          </div>
          <div className="footer_icon_flex_div">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Musafir Air Travels</span>
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
        <div>
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
        </div>
        <div>
          <h3 className="ourInstagram">Our Instagram</h3>
          <p className="Aliquam_lorem">
            Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus.
            Phasellus null
          </p>
        </div>
      </div>
      <span className="footer_qode">© 2024 qode interactice</span>
    </div>
  );
};

export default Footer;
