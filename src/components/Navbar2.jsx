import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import CreateContext from './CreateContext';
const Navbar2 = () => {
    const [ show, setShow] = useState (false);
    const {showNavLink} = useContext (CreateContext);
    const showDropdownPages = () => {
        setShow (!show);
    }
    const hideDropdownPages = () => {
      if(show) {
        setShow (false);
      }
    }
    
  return (
    <nav className={`${showNavLink ? (`${show ? "show-navbar-2 expan" : "show-navbar-2"}`) : 'hide-bar navbar-2'}`} onClick={hideDropdownPages}>
      <NavLink activeClassName="active" className="nav-link" exact to="/cakezone/">
        HOME
      </NavLink>
      <NavLink activeClassName="active" className="nav-link" exact to="/cakezone/about">
        ABOUT US
      </NavLink>
      <NavLink activeClassName="active" className="nav-link" exact to="/cakezone/menu">
        MENU & PRICING
      </NavLink>
      <NavLink activeClassName="active" className="nav-link" exact to="/cakezone/chefs">
        MASTER CHEFS
      </NavLink>
      <span onClick={showDropdownPages}>
      <span activeClassName="active"  className="nav-link">
      PAGES
      <i class="fas fa-caret-down ms-2"></i>
      </span>
      <span className={show ? 'dropdown-pages' : "hide"}>
           <NavLink activeClassName="active" className="dropdown-link" exact to="/cakezone/service">
           SERVICES
           </NavLink>
           <NavLink activeClassName="active" className="dropdown-link" exact to="/cakezone/testimonial">
           TESTIMONIAL
           </NavLink>
      </span>
      </span>
      <NavLink activeClassName="active" className={`nav-link margin-mobile`} exact to="/cakezone/contact">
        CONTACT US
      </NavLink>
    </nav>
  )
}

export default Navbar2
