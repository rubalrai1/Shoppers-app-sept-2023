import React, {useContext} from 'react'
import Navbar from '../Navbar'
import { WishlistContext } from './context/wishlist';
import { CartContext } from "../Pages/context/cart";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImgCardForCart from '../ImgCardForCart';

const Wishlist = () => {
  const {
    wishlistItems,
    addToWishlist,
  } = useContext(WishlistContext);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const notifyAddedToCart = (item) =>
    toast.success(`${item.title} added to cart!`);
  return (
    <>
    <Navbar/>
    <div className="cart-outer">
        <ToastContainer />
        <div className="cart-text">Wishlist</div>
        <div className="cart-cards">
          {wishlistItems.map((item) => (
            <div className="cart-card" key={item.id}>
              <ImgCardForCart
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                price={item.price}
              />
              <Button
                    variant="contained"
                    className="add-to-cart"
                    aria-label="add to cart"
                    onClick={() => {
                      addToCart(item);
                      notifyAddedToCart(item);
                    }}
                  >
                    Add to cart
                  </Button>
            </div>
            
          ))}
        </div>
        {wishlistItems.length === 0 &&  (
          <section className="empty-wishlist">
            Empty Wishlist, go explore!
          </section>
        )}
      </div>
    </>
  )
}

export default Wishlist