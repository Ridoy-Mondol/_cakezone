import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../Images/hero.jpg'
import About from './About'
import Menu from './Menu'
import Service from './Service'
import Chefs from './Chefs'
import Specialpack from './Specialpack'
import Testimonial from './Testimonial'

const Home = ({specialpackPosition}) => {
  return (
    <>
    <div className='home-div'>
       <img src={img} alt='background image' className='img-fluid home-bg-img' width="100%"/>
       <div className='home-text'>
         <h3 className='crispy'>Super Crispy</h3>
         <h1 className='home-head'>CAKEZONE</h1>
         <h3 className='best-cake'>THE BEST CAKE IN TOWN</h3>
         <NavLink to="/cakezone/about" className="text-decoration-none">
         <div className='btn-outer'>
         <button className='btn-inner'>Read More</button>
         </div>
         </NavLink>
       </div>
       </div>

       <About />
       <Menu />
       <Service />
       <Chefs />
       {specialpackPosition === 'afterChefs' && <Specialpack />}
       <Testimonial />
       </>
  )
}

export default Home
