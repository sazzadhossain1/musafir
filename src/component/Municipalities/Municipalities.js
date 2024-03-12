import React from "react";
import "./Municipalities.css";
import MunicipalitiesPhotoOne from "../../accets/municipalities/MunicipalitiesPhotoOne.jpg";
import MunicipalitiesPhotoTwo from "../../accets/municipalities/MunicipalitiesPhotoTwo.jpg";
import MunicipalitiesPhotoThree from "../../accets/municipalities/MunicipalitiesPhotoThree.jpg";
import MunicipalitiesPhotoFour from "../../accets/municipalities/MunicipalitiesPhotoFour.jpg";
import MunicipalitiesPhotoFive from "../../accets/municipalities/MunicipalitiesPhotoFive.jpg";

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
        <img
          className="MunicipalitiesPhotoOne"
          src={MunicipalitiesPhotoOne}
          alt=""
        />
        <img
          className="MunicipalitiesPhotoTwo"
          src={MunicipalitiesPhotoTwo}
          alt=""
        />
      </div>
      <div className="municipalitiesPhoto_grid_div">
        <img src={MunicipalitiesPhotoThree} alt="" />
        <img src={MunicipalitiesPhotoFour} alt="" />
        <img src={MunicipalitiesPhotoFive} alt="" />
      </div>
    </div>
  );
};

export default Municipalities;
