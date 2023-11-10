import React, { useContext } from "react";
import ImgMediaCard from "./ImgMediaCard";
import { ApiContext } from "./Pages/context/DataStorage";

const ProductData = ({ category }) => {
  const { apiData } = useContext(ApiContext);
  const data =
    apiData &&
    apiData.filter((data) => {
      return data.category === category;
    });

  return (
    <div className="product-data-container">
      {data &&
        data.map((product) => (
          <ImgMediaCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        ))}
    </div>
  );
};

export default ProductData;
