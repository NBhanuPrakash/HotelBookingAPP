import React from "react";
import "./featuredProp.css";

const FeaturedProp = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://www.lux-review.com/wp-content/uploads/2019/09/atlantis-1024x576.jpg"
          alt="Image_Not_Found"
          className="fpImg"
        />
        <span className="fpName">Ramarana stare</span>
        <span className="fpCity">UK</span>
        <span className="fpPrice">Strating from 250000K</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/06/the-venetian-the-palazzo-las-vegas-usa.jpg?ssl=1"
          alt="Image_Not_Found"
          className="fpImg"
        />
        <span className="fpName">Korenka stare</span>
        <span className="fpCity">US</span>
        <span className="fpPrice">Strating from 350000K</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/06/aria-resort-casino-las-vegas-usa.jpg?ssl=1F"
          alt="Image_Not_Found"
          className="fpImg"
        />
        <span className="fpName">leanka stare</span>
        <span className="fpCity">Londan</span>
        <span className="fpPrice">Strating from 50000K</span>
        <div className="fpRating">
          <button>8.2</button>
          <span>Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.investopedia.com/thmb/ozKQEnOsz4MFeICckkjOLG5bWdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vancouver-358515_640-5bfc3446c9e77c00518166e4.jpg"
          alt="Image_Not_Found"
          className="fpImg"
        />
        <span className="fpName">Nokanko stare</span>
        <span className="fpCity">Bharat(India)</span>
        <span className="fpPrice">Strating from 150000K</span>
        <div className="fpRating">
          <button>8.2</button>
          <span>Good</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProp;
