import React from 'react'
import "./ready.css"
import Layer1 from "../../assets/Layer1.png"
import video2 from "../../assets/video2.png"
import {AiOutlinePlayCircle} from "react-icons/ai"
import {FiVolume2} from "react-icons/fi"
import {AiOutlineSetting} from "react-icons/ai"
import Footer from '../footer/Footer'

const Ready = () => {
  return (
    <div className='container_header'>
        <div className='header'>
            <div className='logo'><img src={Layer1} /><span className='text'>HelpMeOut</span></div>
            <div className='mid-text'><span>Features</span> <span>How it works</span></div>
           <a href="">Get started</a>       
            </div>
            <div className='sides'>
        <div className='left-side'>
            <h1>Your video is ready!</h1>
            <label>Name</label>
            <span className='untitle'>Untitled_Video_20232509 <small className='icon'>icon</small></span>

            <div className='input-cont'>
            <div className='input'>
                <input type="email" placeholder='enter email of receiver' />
            </div>
            <button>send</button>
            </div>

            <h3>Video Url</h3>
            <div className='input-cont'>
            <div className='input'>
                <input type="email" placeholder='https://www.helpmeout/united_video_203234764' />
            </div>
            <button className='copy'><span className='icon'>icon</span>send</button>
            </div>
            <h3>Share your video</h3>

            <div className='socio'>
                <span className='media'>
                    <span>icon</span>
                    <span className='fb'>Facebook</span>
                </span>
                <span className='media'>
                    <span>icon</span>
                    <span className='fb'>Facebook</span>
                </span>
                <span className='media'>
                    <span>icon</span>
                    <span className='fb'>Facebook</span>
                </span>
               
            </div>
        </div>
        <div className='right-side'>
            <div className='edit-video'>
                <img src={video2} />
                <div className='icons'>
              <span>0:30 / 3:00</span>
              <div className='volume'>
                <span className='ib'><AiOutlinePlayCircle/><span>play</span></span>
                <span className='ib'><FiVolume2/><span>volume</span></span>
                <span className='ib'><AiOutlineSetting/><span>setting</span></span>
              </div>
              </div>
         </div>
         
          <h2>Transcript</h2>
            <div className='text-cont'>
                <div className='txt'>
                    <span>0.01</span>
                    <span>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</span>
                </div>
                <div className='txt'>
                    <span>0.15</span>
                    <span>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</span>
                </div>
                <div className='txt'>
                    <span>0.13</span>
                    <span>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the</span>
                </div>
            </div>
        </div>
        </div>

        <div className='account'>
            <h2>To ensure the availability and privacy of your video, we recommend saving it to your account.</h2>
            <span className='save'>save video</span>
            <div className='anc'>
                <a href="">Don't have an account ? create account</a>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Ready