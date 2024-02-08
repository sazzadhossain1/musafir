import React from "react";
import "./Newslattre.css";

const Newslattre = () => {
  return (
    <div className="newslater_parent_div">
      <h1 className="newslatter_heading">Newslatter</h1>
      <p className="if_you_have">
        If you have question,do not hesitate to ask!
      </p>
      <div>
        <input className="newslatter_input" type="name" placeholder="Name" />
        <input className="newslatter_input" type="email" placeholder="Email" />
        <button className="newslatter_subscribe_btn">Subscribe</button>
      </div>
    </div>
  );
};

export default Newslattre;
