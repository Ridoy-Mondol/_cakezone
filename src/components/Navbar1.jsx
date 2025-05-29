import React, { useContext} from 'react'
import CreateContext from './CreateContext';

const Navbar1 = () => {
  const {showNavItem, showNavLink} = useContext (CreateContext);
  return (
    <div className='navbar1'>
       <div className='nav-flex'>
       <i className="fa-solid fa-envelope email-icon"></i>
       <div>
        <h5 className='nav1-head'>
        EMAIL US
        </h5>
        <span className='nav1-text'>
        ridoymondol140@gmail.com
        </span>
       </div>
       </div>

       <div className='logo-outer nav-logo-outer'>
       <div className='logo-inner nav-logo-inner'>
        <div className='logo-icon-flex'>
       <i className="fa fa-birthday-cake cake-icon"></i>
       <span className='logo'>CAKEZONE</span>
       </div>
       <i className={`cake-icon sidebar-icon ${showNavLink ? "fa-solid fa-xmark" : "fas fa-bars"}`} onClick={showNavItem}></i>
       </div>
       </div>

       <div className='nav-flex'>
       <i className="fa-solid fa-mobile-screen email-icon"></i>
       <div>
        <h5 className='nav1-head'>
        CALL US
        </h5>
        <span className='nav1-text'>
        +8801319118383
        </span>
       </div>
       </div>
    </div>
  )
}

export default Navbar1
