import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/about-background-image.png"
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image:PickMeals,
            title:"Pick Meals",
            text:"Pick a meal from the variety of items we have in store"
        },
        {
            image:ChooseMeals,
            title:"Choose Meals",
            text:"Choose your prefered menu option"
        },
        {
            image:DeliveryMeals,
            title:"Fast Delieries",
            text:"We deliver your meals anytime and anywhere in speed"
        },
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>
                We provide you with an easy way to get your favorite foods delivered at your doorstep.
                
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data) => (
                <div className='work-section-info' key={data.title}>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt='' />

                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work