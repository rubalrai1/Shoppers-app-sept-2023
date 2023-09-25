import React from "react";
import { useNavigate } from "react-router-dom";
import Men from "../Images/men-clothing.png";
import Women from "../Images/women-clothing.png";
import Electronics from "../Images/laptop.jpg";
import Jewels from "../Images/jewel.jpg";
import "./HomeProductImageCard.css";

const HomeProductImageCard = () => {
  const navigate = useNavigate();
  const homePageProductData = [
    {
      image: Men,
      text: "Men",
      apiText: "men's clothing",
    },
    {
      image: Women,
      text: "Women",
      apiText: "women's clothing",
    },
    {
      image: Jewels,
      text: "Jewellery",
      apiText:"jewellery",
    },
    {
      image: Electronics,
      text: "Electronics",
      apiText: "electronics",
    },
  ];

  return (
    <div className="home-card-container">
      {homePageProductData &&
        homePageProductData.map((prod) => (
          <div className="home-card" onClick={()=>navigate(`/${prod.apiText}`)} role="button" tabIndex='0'>
            <div
              key={prod.id}
              className="home-card-image"
              style={{
                backgroundImage: `url(${prod.image})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h1>{prod.text}</h1>
          </div>
        ))}
    </div>
  );
};

export default HomeProductImageCard;
