import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'


const NavBar = () => {
 
  return (
    <div>
      <nav>
     
      <NavLink className='logo' end to='/'>Kula.</NavLink>
          
        <div className="navbar">
          <ul>
            <li>
                <NavLink end to='/whoweare'>Who We Are</NavLink>
            </li>
            <li>
                <NavLink end to='/partnerwithus'>Partner With Us</NavLink>
            </li>
           
            <li>
                <NavLink end to='/contactus'>Contact Us</NavLink>
            </li>
            <li>
                <NavLink end to='/signup'>Sign Up</NavLink>
            </li>
            <li>
                <NavLink end to='/login'>Log In</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar