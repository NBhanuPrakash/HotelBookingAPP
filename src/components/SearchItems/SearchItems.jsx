import React from "react";
import "./searchItems.css";
import { useNavigate } from "react-router-dom";

const SearchItems = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels/:id");
  };
  return (
    <div className="searchItems">
      <img
        src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg"
        alt="Image_Not_FOund"
        className="siImg"
        onClick={handleSearch}
      />
      <div className="siDesc">
        <h1 className="siTitle" onClick={handleSearch}>
          Tower Street Apartmets
        </h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with air conditioning
        </span>
        <span className="siFeatures">
          Entire studio - 1 bathroom . 21m^2 1 full bed
        </span>
        <span className="siCalncelOp">Free cancellation</span>
        <span className="siCancelOpSubtitile">
          You can cancel later, so luck in this great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.2</button>
        </div>
        <div className="siDetailsText">
          <span className="siprice">150000k </span>
          <span className="siTaxOp">Includes Taxes and fees</span>
          <button className="siCheckButton" onClick={handleSearch}>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
