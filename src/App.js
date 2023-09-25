import './App.css';
import React from 'react'
import Home from './Components/Pages/Home';
import Electronics from './Components/Pages/Electronics';
import MensClothing from './Components/Pages/MensClothing';
import WomensClothing from './Components/Pages/WomensClothing';
import Jewelry from './Components/Pages/Jewelry';
import Wishlist from './Components/Pages/Wishlist';
import Cart from './Components/Pages/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataStorage from './Components/Pages/context/DataStorage';
import ProductDetails from './Components/Pages/ProductDetails';

function App() {
  return (
    <>
    <div className="App">
      <DataStorage>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path="/women's clothing" element={< WomensClothing />}></Route>
      <Route exact path="/men's clothing" element={< MensClothing />}></Route>
      <Route exact path='/jewellery' element={< Jewelry />}></Route>
      <Route exact path="/products/:productId" element ={
        <ProductDetails />
      }>
        </Route>
      <Route exact path='/electronics' element={< Electronics />}></Route>
      <Route exact path='/cart' element={< Cart />}></Route>
      <Route exact path='/wishlist' element={< Wishlist />}></Route>       
      </Routes>
    </BrowserRouter>
    </DataStorage>
    </div>
    </>
  );
}

export default App;
