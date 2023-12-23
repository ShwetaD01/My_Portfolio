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
                <div className="text-1 animate__animated animate__bounce animate__delay-2s animate__infinite">Hello, my name is</div>
                <div className="text-2 animate__animated animate__bounce animate__delay-3s animate__infinite">Shweta Donode</div>
                <div class="typing-container">
  </div>
                <div className="text-3">And I'm a
                <span style={{marginLeft:"10px"}}>
                <ReactTyped
          strings={[" Software Developer"," Frontend Developer", " Proud Indian", " IITian"]}
          typeSpeed={80}
          loop
          backSpeed={10}
          cursorChar=">"
          showCursor={true}
        />
                </span>
               
                
                </div>
                <div className="classbox animate__animated animate__bounceInUp">
                <a href="https://rb.gy/0k1a4f">Hire me</a>
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
