import React from "react";
import "./TouristPlaces.css";
import TouristPlacesPhotoOne from "../../accets/touristPlacePhoto/touristPlacePhotoOne.jpg";
import TouristPlacesPhotoTwo from "../../accets/touristPlacePhoto/touristPlacePhotoTwo.jpg";

const TouristPlaces = () => {
  return (
    <div className="touristPlaces_parent_div">
      <h1 className="country_text">
        Welcome to Musafir Air Travels – Your Premier Travel Companion
      </h1>
      <p className="tourist_text_p">
        Embark on a journey of discovery, adventure, and spiritual fulfillment
        with Musafir Air Travels. As your trusted travel agency, we're dedicated
        to providing unparalleled service and unforgettable experiences to
        travelers from Bangladesh and beyond.
      </p>
      <p className="tourist_text_p">
        Discover the world with ease through our comprehensive range of travel
        services. From booking flights to securing accommodations, arranging
        transportation, and crafting bespoke tour packages, we handle every
        aspect of your journey with precision and care.
      </p>
      <p className="tourist_text_p">
        Explore the beauty and culture of Bangladesh with our local tour
        packages, offering immersive experiences and insider insights into this
        vibrant nation. Whether you're wandering through bustling markets,
        exploring ancient landmarks, or savoring the flavors of local cuisine,
        our expertly curated itineraries promise to showcase the best of
        Bangladesh.
      </p>
      <p className="tourist_text_p">
        Venture beyond borders with our international tour packages, designed to
        take you on unforgettable adventures around the globe. From the iconic
        landmarks of Europe to the exotic landscapes of Southeast Asia, our
        diverse selection of destinations ensures that every traveler finds
        their perfect getaway.
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
        Experience the convenience and comfort of our car rental services,
        whether you're navigating the streets of Dhaka or embarking on a road
        trip abroad. With our extensive fleet of vehicles and hassle-free
        booking process, getting around has never been easier.
      </p>
      <p className="tourist_text_p">
        For those embarking on the sacred journey of Hajj or Umrah, Musafir Air
        Travels offers affordable packages that provide peace of mind and
        spiritual fulfillment. Trust us to handle all the details, allowing you
        to focus on the spiritual significance of your pilgrimage.
      </p>
      <p className="tourist_text_p">
        At Musafir Air Travels, our commitment to excellence extends beyond mere
        travel arrangements – it's about creating unforgettable memories and
        fostering lifelong connections. With our dedicated team of travel
        experts and unwavering dedication to customer satisfaction, we're here
        to turn your travel dreams into reality.
      </p>
      <p className="tourist_text_p">
        Start your journey with Musafir Air Travels today and experience the
        world like never before. Your adventure awaits – let's make it
        extraordinary together.
      </p>
    </div>
  );
};

export default TouristPlaces;
