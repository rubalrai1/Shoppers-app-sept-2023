import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "./context/DataStorage";
import "./ProductDetails.css";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Badge from "@mui/material/Badge";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import Navbar from "../Navbar";
import ErrorBoundary from "./ErrorBoundary";

function ProductDetails() {
  const [itemCount, setItemCount] = useState(1);
  const { apiData } = useContext(ApiContext);
  const { productId } = useParams();
  const id = parseInt(productId);
  const thisProduct = apiData && apiData.find((data) => data.id === id);

  return (
    <>
      <Navbar />
      {thisProduct ? (
        <div className="product-card">
          <div className="card-wrapper">
            {/* <div className="product-card_img"> */}
            {/* <img src={image} alt="alt" className="card-image"/> */}
            <div
              className="product-card-image"
              style={{
                backgroundImage: `url(${thisProduct.image})`,
                backgroundSize: "cover",
              }}
            ></div>
            {/* </div> */}
            <div className="product-description">{thisProduct.description}</div>
            <div className="product-cardInfo">
              <h4>{thisProduct.category}</h4>
              <div className="detail-action">
                <div className="priceGroup">{`$${thisProduct.price}`}</div>
                <IconButton
                  className="wishlist"
                  aria-label="add to wishlist"
                  onClick={() => alert("Added to wishlist")}
                >
                  <FavoriteIcon />
                </IconButton>
                <div>
                  <Badge color="secondary" badgeContent={itemCount}>
                    <IconButton
                      className="add-to-cart"
                      aria-label="add to cart"
                      // onClick={() => addToCart(thisProduct)}
                    >
                      <ShoppingCartTwoToneIcon />
                    </IconButton>
                  </Badge>
                  <ButtonGroup>
                    <Button
                      onClick={() => {
                        setItemCount(Math.max(itemCount - 1, 0));
                      }}
                    >
                      {" "}
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      onClick={() => {
                        setItemCount(itemCount + 1);
                      }}
                    >
                      {" "}
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </div>
                {/* <IconButton className ="add-to-cart" aria-label="add to cart" onClick={()=>alert("Added to cart")}>
                          <ShoppingCartTwoToneIcon />
                          </IconButton> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ErrorBoundary />
      )}
    </>
  );
}

export default ProductDetails;
