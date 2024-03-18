import React from "react";
import "./Hotels.css";
import HotelsWelcomePhoto from "../../accets/hotelsPhotos/HotelsWelcomePhoto.png";
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

      <div>
        <p className="welcome_to_musafir">
          Welcome to Musafir Air Travels Hotel Packages – your passport to
          unparalleled comfort and luxury around the globe!
        </p>
        <div className="hotels_text_img_grid_div">
          <div className="hotels_text_div">
            <p className="hotels_text_p">
              Indulge in a world of exquisite accommodations with Musafir Air
              Travels. From vibrant city centers to tranquil beachfront
              retreats, our curated selection of hotels offers something for
              every traveler's taste and budget.
            </p>
            <p className="hotels_text_p">
              With exclusive partnerships with top hotel chains and boutique
              properties worldwide, we guarantee unbeatable rates and
              exceptional value on every booking. Whether you're seeking a
              lavish five-star experience or a cozy boutique hideaway, our
              diverse range of hotel packages ensures that your stay is nothing
              short of extraordinary.
            </p>
            <p className="hotels_text_p">
              At Musafir Air Travels, we understand that the perfect hotel is
              more than just a place to rest your head – it's an integral part
              of your travel experience. That's why our team of dedicated travel
              experts is committed to finding the ideal accommodation that
              exceeds your expectations and fits seamlessly into your travel
              plans.
            </p>
          </div>
          <div>
            <img
              className="hotelsBannerPhoto"
              src={HotelsWelcomePhoto}
              alt=""
            />
          </div>
        </div>
        <div className="at_musafir_text-div">
          <p className="hotels_text_lst_p">
            Experience the epitome of hospitality with Musafir Air Travels Hotel
            Packages. Book now and unlock exclusive deals and discounts on
            hotels worldwide. Your dream getaway awaits – let us be your guide
            to unforgettable experiences and cherished memories.
          </p>
        </div>
      </div>

      <div className="tourPackage_greed_cart_div">
        <div className="tourPackage_main_cart">
          <img className="hotels_cart_img" src={HotelsWelcomePhoto} alt="" />
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
