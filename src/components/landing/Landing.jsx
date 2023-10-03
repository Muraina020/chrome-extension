import React from 'react'
import Layer1 from "../../assets/Layer1.png"
import adobe2 from "../../assets/adobe2.png"
import adobe3 from "../../assets/adobe3.png"
import adobe4 from "../../assets/adobe4.png"
import holder1 from "../../assets/holder1.png"
import holder2 from "../../assets/holder2.png"
import holder3 from "../../assets/holder3.png"
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import imgone from "../../assets/imgone.png"
import repo from "../../assets/repo.png"
import "./landing.css"
import Footer from '../footer/Footer'

const Landing = () => {
  return (
    <div className='landing'>
         <div className='header'>
            <div className='logo'><img src={Layer1} /><span className='text'>HelpMeOut</span></div>
            <div className='mid-text'><span>Features</span> <span>How it works</span></div>
           <a href="">Get started</a>       
            </div>

            <div className='show'>
             <div className='lef'>
                <h2>Show Them Don’t Just Tell</h2>
                <span>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</span>
                <button className='btn'>Install Helpmeout</button>
             </div>
             <div className='righ'>
                <div className='img-col1'>
                    <img src={adobe2}/>
                    <img src={adobe3} />
                    </div>
                    <div className='img-col2'>
                   <img src={adobe4}/>
                  </div>
             </div>
            </div>

        <div className='titles'>
            <h3>Fearture</h3>
            <span>Key Highlight of our Extenssion</span>
            </div>

            <div className='feature'>
                <div f-left>
              <div className='simple-cont'>
                <img src={holder1} />
                <div className='simple'>
                    <label>Simple Screen Record</label>
                    <span>Effortless screen recording for everyone. Record with ease, no tech expertise required.</span>
                </div>
              </div>
              <div className='simple-cont'>
                <img src={holder2}/>
                <div className='simple'>
                    <label>Simple Screen Record</label>
                    <span>Effortless screen recording for everyone. Record with ease, no tech expertise required.</span>
                </div>
              </div>
              <div className='simple-cont'>
                <img src={holder3} />
                <div className='simple'>
                    <label>Simple Screen Record</label>
                    <span>Effortless screen recording for everyone. Record with ease, no tech expertise required.</span>
                </div>
              </div>
                </div>
                <div className='f-right'>
                    <img src={repo} />
                </div>
            </div>

            <div className='titles'>
            <h3>How It Works</h3>
            </div>

            <div className='works'>
              <div className='works-cont'>
                <div className='img-num'>
                <img src={one} />
                </div>
                <label>Record Screen</label>
                <span>Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.</span>
                <div className='works-img'>
                  <img src={imgone} />
                </div>
              </div>
              <div className='works-cont'>
                <div className='img-num'>
                <img src={two}/>
                </div>
                <label>Record Screen</label>
                <span>Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.</span>
                <div className='works-img'>
                  <img src={imgone} />
                </div>
              </div>
              <div className='works-cont'>
                <div className='img-num'>
                <img src={three} />
                </div>
                <label>Record Screen</label>
                <span>Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.</span>
                <div className='works-img'>
                  <img src={imgone} />
                </div>
              </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Landing