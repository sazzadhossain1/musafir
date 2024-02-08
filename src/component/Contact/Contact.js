import React from "react";
import "./Contact.css";
import contactPhoto from "../../accets/contactPhoto/contactPhoto.jpg";

const Contact = () => {
  return (
    <div>
      <div className="contact_grid_div">
        <div className="contact_text_div">
          <h1>Contact Us Now</h1>
          <p>
            Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam
            invenire iracundia vim. Tn ea diam ea. Piber Korem sit amet.
          </p>
          <p>
            Al elit omnes impedfghit ius, vel et hinc agam fabulas. Ut audiam
            inve nire iracu ndia vim. En eam dico simi lique, ut sint posse sit,
            eum sumo diam ea. Liber consec tetuer in mei, sea in imperdiet assue
            verit contentiones, an his cibo bla ndit tacimates. Iusto iudi cabit
            simil ique id velex, in sea rebum deser uisse appntur honcus. Maece
            nas cibo blandit tacim ates sint posse.
          </p>
          <button>READ MORE</button>
        </div>
        <img src={contactPhoto} alt="" />
      </div>
    </div>
  );
};

export default Contact;
