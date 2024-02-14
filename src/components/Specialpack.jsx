import React from 'react'
import img from "../Images/offer.jpg"
const Specialpack = () => {
  return (
    // <div>
    //    <div className='home-div'>
    //    <img src={img} alt='background image' className='img-fluid home-bg-img' width="100%"/>
    //    <div className='home-text special-text'>
    //    <div className='chefs-div'>
    //     <h3 className='crispy text-center'>Special Kombo Pack</h3>
    //     <h1 className='home-head text-center about-head'>SUPER CRISPY CAKES</h1>
    //     <div className='parent special-parent'>
    //     <div className='line'></div>
    //     <div className='square'></div>
    //     </div>
    //     <div className='about-para card-para special-para'>
    //     Discover joy in every bite with our Special Kombo Pack - SUPER CRISPY CAKES! Perfectly crispy, wonderfully delicious. Order now and treat yourself! 
    //     </div>

    //     <div className='special-btn'>
    //      <div className='btn-outer special-btn-outer'>
    //      <button className='btn-inner'>Shop Now</button>
    //      </div>
    //      <div className='btn-outer special-btn-outer'>
    //      <button className='btn-inner'>Shop Now</button>
    //      </div>
    //      </div>
    //      </div>

    //    </div>
    //    </div>
    // </div>

    <div className='special-div'>
       <img src={img} className='img-fluid special-bg' alt=''/>
       <div class="overlay">
       <h3 className='crispy text-center'>Special Kombo Pack</h3>
        <h1 className='home-head text-center about-head special-head'>SUPER CRISPY CAKES</h1>
        <div className='parent'>
        <div className='line'></div>
        <div className='square'></div>
        </div>
        <div className='about-para card-para special-para'>
        Discover joy in every bite with our Special Kombo Pack - SUPER CRISPY CAKES! Perfectly crispy, wonderfully delicious. Order now and treat yourself!
        </div>
        <div className='special-btn'>
        <div className='btn-outer special-btn-outer'>
        <button className='btn-inner'>Shop Now</button>
        </div>
        <div className='btn-outer special-btn-outer read-btn-outer'>
        <button className='btn-inner read-btn-inner'>Read More</button>
        </div>
        </div>
       </div>

    </div>
  )
}

export default Specialpack
