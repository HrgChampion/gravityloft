import React from 'react'
import footer from "../../../images/footer.png";
import "./Footer.css";
import logo from "../../../images/logo.png";
function Footer() {
  return (
    <div className='footer'>
    <br/>
        <div className='upper-footer'>
            <img src={footer}/>
        </div>
        <br/>
        <div className='lower-footer' >
        <div className='lower-footer-first'>
            <div className='lower-left'>
                <img src={logo}/>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className='lower-right'>
                <div>
                    <h5>Account</h5>
                    <p>Login</p>
                    <p>Signup</p>
                </div>
                <div>
                <h5>Company</h5>
                    <p>Privacy Policy</p>
                    <p>Terms of use</p>
                    <p>Compliance </p>
                </div>
                <div><h5>Support</h5>
                    <p>Contact Us</p>
                    <p>FAQ</p></div>
            </div>
        </div>
        <div className='lower-footer-second'>
        <br/>
            <div className='line'></div>
            
            <p className='copyright'>Copyright © 2022 by Techrefic</p>
        </div>
        </div>
    </div>
  )
}

export default Footer