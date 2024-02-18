import React from 'react'
import img from '../Images/about.jpg'
import Commonheading from './Commonheading'
import Aboutfooter from './Aboutfooter'
const About = ({common}) => {
  return (
    <div className='position-relative'>
    {common==="common" && <Commonheading heading = "ABOUT US" link = "ABOUT" url = "/_cakezone/about"/>}
    <div className='about-div'>
      <h3 className='crispy text-center'>About Us</h3>
      <h1 className='home-head text-center about-head'>WELCOME TO CAKEZONE</h1>
      <div className='parent'>
      <div className='line'></div>
      <div className='square'></div>
      </div>
      <div className='cakezone-about'>
        <img src={img} alt = "cake image" className='img-fluid about-img'/>
        <div className='about-text'>
          <h3>About CakeZone</h3>
          <span className='about-para'>At CakeZone, our journey began with a shared passion for baking and a commitment to spreading joy through delightful treats. What started as a small kitchen endeavor among friends soon blossomed into a beloved bakery</span>
          <div className='award-div'>
          <div>
          <div className='logo-outer about-outer'>
          <div className='logo-inner about-inner'>
          <i class="fa fa-heartbeat "></i>
          </div>
          </div>
            <h5 className='text-heading'>100% HEALTHY</h5>
            <span className='about-para'>
                Our 100% healthy treats are made with quality ingredients for deliciousness without compromise. Dive into goodness, worry-free!
            </span>
          </div>

          <div>
          <div className='logo-outer about-outer'>
          <div className='logo-inner about-inner'>
          <i class="fa fa-award"></i>
          </div>
          </div>
            <h5 className='text-heading'>AWARD WINNING</h5>
            <span className='about-para'>
                At CakeZone, our creations have been recognized for their exceptional taste and quality. Treat yourself to the finest, celebrated flavors!
            </span>
          </div>
          </div>
        </div>
      </div>

      <Aboutfooter />
    </div>
    </div>
  )
}

export default About
