import React from "react";
import "./Municipalities.css";

import homeGalleryOne from "../../accets/homeGallery/homeGalleryOne.png";
import homeGalleryTwo from "../../accets/homeGallery/homeGalleryTwo.png";
import homeGalleryThree from "../../accets/homeGallery/homeGalleryThree.png";
import homeGalleryFour from "../../accets/homeGallery/homeGalleryFour.png";
import homeGalleryFive from "../../accets/homeGallery/homeGalleryFive.png";
import homeGallerySix from "../../accets/homeGallery/homeGallerySix.png";

const Municipalities = () => {
  return (
    <div className="Municipalities_parent_div">
      {/* <h1 className="Municipalities_heading">Municipalities</h1> */}
      <p>
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut met us varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue.
      </p>
      <div className="Municipalities_photo_flex_div">
        {/* <img
          className="MunicipalitiesPhotoOne"
          src={MunicipalitiesPhotoOne}
          alt=""
        /> */}
        {/* <img
          className="MunicipalitiesPhotoTwo"
          src={MunicipalitiesPhotoTwo}
          alt=""
        /> */}
      </div>
      <div className="municipalitiesPhoto_grid_div">
        <img src={homeGalleryOne} alt="" />
        <img src={homeGalleryTwo} alt="" />
        <img src={homeGalleryThree} alt="" />
        <img src={homeGalleryFour} alt="" />
        <img src={homeGalleryFive} alt="" />
        <img src={homeGallerySix} alt="" />
      </div>
    </div>
  );
};

export default Municipalities;
