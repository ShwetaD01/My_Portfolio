import React from 'react'
import ReactTyped from 'react-typed';
// import Image from "../../public/linkedin.jpeg"
const About = () => {
  return (
    <div>
       <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src="https://media.licdn.com/dms/image/C4E03AQFbq3uiKpb4ow/profile-displayphoto-shrink_200_200/0/1653304334065?e=2147483647&v=beta&t=7AU9CqgvnkbjLUWMSNHxk9ZxkCbFWIzyQVj1IWNGkq0"
                     alt="profile_image"/>
                </div>
                <div className="column right">
                    <div className="text" style={{marginRight:"10px"}}>I'm Shweta and I'm a 
                    <span style={{marginLeft:"10px"}}>
                <ReactTyped
          strings={[" Software Engineer"," Frontend Developer", " Proud Indian", " IITan"]}
          typeSpeed={80}
          loop
          backSpeed={10}
          cursorChar=">"
          showCursor={true}
        />
                </span>
               
        </div>
                    <p>
Greetings! I'm Shweta, a dedicated software developer driven by a passion for precision and innovation. With a solid foundation in chemical engineering and a post-graduation from IIT Kharagpur, I bring a unique blend of technical acumen and problem-solving skills to the realm of software development.

<br></br>
My experience at the intersection of engineering and technology has equipped me with a diverse skill set, allowing me to approach challenges from multiple perspectives.

As I continue to evolve in this dynamic field, I'm eager to contribute my expertise, passion, and commitment to projects that push boundaries and drive meaningful change.

  </p>
                    <a href="https://drive.google.com/file/d/1ZSUbUa1yvxlwEdkWVs9PTMULUoWmdDRY/view?usp=drive_link" download="https://drive.google.com/file/d/1ZSUbUa1yvxlwEdkWVs9PTMULUoWmdDRY/view?usp=drive_link">Download CV</a>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default About
