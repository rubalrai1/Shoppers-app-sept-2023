import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../Pages/context/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImgCardForCart from "../ImgCardForCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Navbar from "../Navbar";
import "./cart.css";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
  } = useContext(CartContext);
  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title} removed from cart!`);
  const notifyCartCleared = () => toast.error(`Cart cleared!`);
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return (
    <>
      <Navbar />
      <div className="cart-outer">
        <ToastContainer />
        <div className="cart-text">Shopping cart</div>
        {getCartTotal() !== 0 && (
          <Button
            variant="outlined"
            size="small"
            className="clear-button"
            onClick={() => {
              clearCart();
              notifyCartCleared();
            }}
          >
            Clear cart
          </Button>
        )}
        <div className="cart-cards">
          {cartItems.map((item) => (
            <div className="cart-card" key={item.id}>
              <ImgCardForCart
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                price={item.price}
              />
              <div className="product-quantity">
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                  <Button>{item.quantity}</Button>
                  <Button
                    onClick={() => {
                      const cartItem = cartItems.find(
                        (product) => product.id === item.id
                      );
                      if (cartItem.quantity === 1) {
                        handleRemoveFromCart(item);
                      } else {
                        removeFromCart(item);
                      }
                    }}
                  >
                    {" "}
                    <RemoveIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <article className="total-price">
            Total: ${getCartTotal()}
            <aside>
              <Button
                variant="outlined"
                size="small"
                className="clear-button"
                onClick={() => {
                  clearCart();
                  toast.success(`Order Confirmed`);
                }}
              >
                Checkout
              </Button>
            </aside>
          </article>
        ) : (
          <section className="empty-cart">
            Your cart is empty, Go shop!!!!!
          </section>
        )}
      </div>
    </>
  );
};

export default Cart;
