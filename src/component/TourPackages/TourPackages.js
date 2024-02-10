import React from "react";
import "./TourPackages.css";
import tourPackageCartPhotoOne from "../../accets/touristPlacePhoto/tourPackageCartPhoto/tourPackageCartPhotoOne.jpg";
import tourPackageCartPhotoTwo from "../../accets/touristPlacePhoto/tourPackageCartPhoto/tourPackageCartPhotoTwo.jpg";
import tourPackageCartPhotoThree from "../../accets/touristPlacePhoto/tourPackageCartPhoto/tourPackageCartPhotoThree.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faLocationDot,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import TourPackageImgCart from "../TourPackageImgCart/TourPackageImgCart";

const TourPackages = () => {
  return (
    <div className="tourPackages_main_parent_div">
      <div className="tourPackages_parent_div">
        <h1>Tour Packages</h1>
      </div>

      <div className="tourPackage_greed_cart_div">
        <div className="tourPackage_main_cart">
          <img src={tourPackageCartPhotoOne} alt="" />
          <div className="tourPackage_cart_flex_div">
            <div>
              <FontAwesomeIcon icon={faBagShopping} />
              <span>1</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <span>13+</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Skiing</span>
            </div>
          </div>
          <div className="tourPackage_cart_body_part">
            <h2>Active Winter</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, molestias iure.
            </p>

            <div className="tourPackage_cart_footer_div">
              <p>$ 3600</p>
              <div>
                <FontAwesomeIcon icon={faStar} /> &nbsp;
                <span>7.3</span>
              </div>
              <p>superb</p>
            </div>
          </div>
        </div>
        <div className="tourPackage_main_cart">
          <img src={tourPackageCartPhotoTwo} alt="" />
          <div className="tourPackage_cart_flex_div">
            <div>
              <FontAwesomeIcon icon={faBagShopping} />
              <span>1</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <span>13+</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Skiing</span>
            </div>
          </div>
          <div className="tourPackage_cart_body_part">
            <h2>Active Winter</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, molestias iure.
            </p>

            <div className="tourPackage_cart_footer_div">
              <p>$ 3600</p>
              <div>
                <FontAwesomeIcon icon={faStar} /> &nbsp;
                <span>7.3</span>
              </div>
              <p>superb</p>
            </div>
          </div>
        </div>
        <div className="tourPackage_main_cart">
          <img src={tourPackageCartPhotoThree} alt="" />
          <div className="tourPackage_cart_flex_div">
            <div>
              <FontAwesomeIcon icon={faBagShopping} />
              <span>1</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <span>13+</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Skiing</span>
            </div>
          </div>
          <div className="tourPackage_cart_body_part">
            <h2>Active Winter</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, molestias iure.
            </p>

            <div className="tourPackage_cart_footer_div">
              <p>$ 3600</p>
              <div>
                <FontAwesomeIcon icon={faStar} /> &nbsp;
                <span>7.3</span>
              </div>
              <p>superb</p>
            </div>
          </div>
        </div>
      </div>

      <TourPackageImgCart></TourPackageImgCart>
    </div>
  );
};

export default TourPackages;
