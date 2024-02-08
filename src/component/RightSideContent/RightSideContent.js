import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Categories from "../Categories/Categories";
import Newslattre from "../Newslattre/Newslattre";
import LatestPosts from "../LatestPosts/LatestPosts";

const RightSideContent = () => {
  return (
    <div>
      <AboutMe></AboutMe>
      <Categories></Categories>
      <Newslattre></Newslattre>
      <LatestPosts></LatestPosts>
    </div>
  );
};

export default RightSideContent;
