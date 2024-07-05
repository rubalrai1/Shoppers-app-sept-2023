import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { CartContext } from './context/AddToCard'
import './Cart.css';
import Navbar from '../Navbar';
export default function Cart ({showModal, toggle}) {

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


  const handleRemoveFromCart = (product) => {
    removeFromCart(product)
  }




  return (
    true && (
      <>
      <Navbar />
      <div className="cart-container">
        <h1 className="cart-heading">Cart</h1>
        <div className="cartItem-container">
          {cartItems.map((item) => (
            <div className="cart-items" key={item.id}>
              <div className="item-container">
                <img src={item.image} alt={item.title} className="image-container" />
                <div className="item-details">
                  <h1 className="item-title">{item.title}</h1>
                  <p className="item-price">${item.price}</p>
                </div>
              <div className="quantity-container">
                <button
                  className="increase-quantity-button"
                  onClick={() => {
                    addToCart(item)
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="decrease-quantity-button"
                  onClick={() => {
                    const cartItem = cartItems.find((product) => product.id === item.id);
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCart(item);
                    } else {
                      removeFromCart(item);
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
            </div>
          ))}
        </div>
        {
          cartItems.length > 0 ? (
            <div className="total-price-container">
          <h1 className="total-price">Total: ${getCartTotal()}</h1>
          <button
            className="clear-cart"
            onClick={() => {
              clearCart()
            }}
          >
            Clear cart
          </button>
        </div>
          ) : (
            <h1 className="empty-cart">Your cart is empty</h1>
          )
        }
      </div>
      </>
    )
  )
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
}