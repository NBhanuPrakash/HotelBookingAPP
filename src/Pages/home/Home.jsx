import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProp from "../../components/featuredProperties/FeaturedProp";
import MailList from "../../components/MailList/MailList";
import Fotter from "../../components/Footer/Fotter";
import CopyRight from "../../components/COpyRights/CopyRight";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProp />
        <MailList />
        <Fotter />
        <CopyRight />
      </div>
    </div>
  );
};

export default Home;
