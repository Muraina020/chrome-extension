import React from 'react'
import "./home.css"
import Layer1 from "../../assets/Layer1.png"
import Layer22 from "../../assets/Layer22.png"
import hands from "../../assets/hands.png"
import Layer2 from "../../assets/Layer2.png"
import Layer4 from "../../assets/Layer4.png"
import icon from "../../assets/icon.png"

const Home = () => {
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='img-Wrapper'>
                <span className='leys'>
                    <div className='ley'>
                    <img src={Layer1} />
                    <span className='help1'>HelpMeOut</span>
                    </div>
                    <p>combination mark</p>
                    </span>
                <span className=''><img src={Layer1} /><p>combination mark iconc</p></span>
            </div>
            {/* <p className='sub-heading'>Variation</p> */}
            <div className='img-Wrapper2'>
                <span className='leys'>
                    <div className='ley'>
                    <img src={Layer22} className='layer22'/>
                    <span className='help2'>HelpMeOut</span>
                    </div>
                    <p>combination mark</p></span>
                <span className='logo'><img src={Layer22}  className='layer22'/><p>combination mark iconc</p></span>
            </div>
            <div className='desc'>
                <span className='Desc-title'>Ideal Description</span>
                <span>The logo for "HelpMeOut" is composed of three main elements: two abstract hands and a central circle. Each component of the logo is symbolic, representing the core values and functionalities of the extension.</span>
            </div>
            <div className='hands'>
                <div className='imgs'>
                    <div>
                    <img src={hands} />
                    </div>
                    <div className='icon'>
                    <img src={icon} />
                    </div>
                     <div>
                    <img src={Layer2} />
                    </div>
                </div>
                <p>The two hands, illustrated in an abstract manner, signify reaching out, support, and collaboration. They embody the willingness to assist and the mutual exchange of knowledge and skills, which are fundamental to the extension's purpose.</p>
            </div>
            <div className='Layer4'>
                <div className='imgs'>
                    <img src={Layer4} />
                </div>
                <p>The circle at the centre represents an idea or knowledge being shared among users.</p>
            </div>
            <div className='Layer5'>
                <div className='imgs'>
                    <img src={Layer1} />
                </div>
                <p>Together, the hands reaching towards the circle symbolize the act of sharing valuable insights, tips, and solutions with family, friends, colleagues, or anyone in need of assistance. The interaction between the hands and the circle reflects the essence of "HelpMeOut" – fostering a community of learning, helping, and sharing.</p>
            </div>
        </div>
    </div>
  )
}

export default Home