import React, { useState} from 'react'
import { Link } from "react-router-dom";

const Employee = (props) => {
    const [show, setShow] = useState (null);
    const showIcon = (id) => {
        setShow (id);
    }
    const hideIcon = () => {
        setShow (null);
    }
  return (
    <div className='emp-div'>
      {
        props.Array.map ((val,index) => {
            return (
               <div className={`single-emp position-relative ${val.id === 3 ? "item-left" : ""}`} key={index} onMouseEnter={ () =>showIcon (val.id) } onMouseLeave={hideIcon}>
                <div className='emp-img-div'>
                 <img src={val.img_src} alt ="team members" className={`img-fluid emp-img ${show===val.id ? "zoom" : ""}`}/>
                 </div>

                 <div className={`empicon-flex ${show===val.id ? "show" : "hide"}`}>

                 <Link to="https://web.facebook.com/profile.php?id=100015131225530" className='logo-outer empicon-outer text-decoration-none'>
                 <div className='logo-inner empicon-inner'>
                 <i class="fab fa-facebook-f"></i>
                 </div>
                 </Link>

                 <Link to="https://www.linkedin.com/in/md-ridoy-mondol-885555297/" className='logo-outer empicon-outer text-decoration-none'>
                 <div className='logo-inner empicon-inner'>
                 <i class="fab fa-linkedin-in"></i>
                 </div>
                 </Link>

                 <div className='logo-outer empicon-outer'>
                 <div className='logo-inner empicon-inner'>
                 <i class="fab fa-twitter"></i>
                 </div>
                 </div>

                 </div>

                 <div className='logo-outer emp-outer'>
                 <div className='logo-inner emp-inner'>
                 <h5 className='text-heading emp-head'>{val.name}</h5>
                 <span className='about-para card-para'>
                {val.designation}
                 </span>
                 </div>
                 </div>

               </div>
            )
        })
      }
    </div>
  )
}

export default Employee
