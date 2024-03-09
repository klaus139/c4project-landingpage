import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png";
import {FiArrowRight} from 'react-icons/fi';
import BannerImage from "../Assets/home-banner-image.png";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-bannerImage-container'>
        <img src={BannerBackground} alt='banner' />
      </div>
      <div className='home-text-section'>
        <h1 className='primary-heading'>
          Your favorite Food Delivery Hot and Fresh
        </h1>
        <p className='primary-text'>
          Healthy switcher chefs do all the prep work, like peeling, chopping and marinating, so you can cook a fresh food
        </p>
        <button className='secondary-button'>
          Order Now <FiArrowRight />{" "}
        </button>
      </div>
      <div className='home-image-section'>
        <img src={BannerImage} alt='' />
      </div>
      
    </div>
  )
}

export default Home