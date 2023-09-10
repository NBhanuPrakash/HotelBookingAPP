import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItems">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHViYWl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItems">
        <img
          src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhfGVufDB8fDB8fHww&w=1000&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Australia</h1>
          <h2>456 properties</h2>
        </div>
      </div>
      <div className="featuredItems">
        <img
          src="https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718_1280.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>US</h1>
          <h2>789 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
