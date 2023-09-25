import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
export const ApiContext = createContext(null);

const DataStorage=({ children }) =>{
const [apiData, setApiData] =useState(null);
const baseURL = "https://fakestoreapi.com/products";
useEffect(()=>{
  axios.get(baseURL).then((response) => {
    setApiData(response.data);
  });
}
,[]);

  return (
    <ApiContext.Provider value={{apiData, setApiData}}>
      {children}
    </ApiContext.Provider>
  )
}
export default DataStorage