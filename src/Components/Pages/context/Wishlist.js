import PropTypes from 'prop-types'
import React, { createContext, useState, useEffect } from 'react'

export const WishlistContext = createContext();

const AddToWishlist = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : [])

  const addToWishlist = (item) => {
    const isIteminWishlist = wishlistItems.find((wishlistItem) => wishlistItem.id === item.id);

    if (isIteminWishlist) {
      setWishlistItems(
        wishlistItems.map((wishlistItem) =>
            wishlistItem.id === item.id
            ? { ...wishlistItem, quantity: wishlistItem.quantity + 1 }
            : wishlistItem
        )
      );
    } else {
        setWishlistItems([...wishlistItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromWishlist = (item) => {
    const isItemInWishlist = wishlistItems.find((wishlistItem) => wishlistItem.id === item.id);

    if (isItemInWishlist.length) {
      setWishlistItems(wishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id));
    }
  };


  useEffect(() => {
    const data = localStorage.getItem('wishlistItems');
    if (data) {
      setWishlistItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]); // Include wishlistitems as a dependency here

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

AddToWishlist.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AddToWishlist;