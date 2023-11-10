import PropTypes from 'prop-types'
import React, { createContext, useState, useEffect } from 'react'

export const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {
const [wishlistItems, setWishlistItems] = useState(localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : [])

  const addToWishlist = (item) => {
    const isItemInWishlist = wishlistItems.find((wishlistItem) => wishlistItem.id === item.id);

    if (isItemInWishlist) {
      setWishlistItems(
        wishlistItems.map((wishlistItem) =>
          wishlistItem.id === item.id
            ? { ...wishlistItem }
            : wishlistItem
        )
      );
    } else {
      setWishlistItems([...wishlistItems, { ...item, quantity: 1 }]);
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
  }, [wishlistItems]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WishlistProvider;