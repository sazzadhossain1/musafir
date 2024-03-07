import React from "react";
import "./Hotels.css";

import tourPackageCartPhotoThree from "../../accets/touristPlacePhoto/tourPackageCartPhoto/tourPackageCartPhotoThree.jpg";

import hotelsBannerPhoto from "../../accets/hotelsPhotos/hotelsBannerPhoto.jpg";
import hotelsCartPhotoOne from "../../accets/hotelsPhotos/New folder/hotelsCartPhotoOne.jpg";
import hotelsCartPhotoTwo from "../../accets/hotelsPhotos/New folder/hotelsCartPhotoTwo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faLocationDot,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HotelImgCart from "../HotelImgCart/HotelImgCart";

const Hotels = () => {
  return (
    <div className="tourPackages_main_parent_div">
      <div className="hotels_parent_div">
        <h1>Hotels</h1>
      </div>

      <div className="tourPackage_greed_cart_div">
        <div className="tourPackage_main_cart">
          <img className="hotels_cart_img" src={hotelsBannerPhoto} alt="" />
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
          <img className="hotels_cart_img" src={hotelsCartPhotoOne} alt="" />
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
          <img className="hotels_cart_img" src={hotelsCartPhotoTwo} alt="" />
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
      <HotelImgCart></HotelImgCart>
    </div>
  );
};

export default Hotels;
