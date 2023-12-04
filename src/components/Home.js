import React from 'react';
import ReactTyped from 'react-typed';

const Home = () => {

    
  return (
    <div>
       <section className="home" id="home">
       <div className="area" >
       <ul className="circles">
       <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        <div className="max-width">
            
            <div className="context">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Shweta Donode</div>
                <div class="typing-container">
  </div>
                <div className="text-3">And I'm a
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
                <div className="classbox">
                <a href="/https://drive.google.com/file/d/1ZSUbUa1yvxlwEdkWVs9PTMULUoWmdDRY/view?usp=drive_link">Hire me</a>
            </div>
            {/* <div className="classbox">
                <a href="/">Coffee with me</a>
            </div> */}
        </div>


          
           
                   
           </div>
            
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home
