import React from "react";
import Navbar from "../Navbar";
import bannerBg from "../../Images/purple-bg-fantastic.webp";
import adImage from "../../Images/clothing-ad-image2-removebg-preview.png";
import { FiArrowRight } from "react-icons/fi";
import HomeProductImageCard from "../HomeProductImageCard";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={bannerBg} alt="banner-img" />
        </div>
        <div className="home-text-section">
          <h3 className="primary-heading">
            Your favourite brands are on sale!!!
          </h3>
          <p className="primary-text">NEW SEASON. NEW MOOD. NEW YOU.</p>
          <Link to="https://www.myntra.com">
          <button className="secondary-button" tabIndex="0" role="button" 
          // onClick={event =>  window.location.href='https://www.myntra.com/'}
          >
            View more <FiArrowRight />{" "}
          </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img src={adImage} alt="background-image" />
        </div>
      </div>
      <div className="card-container">
        <HomeProductImageCard />
      </div>
      <p className="primary-text"> INDIA'S LARGEST SALE IS LIVE!!! </p>
    </div>
  );
};

export default Home;
