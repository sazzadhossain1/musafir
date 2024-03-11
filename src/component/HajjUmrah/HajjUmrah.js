import React from "react";
import "./HajjUmrah.css";
import hajjUmrahBanner from "../../accets/hajjUmrah/hajjUmrahBanner.jpg";

const HajjUmrah = () => {
  return (
    <div>
      <div className="hajjUmrah_parent_div">
        <h1>Hajj / Umrah</h1>
      </div>

      <div>
        <p className="welcome_to_musafir">
          Welcome to Musafir Air Travels' Hajj/Umrah Packages – your trusted
          partner on the sacred journey to Mecca and Medina.
        </p>
        <div className="hotels_text_img_grid_div">
          <div className="hotels_text_div">
            <p className="hotels_text_p">
              At Musafir Air Travels, we understand the profound significance of
              Hajj and Umrah pilgrimages for Muslims in Bangladesh. That's why
              we're committed to providing affordable and meticulously crafted
              packages that ensure a spiritually enriching and hassle-free
              experience for every traveler.
            </p>
            <p className="hotels_text_p">
              Embark on the journey of a lifetime with Musafir Air Travels' Hajj
              and Umrah packages tailored to meet the unique needs and
              preferences of pilgrims from Bangladesh. From comprehensive
              itineraries to seamless logistics, we handle every aspect of your
              pilgrimage with care and attention to detail, allowing you to
              focus on the spiritual significance of your journey.
            </p>
            <p className="hotels_text_p">
              Our experienced team of travel experts works tirelessly to ensure
              that your Hajj or Umrah experience is both memorable and
              meaningful. With access to exclusive accommodations,
              transportation, and guided tours, we strive to make your
              pilgrimage as comfortable and enriching as possible.
            </p>
          </div>
          <div>
            <img className="hotelsBannerPhoto" src={hajjUmrahBanner} alt="" />
          </div>
        </div>
        <div className="at_musafir_text-div">
          <p className="hotels_text_lst_p">
            Whether you're fulfilling your lifelong dream of performing Hajj or
            seeking the spiritual rewards of Umrah, Musafir Air Travels is here
            to support you every step of the way. Trust us to provide affordable
            packages, unparalleled service, and unwavering support, allowing you
            to embark on your pilgrimage with peace of mind and devotion.
          </p>
          <p className="hotels_text_lst_p">
            Experience the sacred journey to Mecca and Medina with Musafir Air
            Travels' Hajj and Umrah packages. Book now and let us help you
            fulfill your spiritual aspirations with grace and reverence. Your
            pilgrimage begins here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HajjUmrah;
