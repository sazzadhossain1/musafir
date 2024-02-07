import React from "react";
import "./TouristPlaces.css";
import TouristPlacesPhotoOne from "../../accets/touristPlacePhoto/touristPlacePhotoOne.jpg";
import TouristPlacesPhotoTwo from "../../accets/touristPlacePhoto/touristPlacePhotoTwo.jpg";

const TouristPlaces = () => {
  return (
    <div className="touristPlaces_parent_div">
      <h1 className="country_text">Italy</h1>
      <p className="tourist_text_p">
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laore etiam. Quisque rutrum.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi. Nam eget dui. Etiam rhon cus. Maecenas tempus, tellus
        eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
        sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
        hendrerit id, lorem. Maecenas nec odio et ante tincidunt tem pus. Donec
        vitae sapien ut libero venenatis faucibus lore.
      </p>

      <div className="touristPlacesPhoto_grid_div">
        <img
          className="touristPlacesPhoto"
          src={TouristPlacesPhotoOne}
          alt=""
        />
        <img
          className="touristPlacesPhoto"
          src={TouristPlacesPhotoTwo}
          alt=""
        />
      </div>
      <p className="tourist_text_p">
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laore etiam. Quisque rutrum.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi. Nam eget dui. Etiam rhon cus. Maecenas tempus, tellus
        eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
        sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
        hendrerit id, lorem. Maecenas nec odio et ante tincidunt tem pus. Donec
        vitae sapien ut libero venenatis faucibus. Null am quis ante. Etiam sit
        amet orci eget eros faucibus tincidu. Duis leo. Sed fringilla mauris sit
        amet nib. Lore ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod te mpor incididunt ut labore et dolorem magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco labo ris nisi ut aliqui
        ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in
        voluptate velit esse cillum.
      </p>
    </div>
  );
};

export default TouristPlaces;
