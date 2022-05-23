import React from 'react'
import "./Header.css"
import logo from "../../../images/logo.png";
function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='header-buttons'>
    <button className='text'>Contact Us</button>
        
    <button className='outline'>Login</button>
    <button className='container'>Register</button>
        </div>
    </div>
  )
}

export default Header