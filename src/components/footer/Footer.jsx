import React from 'react'
import "./footer.css"
import Layer3 from "../../assets/Layer3.png"


const Footer = () => {
  return (
  
    <div className='footer'>
        
        <div className='logo'><img src={Layer3} /><span className='tex'>HelpMeOut</span></div>

        <div className='menu'>
            <h3>Menu</h3>
            <span>Home</span>
            <span>converter</span>
            <span>How it works</span>
        </div>
        <div className='menu'>
            <h3>About</h3>
            <span>about</span>
            <span>Privacy</span>
            <span>Policy</span>
        </div>
        <div className='menu'>
            <h3>Screen Record</h3>
            <span>Browser window</span>
            <span>Desktop</span>
            <span>Application</span>
        </div>
    </div>

  )
}

export default Footer