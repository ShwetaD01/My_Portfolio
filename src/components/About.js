import React from 'react'
import ReactTyped from 'react-typed';
import Image from "./linkedin.jpeg"
const About = () => {
  return (
    <div>
       <section className="about" id="about">
        <div className="max-width">
            <h2 className={`title animate__animated animate__jello animate__infinite`}>About me</h2>
            <div className="about-content">
                <div className="column left">
                
                     <img src={Image} alt="profiile" className={`animate__animated animate__rollIn`}></img>
                </div>
                <div className="column right">
                    <div className={`text animate__animated animate__backInRight animate__delay-5s`} style={{marginRight:"10px"}}>I'm Shweta and I'm a 
                    <span style={{marginLeft:"10px"}}>
                <ReactTyped
          strings={[" Software Developer"," Frontend Developer","ReactJS Developer", " Proud Indian", " IITian"]}
          typeSpeed={80}
          loop
          backSpeed={10}
          cursorChar=">"
          showCursor={true}
        />
                </span>
               
        </div>
                    <p>
Greetings! I'm Shweta, a dedicated software developer with a year of experience driven by a passion for precision and innovation. With a solid foundation in chemical engineering and a post-graduation from IIT Kharagpur, I bring a unique blend of technical acumen and problem-solving skills to the realm of software development.

<br></br>
My experience at the intersection of engineering and technology has equipped me with a diverse skill set, allowing me to approach challenges from multiple perspectives.

As I continue to evolve in this dynamic field, I'm eager to contribute my expertise, passion, and commitment to projects that push boundaries and drive meaningful change.

  </p>
                    <a href="https://rb.gy/0k1a4f" download="https://drive.google.com/file/d/1ZSUbUa1yvxlwEdkWVs9PTMULUoWmdDRY/view?usp=drive_link">Download CV</a>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default About
