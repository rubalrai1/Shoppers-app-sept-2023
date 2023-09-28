import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar'
import bannerBg from '../../Images/purple-bg-fantastic.webp'
import adImage from '../../Images/clothing-ad-image2-removebg-preview.png'
import { FiArrowRight } from "react-icons/fi";
import ProductData from '../ProductData';
import HomeProductImageCard from '../HomeProductImageCard';
import ProductDetailS from './ProductDetails';

const Home = () => {
  const [openAdModal, setOpenModal] =useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setOpenModal(true)
    }, 2000)
  }, [])
  return (
    <div className='home-container'>
    <Navbar/>
    <div className='home-banner-container'>
      <div className='home-bannerImage-container'>
        <img src={bannerBg} alt=""/>
      </div>
      <div className='home-text-section'>
        <h3 className='primary-heading'>
          Your favourite brands are on sale!!!
        </h3>
        <p className='primary-text'>
          NEW SEASON. NEW MOOD. NEW YOU. 
        </p>
        <button className="secondary-button" tabIndex='0' role="button">
            View more <FiArrowRight />{" "}
          </button>
      </div>
      <div className='home-image-section'>
        <img src={adImage} alt="background-image"/>
      </div>
    </div>
    <div className='card-container'>
      {/* <ProductData/> */}
    <HomeProductImageCard/>
    {/* <ProductDetailS/> */}
    </div>
    <div className='home-footer-data'>INDIA'S LARGEST SALE IS LIVE!!!</div>
    </div>
  )
}

export default Home