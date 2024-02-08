import React from "react";
import "./LatestPosts.css";
import latestPostPhotoOne from "../../accets/LatestPost/latestPostPhotoOne.jpg";
import latestPostPhotoTwo from "../../accets/LatestPost/latestPostPhotoTwo.jpg";
import latestPostPhotoThree from "../../accets/LatestPost/latestPostPhotoThree.jpg";

const LatestPosts = () => {
  return (
    <div className="latest_post_parent_div">
      <h1 className="latestPost_heading">Latest Posts</h1>
      <div>
        <div className="latest_post_flex_div">
          <img className="latestPostPhoto" src={latestPostPhotoOne} alt="" />
          <div>
            <p className="latest_post_cart_p">Visit Thailand, Bali And China</p>
            <span className="latest_post_cart_span">September 7,2024</span>
          </div>
        </div>
        <div className="latest_post_flex_div">
          <img className="latestPostPhoto" src={latestPostPhotoTwo} alt="" />
          <div>
            <p className="latest_post_cart_p">The Sound Of Our Jungle</p>
            <span className="latest_post_cart_span">September 7,2024</span>
          </div>
        </div>
        <div className="latest_post_flex_div">
          <img className="latestPostPhoto" src={latestPostPhotoThree} alt="" />
          <div>
            <p className="latest_post_cart_p">New Year, New Resolutions!</p>
            <span className="latest_post_cart_span">September 7,2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
