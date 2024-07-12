import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "./context/DataStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../Pages/context/cart";
import "./ProductDetails.css";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { WishlistContext } from './context/wishlist';


import Navbar from "../Navbar";
import ErrorBoundary from "./ErrorBoundary";

function ProductDetails() {
  const { apiData } = useContext(ApiContext);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { wishlistItems, addToWishlist } = useContext(WishlistContext);
  const { productId } = useParams();
  const id = parseInt(productId);
  const thisProduct = apiData && apiData.find((data) => data.id === id);

  const notifyAddedToCart = (item) =>
    toast.success(`Added to cart!`);
    const notifyAddedToWishlist = (item) =>
    toast.success(`Added to wishlist!`);

  return (
    <>
      <Navbar />
      {thisProduct ? (
        <div className="product-card">
          <ToastContainer />
          <div className="card-wrapper">
            <div
              className="product-card-image"
              style={{
                backgroundImage: `url(${thisProduct.image})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="product-description">{thisProduct.description}</div>
            <div className="product-cardInfo">
              <h4>{thisProduct.category}</h4>
              <div className="detail-action">
                <div className="priceGroup">{`$${thisProduct.price}`}</div>
                <IconButton
                  className="wishlist"
                  aria-label="add to wishlist"
                  onClick={() => {
                    addToWishlist(thisProduct)
                    notifyAddedToWishlist(thisProduct)
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
                  <Button
                    variant="contained"
                    className="add-to-cart"
                    aria-label="add to cart"
                    onClick={() => {
                      addToCart(thisProduct);
                      notifyAddedToCart(thisProduct);
                    }}
                  >
                    Add to cart
                  </Button>
                </div>
                <div>
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

export default React.memo(ProductDetails);

