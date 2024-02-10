import React from "react";
import "./Contact.css";
import contactPhoto from "../../accets/contactPhoto/contactPhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import LeaveAreply from "../LeaveAreply/LeaveAreply";

const Contact = () => {
  return (
    <div>
      <div className="contact_grid_div">
        <div className="contact_text_div">
          <h1 className="contact_title">Contact Us Now</h1>
          <p className="contact_p">
            Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam
            invenire iracundia vim. Tn ea diam ea. Piber Korem sit amet.
          </p>
          <p className="contact_p">
            Al elit omnes impedfghit ius, vel et hinc agam fabulas. Ut audiam
            inve nire iracu ndia vim. En eam dico simi lique, ut sint posse sit,
            eum sumo diam ea. Liber consec tetuer in mei, sea in imperdiet assue
            verit contentiones, an his cibo bla ndit tacimates. Iusto iudi cabit
            simil ique id velex, in sea rebum deser uisse appntur honcus. Maece
            nas cibo blandit tacim ates sint posse.
          </p>
          <button className="contact_read_more_btn">READ MORE</button>
        </div>
        <img src={contactPhoto} alt="" />
      </div>

      {/*  */}

      <div className="contact_cart_grid_div">
        <div>
          <h2>Paris</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            numquam accusantium excepturi dignissimos.
          </p>
          <div className="contact_icon_flex_div">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>musafiraritravel@gmail.com</span>
          </div>
          <div className="contact_icon_flex_div">
            <FontAwesomeIcon icon={faPhone} />
            <span>01010111245</span>
          </div>
          <div className="contact_icon_flex_div">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Place des pyramides 7 Paris</span>
          </div>
        </div>
        <div>
          <h2>London</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            numquam accusantium excepturi dignissimos.
          </p>
          <div className="contact_icon_flex_div">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>musafiraritravel@gmail.com</span>
          </div>
          <div className="contact_icon_flex_div">
            <FontAwesomeIcon icon={faPhone} />
            <span>01010111245</span>
          </div>
          <div className="contact_icon_flex_div">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Place des pyramides 7 Paris</span>
          </div>
        </div>
        <div>
          <h2>New York</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            numquam accusantium excepturi dignissimos.
          </p>
          <div className="contact_icon_flex_div">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>musafiraritravel@gmail.com</span>
          </div>
          <div className="contact_icon_flex_div">
            <FontAwesomeIcon icon={faPhone} />
            <span>01010111245</span>
          </div>
          <div className="contact_icon_flex_div">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Place des pyramides 7 Paris</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="contact_leaveAreply_div">
        <LeaveAreply></LeaveAreply>
      </div>
    </div>
  );
};

export default Contact;
