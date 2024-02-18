import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CreateContext from './CreateContext'

const Commonheading = (props) => {
  const {showNavLink} = useContext(CreateContext);
  return (
    <div className={`common-div`}>
      <h1 className='home-head text-center about-head special-head mt-0'>{props.heading}</h1>
      <div className='common-link'>
      <NavLink activeClassName="active" className="nav-link commonpage-link" exact to="/_cakezone/">
        HOME
      </NavLink>
      <div className='common-square'></div>
      <NavLink activeClassName="active" className="nav-link commonpage-link" exact to={props.url}>
      {props.link}
      </NavLink>
      </div>
    </div>
  )
}

export default Commonheading
