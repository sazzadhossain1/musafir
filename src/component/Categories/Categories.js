import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories_parent_div">
      <h3 className="categories_heading">Categories</h3>
      <div className="categories_link_div">
        <Link>Europe</Link>
        <br />
        <Link>Latest</Link>
        <br />
        <Link>NY</Link>
        <br />
        <Link>Popular</Link>
        <br />
        <Link>Skiing</Link>
        <br />
        <Link>Trendy</Link>
      </div>
    </div>
  );
};

export default Categories;
