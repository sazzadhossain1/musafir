import React from "react";
import "./CarRental.css";

import visaCartPhoto from "../../accets/visaService/visaCartPhoto.jpg";
import visaCartPhotoOne from "../../accets/visaService/visaCartPhotoOne.png";

const CarRental = () => {
  return (
    <div>
      <div className="carRental_parent_div">
        <h1>Visa Service</h1>
      </div>

      <div>
        <p className="welcome_to_musafir">
          Welcome to Musafir Air Travels Car Rental – your gateway to convenient
          and comfortable transportation, wherever your travels take you!
        </p>
        <div className="hotels_text_img_grid_div">
          <div className="hotels_text_div">
            <p className="hotels_text_p">
              Explore the world at your own pace with Musafir Air Travels'
              premium car rental services. Whether you're cruising through the
              bustling streets of Dhaka or embarking on a road trip abroad, our
              extensive fleet of vehicles ensures that you have the perfect ride
              for every journey.
            </p>
            <p className="hotels_text_p">
              Discover the freedom of exploring Bangladesh with our local car
              rental options. From compact cars ideal for navigating city
              streets to spacious SUVs perfect for family adventures, we offer a
              wide range of vehicles to suit your needs and preferences. With
              flexible rental terms and competitive rates, Musafir Air Travels
              makes it easy to hit the road and experience the beauty and
              culture of Bangladesh on your terms.
            </p>
            <p className="hotels_text_p">
              Planning an international getaway? Let Musafir Air Travels be your
              trusted companion with our international car rental services.
              Whether you're traversing the scenic landscapes of Europe or
              embarking on a cross-country road trip in the USA, our global
              network of partners ensures that you have access to reliable and
              affordable transportation wherever you go.
            </p>
          </div>
          <div>
            <img className="hotelsBannerPhoto" src={visaCartPhotoOne} alt="" />
          </div>
        </div>
        <div className="at_musafir_text-div">
          <p className="hotels_text_lst_p">
            At Musafir Air Travels, we prioritize your comfort, safety, and
            convenience. With our hassle-free booking process and attentive
            customer service, renting a car has never been easier. Plus, with
            our comprehensive insurance coverage and 24/7 roadside assistance,
            you can travel with peace of mind knowing that we've got you covered
            every step of the way.
          </p>
          <p className="hotels_text_lst_p">
            Unlock the freedom of the open road with Musafir Air Travels Car
            Rental. Book now and embark on your next adventure with confidence.
            Your journey awaits – start exploring today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarRental;
