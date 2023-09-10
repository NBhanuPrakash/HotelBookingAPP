import React from "react";
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://media.cntraveler.com/photos/5ea7bd07f7f62f00085493e1/16:9/w_2580,c_limit/AmanKyoto-Japan-Hotel-2020-2.jpg"
          alt="Image_Not_FOund"
          className="pListImg"
        />
        <div className="plistTitle">
          <h1>Hotels</h1>
          <h2>425 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/314234927.jpg?k=21291418450e2c1802e02864677b7cf811321797b1d36aaa55e1019133f82698&o=&hp=1"
          alt="Image_Not_FOund"
          className="pListImg"
        />
        <div className="plistTitle">
          <h1>Villas</h1>
          <h2>265 Villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.explore.com/img/gallery/the-most-beautiful-private-islands-in-the-world/l-intro-1678230513.jpg"
          alt="Image_Not_FOund"
          className="pListImg"
        />
        <div className="plistTitle">
          <h1>Islands</h1>
          <h2>93 islands</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://curlytales.com/wp-content/uploads/2021/03/Untitled-2021-03-19T141333.708.jpg"
          alt="Image_Not_FOund"
          className="pListImg"
        />
        <div className="plistTitle">
          <h1>Resorts</h1>
          <h2>500+ resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://static.toiimg.com/thumb/msid-93855950,width-748,height-499,resizemode=4,imgsize-168704/.jpg"
          alt="Image_Not_FOund"
          className="pListImg"
        />
        <div className="plistTitle">
          <h1>Palace</h1>
          <h2>62 palace</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.homestratosphere.com/wp-content/uploads/2015/09/1z-houseboats-870x566.jpg"
          alt="Image_Not_FOund"
          className="pListImg"
        />
        <div className="plistTitle">
          <h1>Boat House</h1>
          <h2>225 Houses</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
