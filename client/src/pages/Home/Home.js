import React, { useContext, useEffect } from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { user } = useContext(AuthContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate("/login");
    }

  }, [user])


  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <h1>Featured Property</h1>
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
