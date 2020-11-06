import React from "react";
import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size ? size : ""} menu-item`}>
    {/* will add a div seperate div for hendling the background image */}
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
