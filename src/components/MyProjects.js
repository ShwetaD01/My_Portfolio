import React from 'react'

const Projects = () => {
  return (
    <div>
       <section className="teams" id="teams">
        <div className="max-width">
            <h2 className={`title animate__animated animate__backInLeft animate__delay-2s`}>My Projects</h2>
            <div className="carousel owl-carousel">
                <div className="card">
                    <div className="box">
                        <img src="https://static.vecteezy.com/system/resources/previews/017/396/804/original/netflix-mobile-application-logo-free-png.png" alt="netflix"/>
                        <div className="text">Netflix-GPT</div>
                        <p>Exceptional movie recommendation platform, blending cutting-edge AI capabilities, robust user authentication, efficient state management, and a visually appealing design </p>
                        <a href="https://apps.pfcrestaurant.com.np/" className="project" target="_blank" rel="noreferrer">View Project</a>
                    </div>
                </div>
               
                <div className="card">
                    <div className="box">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/019/777/254/small/sketchbook-icon-vector.jpg" alt="sketchbook"/>
                        <div className="text">Sketchbook</div>
                        <p>Platform that empowers users to unleash their creativity in a digital world of art.</p>
                        <a href="https://main--curious-marzipan-421d93.netlify.app" className="project" target="_blank" rel="noreferrer">View Project</a>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="https://static-00.iconduck.com/assets.00/pinterest-icon-512x512-3vn0ggs9.png" alt="img"/>
                        <div className="text">Pintrest</div>
                        <p>NodeJS Project of visual discovery engine for finding ideas</p>
                        <a href="https://ajyotish.com.np/" className="project" target="_blank" rel="noreferrer">View project</a>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    </div>
  )
}

export default Projects
