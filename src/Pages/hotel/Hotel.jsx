import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/MailList/MailList";
import Fotter from "../../components/Footer/Fotter";
import CopyRight from "../../components/COpyRights/CopyRight";

const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_Hb8XyEBKIru7vdiZDCwHVr4AFbv3tulqwJfVZG0SgKg_vwMmD_d2rpBqY3qOAWpJeM&usqp=CAU",
    },
    {
      src: "https://i.pinimg.com/736x/dc/04/6e/dc046e7be6567264022cb78b97c6b89b.jpg",
    },
    {
      src: "https://i.pinimg.com/originals/f5/e8/4c/f5e84cf14f5428372ddf9272308951b6.jpg",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOWW4zT5GQGa6zzusG0uQ54eJRAKIZvHmRDArhq8q4lOO-S26vc4U3X_j2TrTc04oR0s&usqp=CAU",
    },
    {
      src: "https://i.pinimg.com/1200x/56/f4/5a/56f45ae898a5d668fccf7d82b24074b4.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "l") {
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSliderNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hoteContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[sliderNumber].src}
                alt=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hoteWrapper">
          <button className="booknow">Reserve or Book Now!</button>
          <h1 className="hoteTitile">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 new York</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over 114000K at this property and get a free airport
            taxi
          </span>
          <div className="hoteImages">
            {photos.map((photos, i) => (
              <div className="hotelImageWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photos.src}
                  alt="Image_Not_found"
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                You're eligible for a Genius discount at FabHotel Blossoms
                Service Apartment! To save at this property, all you have to do
                is sign in. Attractively set in Chennai, FabHotel Blossoms
                Service Apartment features air-conditioned rooms with free WiFi,
                free private parking and room service. This 3-star hotel offers
                a tour desk and luggage storage space. The accommodation offers
                airport transfers, while a car rental service is also available.
                At the hotel, rooms come with a desk and a flat-screen TV. The
                rooms have a private bathroom with a shower and free toiletries.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>150000K</b> (9 - nights){" "}
              </h2>
              <button>Reserve Or Book now...</button>
            </div>
          </div>
        </div>
        <MailList />
        <Fotter />
        <CopyRight />
      </div>
    </div>
  );
};

export default Hotel;
