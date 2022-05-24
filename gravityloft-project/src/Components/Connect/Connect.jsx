import React from 'react'
import "./Connect.css"

function Connect() {
  return (
    <div className='connect'>
    <div className='left-connect'>
        <div className='left-connect-heading'>We are</div>
<div className='left-connect-heading1'>the best way to connect with Industry Experts</div>
<br/>
<div className='left-connect-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
    </div>
    
    <div className='right-connect'>
    <div>
        <p>Get Trial version 
to find experts</p>
</div>
<form className='form'>
<p className='label'>Full Name </p>
<input type="text" value="Dhruv123#" className='input'/>
<p className='label'>Email Address </p>
<input type="text" value="Dhruv@Nextyn.com" className='input' />
<button className='form-btn'>Get Started</button>
<br/>
</form>
    </div>
    </div>
  )
}

export default Connect