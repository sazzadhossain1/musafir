import React from "react";
import "./TourPackages.css";

import tourPackageCartPhotoOne from "../../accets/touristPlacePhoto/tourPackageCartPhoto/tourPackageCartPhotoOne.jpg";
import tourPackageCartPhotoTwo from "../../accets/touristPlacePhoto/tourPackageCartPhoto/tourPackageCartPhotoTwo.jpg";
import tourPackageCartPhotoThree from "../../accets/touristPlacePhoto/tourPackageCartPhoto/tourPackageCartPhotoThree.jpg";
import hotelsBannerPhoto from "../../accets/hotelsPhotos/hotelsBannerPhoto.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faLocationDot,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import TourPackageImgCart from "../TourPackageImgCart/TourPackageImgCart";

import tourPackagePhotoOne from "../../accets/tourPackage/tourPackagePhotoOne.png";
import tourPackagePhotoTwo from "../../accets/tourPackage/tourPackagePhotoTwo.png";
import tourPackagePhotoThree from "../../accets/tourPackage/tourPackagePhotoThree.png";
import tourPackagePhotoFour from "../../accets/tourPackage/tourPackagePhotoFour.png";

const TourPackages = () => {
  return (
    <div className="tourPackages_main_parent_div">
      <div className="tourPackages_parent_div">
        <h1>Tour Packages</h1>
      </div>

      <div>
        <p className="welcome_to_musafir">
          Welcome to Musafir Air Travels Tour Packages – where unforgettable
          adventures await, both near and far!
        </p>
        <div className="hotels_text_img_grid_div">
          <div className="hotels_text_div">
            <p className="hotels_text_p">
              Embark on a journey of discovery with Musafir Air Travels as your
              trusted guide. Whether you're yearning to explore the rich
              cultural heritage of Bangladesh or venture into the far corners of
              the globe, our diverse selection of tour packages promises to
              ignite your sense of wanderlust and create lasting memories.
            </p>
            <p className="hotels_text_p">
              Discover the hidden gems of Dhaka and beyond with our curated
              selection of local tour packages. From immersive cultural
              experiences to thrilling outdoor adventures, we offer an array of
              options tailored to showcase the beauty and diversity of
              Bangladesh.
            </p>
            <p className="hotels_text_p">
              Looking to venture beyond borders? Explore the world with Musafir
              Air Travels' international tour packages. From the bustling
              streets of Bangkok to the majestic landscapes of Europe, our
              carefully crafted itineraries ensure that you experience the best
              each destination has to offer, all while enjoying the convenience
              and peace of mind that comes with booking through our trusted
              agency.
            </p>
          </div>
          <div>
            <img
              className="hotelsBannerPhoto"
              src={tourPackagePhotoOne}
              alt=""
            />
          </div>
        </div>
        <div className="at_musafir_text-div">
          <p className="hotels_text_lst_p">
            With Musafir Air Travels, every journey is an opportunity for
            adventure, exploration, and cultural immersion. Our experienced team
            of travel experts is dedicated to crafting seamless and
            unforgettable experiences that cater to your interests, preferences,
            and budget.
          </p>
          <p className="hotels_text_lst_p">
            Unlock the world with Musafir Air Travels Tour Packages. Book now
            and let us turn your travel dreams into reality. Your next great
            adventure awaits – start planning today!
          </p>
        </div>
      </div>
      <div className="tourPackage_greed_cart_div">
        <div className="tourPackage_main_cart">
          <img src={tourPackagePhotoTwo} alt="" />
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
          <img src={tourPackagePhotoThree} alt="" />
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
          <img src={tourPackagePhotoFour} alt="" />
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
