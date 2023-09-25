import React, { useContext } from "react";
import ImgMediaCard from "./ImgMediaCard";
import { ApiContext } from "./Pages/context/DataStorage";
import { Link } from "react-router-dom";

const ProductData = ({ category }) => {
  const { apiData } = useContext(ApiContext);
  const data =
    apiData &&
    apiData.filter((data) => {
      return data.category === category;
    });
  console.log(data, "rubal");
  console.log(apiData, "rubalapi");

  return (
    <div className="product-data-container">
      {data &&
        data.map((product) => (
           <Link to={`/products/${product.id}`}>
          <ImgMediaCard
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
          />
           </Link>
        ))}
    </div>
  );
};

export default ProductData;
