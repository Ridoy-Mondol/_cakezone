import React, { useState, useEffect} from 'react'
import Cake from './Cake'
import img1 from '../Images/cake-1.jpg'
import img2 from '../Images/cake-2.jpg'
import img3 from '../Images/cake-3.jpg'
import Commonheading from './Commonheading'
import Specialpack from './Specialpack'

const Menu = ({ specialpackPosition,common }) => {
  const [birthday, setBirthday] = useState (true);
  const [wedding, setWedding] = useState (false);
  const [custom, setCustom ] = useState (false);
  const [fade, setFade] = useState(false);
  const [index,setIndex] = useState (0);
  const Array = [
    {
      id : 1,
      img_src : img1,
      heading : "BIRHDAY CAKE",
      description : "Make your birthday extra special with our yummy birthday cakes!"
    },
    {
      id : 2,
      img_src : img2,
      heading : "WEDDING CAKE",
      description : "Enhance your wedding day with our unique, handmade wedding cakes!"
    },
    {
      id : 3,
      img_src : img3,
      heading : "CUSTOM CAKE",
      description : "Elevate every occasion with our uniquely tailored custom cakes!"
    },
  ]

  const Birthday = () => {
    setBirthday (true);
    setWedding (false);
    setCustom (false);
    setFade(true);
    setTimeout(() => {
      setIndex(0);
      setFade(false);
    }, 150);
  }
  const Wedding = () => {
    setBirthday (false);
    setWedding (true);
    setCustom (false);
    setFade(true);
    setTimeout(() => {
      setIndex(1);
      setFade(false);
    }, 150);
  }
  const Custom = () => {
    setBirthday (false);
    setWedding (false);
    setCustom (true);
    setFade(true);
    setTimeout(() => {
      setIndex(2);
      setFade(false);
    }, 200);
  }
  return (
    <>
    {common === "common" && <Commonheading heading = "MENU & PRICING" link = "MENU & PRICING" url = "/menu"/>}
    <div className='menu-div'>
      <h3 className='crispy text-center'>Menu & Pricing</h3>
      <h1 className='home-head text-center about-head'>EXPLORE OUR CAKES</h1>
      <div className='parent'>
      <div className='line'></div>
      <div className='square'></div>
      </div>
      <div className='d-flex justify-content-center'>
      <div className='logo-outer menu-outer'>
       <div className='logo-inner menu-inner'>
         <button type='button' className={`menu-btn ${birthday ? "color-cng" : ""}`} onClick={Birthday}>BIRTHDAY</button>
         <button type='button' className={`menu-btn ${wedding ? "color-cng" : ""}`} onClick={Wedding}>WEDDING</button>
         <button type='button' className={`menu-btn ${custom ? "color-cng" : ""}`} onClick={Custom}>CUSTOM</button>
         </div>
       </div>
       </div>

      <div className='double-cake'>
      <Cake Array={Array[index]} fade={fade}/>
      <Cake Array={Array[index]} fade={fade}/>
      </div>
      <div className='double-cake'>
      <Cake Array={Array[index]} fade={fade}/>
      <Cake Array={Array[index]} fade={fade}/>
      </div>
      <div className='double-cake'>
      <Cake Array={Array[index]} fade={fade}/>
      <Cake Array={Array[index]} fade={fade}/>
      </div>

    </div>
    {specialpackPosition === 'afterMenu' && <Specialpack />}
    </>
  )
}

export default Menu
