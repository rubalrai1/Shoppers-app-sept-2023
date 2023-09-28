import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
export const AddToCartContext = createContext(null);

const AddToCart=({ children }) =>{
     const [cart, setCart] = useState([]);
    // setCart(cart => ({
    //     ...cart,
    //     newProduct,
    //   })
    // )
 
  return (
    <AddToCartContext.Provider value={{cart, setCart}}>
      {children}
    </AddToCartContext.Provider>
  )
}
export default AddToCart