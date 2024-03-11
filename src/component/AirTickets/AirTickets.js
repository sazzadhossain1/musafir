import React from "react";
import "./AirTickets.css";
import airBannerPhoto from "../../accets/airTicketsPhoto/airBannreHoto/airBannrePhoto.jpg";

const AirTickets = () => {
  return (
    <div>
      <div className="airTicket_parent_div">
        <h1>Air Tickets</h1>
      </div>

      <div>
        <p className="welcome_to_airTicket">
          Welcome to Musafir Air Travels, your gateway to seamless journeys and
          unforgettable adventures!
        </p>
        <div className="airTicket_text_img_grid_div">
          <div className="airTicket_text_div">
            <p className="airTicket_text_p">
              At Musafir Air Travels, we understand that travel is more than
              just reaching a destination; it's about embarking on a journey
              filled with excitement, discovery, and cherished memories. As
              Dhaka's premier travel agency, we take pride in offering
              personalized service, unbeatable deals, and unparalleled expertise
              to our valued customers.
            </p>
            <p className="airTicket_text_p">
              Whether you're planning a quick getaway, a family vacation, or a
              business trip, our dedicated team of travel experts is here to
              turn your travel dreams into reality. With access to a vast
              network of airlines, hotels, and tour operators, we ensure that
              you have access to the best deals and exclusive offers tailored to
              your needs and preferences.
            </p>
            <p className="airTicket_text_p">
              From booking flights to securing accommodations and arranging
              transportation, we handle every aspect of your travel experience
              with precision and care. With Musafir Air Travels, you can travel
              with confidence, knowing that you have a trusted partner by your
              side every step of the way.
            </p>
          </div>
          <div>
            <img className="hotelsBannerPhoto" src={airBannerPhoto} alt="" />
          </div>
        </div>
        <div className="Discover_text-div">
          <p className="hotels_text_lst_p">
            Discover the world with Musafir Air Travels and let us be your guide
            to extraordinary experiences. Book your next adventure with us today
            and embark on a journey of a lifetime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AirTickets;
