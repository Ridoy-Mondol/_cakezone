import React from 'react'
import img from '../Images/service.jpg'
import Commonheading from './Commonheading'

const Service = ({common}) => {
  return (
    <>
     {common === "common" && <Commonheading heading = "SERVICES" link = "SERVICES" url = "/_cakezone/service"/>}

    <div className='service-div'>
      
      <div className='menu-img-div'>
      <img src={img} className='img-fluid menu-bg' alt='background image'/>

      <div className='card-flex'>

      <div className='logo-outer card-outer service-card-outer'>
       <div className='logo-inner card-inner service-card-inner'>
       <h5 className='text-heading'>BIRTHDAY CAKE</h5>
            <span className='about-para card-para'>
            Sweeten your celebrations with our irresistible birthday cakes, specially made to add joy to your special day
            </span>
            <div>
            <button type = "button" className='card-btn'>READ MORE</button>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
       </div>
       </div>

       <div className='logo-outer card-outer service-card-outer'>
       <div className='logo-inner card-inner service-card-inner'>
       <h5 className='text-heading'>WEDDING CAKE</h5>
            <span className='about-para card-para'>
            Elevate your wedding with our exquisite, personalized cakes, handcrafted to make your day unforgettable
            </span>
            <div>
            <button type = "button" className='card-btn'>READ MORE</button>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
       </div>
       </div>

       <div className='logo-outer card-outer service-card-outer'>
       <div className='logo-inner card-inner service-card-inner'>
       <h5 className='text-heading'>CUSTOM CAKE</h5>
            <span className='about-para card-para'>
            Add a personal touch to any occasion with our unique custom cakes, designed to reflect your style and taste
            </span>
            <div>
            <button type = "button" className='card-btn'>READ MORE</button>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
       </div>
       </div>

       </div>

       <h3 className='best-cake card-head'>30% DISCOUNT FOR THIS <span>SUMMER</span></h3>
       <div className='btn-outer order-btn'>
        <button className='btn-inner'>Order Now</button>
        </div>

      </div>

    </div>
    </>
  )
}

export default Service
