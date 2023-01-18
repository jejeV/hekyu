import React from 'react'
import "./about.css";
import Image from "../../assets/avatar-2.svg"

const About = () => {
  return (
    <section className="about container section" id='about'>
     <h2 className="section__title">About Me</h2>

     <div className="about__container grid">
       <img src={Image} alt="" className="img__about" />

       <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">I am Samuel Jason Rain, web
          developer from Depok, Indonesia. I love coding and design.</p>
          <a href="" className="btn">Download CV</a>
        </div>

        <div className="about__skills grid"></div>
       </div>
     </div>
    </section>
  )
}

export default About