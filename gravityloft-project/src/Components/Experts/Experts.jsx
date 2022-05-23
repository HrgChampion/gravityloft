import React from 'react'
import "./Experts.css"
import expert from "../../../images/Search.png"
import collaborate from "../../../images/collaborate.png"
function Experts() {
  return (
    <div className='experts'>
        <h1>Expert Cloud</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div className='experts-div'>
            <div className='experts-div-left'>
            <div className='left-inside'>
            <div className='search-heading'>Search.</div>
            <div className='search-heading-black'>Top Experts with advanced search.</div>
            <p className='expert-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p style={{color: "#5746EC"}}>Get started {`>`}</p>
            </div>
            </div>
            <div className='experts-div-right'>
            <img src={expert} alt="expert-img" className='expert-img'/>
            </div>
        </div>
<br/>

        <div className='consult-div'>
        <div className='consult-div-left'>
            <img src={expert} alt="expert-img" className='expert-img'/>
            </div>

            <div className='consult-div-right'>
            <div className='left-inside'>
            <div className='search-heading'>Consult. </div>
            <div className='search-heading-black'>with Top Industry Experts</div>
            <p className='expert-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p style={{color: "#5746EC"}}>Get started {`>`}</p>
            </div>
            </div>
            
        </div>
        <br/>
        <div className='collaborate-div'>
        <div className='consult-div-left'>
            <img src={collaborate} alt="expert-img" className='expert-img'/>
            </div>

            <div className='consult-div-right'>
            <div className='left-inside'>
            <div className='search-heading'>Collaborate. </div>
            <div className='search-heading-black'>with Experts is easy now.</div>
            <p className='expert-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p style={{color: "#5746EC"}}>Get started {`>`}</p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Experts