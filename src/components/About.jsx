import React from 'react'
import AboutBAckground from '../Assets/about-background.png'
import AboutBAckgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBAckground} alt='about' />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBAckgroundImage} alt='aboutbg' />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>Food Is An Important Part Of A Balanced Diet</h1>
            <p className='primary-text'>
                we eat good food because we know the value of good health and how important it is to eat healthy.
            </p>
            <p className='primary-text'>
                Don't worry about the distance, we got you covered with excellent and fast deliveries.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    <BsFillPlayCircleFill /> Watch Video
                </button>


            </div>
        </div>
        
    </div>
  )
}

export default About