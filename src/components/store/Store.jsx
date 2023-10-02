import React from 'react'
import "./store.css"
import Layer1 from "../../assets/Layer1.png"
import monitor from "../../assets/monitor.png"
import tab from "../../assets/tab.png"
import {AiOutlineAudio} from "react-icons/ai"
import {BsCameraVideo} from "react-icons/bs"
import {TiStar} from "react-icons/ti"
import {CiSettings} from "react-icons/ci"
import {RxSwitch} from "react-icons/rx"
import {AiOutlineCloseCircle} from "react-icons/ai"


const Store = () => {
  return (
    <div className='store'>
         <div className='img-Wrapper'>
                <span className='leys'>
                    <div className='ley'>
                    <img src={Layer1} />
                    <span className='help1'>HelpMeOut</span>
                    </div>
                    <div className='helpout'>
                        <span>Helpmeout.com</span>
                        <span>Feature</span>
                    </div>
                    <div className='product'>
                        <div className='star'>
                        <span><TiStar/></span>
                        <span><TiStar/></span>
                        <span><TiStar/></span>
                        <span><TiStar/></span>
                        <span><TiStar/></span>
                        </div>
                        <span className='pro'>productivity</span>
                        <span>80,000+ users</span>
                    </div>
                    </span>
               <button>Add to chrome</button>
            </div>
            <div className='overview'>
                <span className='active'>Overview</span>
                <span>Privacy practices</span>
                <span>Review</span>
                <span>Related</span>
            </div>
            <div className='sides-cont'>
                <div className='left'>
                <div className='img-Wrapper'>
                    <div className='ley'>
                    <img src={Layer1} />
                    <span className='help1'>HelpMeOut</span>
                    </div>
            <div className='setting'>
               <span><CiSettings/></span>
               <span><AiOutlineCloseCircle/></span>
             </div>
            </div>
            <p>This extension helps you record and share help videos with ease.</p>
             <div className='cama'>
            <div className='screen'>
                <div className='monitor'>
                    <img src={monitor} width={40} height={40} />
               <span>Full Screen</span>
               </div>
               <div className='tab'>
                <img src={tab}  width={40} height={40}/>
               <span>Current Tab</span>
               </div>
            </div>
            <div className='record'>
                <div className='rec'>
               <span className='ic'><BsCameraVideo/></span>
               <span>camera</span>
               </div>
               <span className='sw'><RxSwitch/></span>
            </div>
            <div className='audio'>
                <div className='aud'>
               <span className='ic'><AiOutlineAudio/></span>
               <span>Audio</span>
               </div>
               <span className='sw'><RxSwitch/></span>
            </div>
            <button>Start Recording</button>
            </div>
                </div>

                <div className='right'>
                   <img src={Layer1} width={75} height={75}/>
                    <span className='help1'>HelpMeOut</span>
                    <p>Help out by creating videos on how to get things done and sending out instantly</p>
                    </div>
            </div>
                </div>
            
   
  )
}

export default Store