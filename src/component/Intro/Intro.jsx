import React from 'react'
import "./Intro.css"
import  img from "../../asset/image copy.png"
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent" data-aos="slide-right">
            <span className="hello">Hi, I’m <span className="introName">Kaustubh</span></span>
            {/* <span className="introText">I'm <span className="introName">Kaustubh</span><br/>Blockchain Developer</span> */}
            <p className="introPara">I am a skilled blockchain developer with <br/>experience designing, deploying, and managing decentralized applications.<br/>  I'm proficient in various platforms, ready to craft secure and innovative solutions.</p>
            <Link to="/about"><button className="introBtn">Know more</button></Link>
        </div>
       <img src={img} alt="" className='bg' data-aos="slide-left"/>
        
      </section>
    </div>
  )
}

export default Intro
