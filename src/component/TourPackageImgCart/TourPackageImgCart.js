import React from "react";
import "./TourPackageImgCart.css";
import tourPackageImgOne from "../../accets/tourPackageImg/tourPackageImgOne.jpg";
import tourPackageImgTwo from "../../accets/tourPackageImg/tourPackageImgTwo.jpg";
import tourPackageImgThree from "../../accets/tourPackageImg/tourPackageImgThree.jpg";

const TourPackageImgCart = () => {
  return (
    <div className="tourPackageImg_parent_div">
      <div className="tourPackageImgCart_parent_grid_div">
        <div className="tourPackageImgCart_cart_div_one">
          <h1>Italy Tour</h1>
          <p>$2560</p>
        </div>
        <div className="tourPackageImgCart_cart_div_two">
          <h1>Italy Tour</h1>
          <p>$2560</p>
        </div>
        <div className="tourPackageImgCart_cart_div_three">
          <h1>Italy Tour</h1>
          <p>$2560</p>
        </div>
      </div>
    </div>
  );
};

export default TourPackageImgCart;
