import React from 'react'
const Cake = (props) => {
  return (
    <div className={`cake-div ${props.fade ? "fade-out" : "fade-in"}`}>
      
      <div className='single-cake'>
      <img src = {props.Array.img_src} className='img-fluid cake-img'/>
      <div className='money'>$99.00</div>
      
      <div className='logo-outer cake-outer'>
       <div className='logo-inner cake-inner'>
       {/* <div className='nav-fle'> */}
        <div className='ms-lg-2 cake-mobile-flex'>
        <h6 className='cake-head'>
        {props.Array.heading}
        </h6>
        <span className='nav1-text cake-text'>
        {props.Array.description}
        </span>
        </div>
       {/* </div> */}
       </div>
       </div>
       </div>

    </div>
  )
}

export default Cake
