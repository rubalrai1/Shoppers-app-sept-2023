import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { WishlistContext } from './context/Wishlist'

export default function Wishlist ({showModal, toggle}) {

  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext)


  const handleRemoveFromWishlist = (product) => {
    removeFromWishlist(product)
  }




  return (
    true && (
      <div className="wishlist-container">
        <h1 className="wishlist-heading">Wishlist</h1>
        <div className="wishlistItem-container">
          {wishlistItems.map((item) => (
            <div className="wishlist-items" key={item.id}>
              <div className="item-container">
                <img src={item.image} alt={item.title} className="image-container" />
                <div className="item-details">
                  <h1 className="item-title">{item.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        {
          wishlistItems.length > 0 ? (
            <></>
          ) : (
            <h1 className="empty-cart">Your cart is empty</h1>
          )
        }
      </div>
    )
  )
}

Wishlist.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
}