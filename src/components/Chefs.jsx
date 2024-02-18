import React from 'react'
import Employee from './Employee'
import img1 from '../Images/team-1.jpg'
import img2 from '../Images/team-2.jpg'
import img3 from '../Images/team-3.jpg'
import Commonheading from './Commonheading'
const Chefs = ({common}) => {

    const Array = [
        {
          id : 1,
          img_src : img1,
          name : "Tyler Anderson",
          designation : "Head Pastry Chef"
        },
        {
          id : 2,
          img_src : img2,
          name : "Jackson Taylor",
          designation : "Cake Decorator"
        },
        {
          id : 3,
          img_src : img3,
          name : "Madison Roberts",
          designation : "Assistant Baker"
        },
      ]


  return (
    <>
     {common === "common" && <Commonheading heading = "MASTER CHEFS" link = "MASTER CHEFS" url = "/_cakezone/chefs"/>}

    <div className='chefs-div'>
        <h3 className='crispy text-center'>Team Members</h3>
        <h1 className='home-head text-center about-head chefs-head'>OUR MASTER CHEFS</h1>
        <div className='parent'>
        <div className='line'></div>
        <div className='square'></div>
        </div>

        <Employee Array = {Array}/>
        
    </div>
    </>
  )
}

export default Chefs
