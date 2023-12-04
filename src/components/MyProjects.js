import React from 'react'

const Projects = () => {
  return (
    <div>
       <section className="teams" id="teams">
        <div className="max-width">
            <h2 className="title">My Projects</h2>
            <div className="carousel owl-carousel">
                <div className="card">
                    <div className="box">
                        <img src="https://static.vecteezy.com/system/resources/previews/017/396/804/original/netflix-mobile-application-logo-free-png.png" alt="netflix"/>
                        <div className="text">Netflix-GPT</div>
                        <p>SJS hot n spicy is and resturant project . </p>
                        <a href="https://apps.pfcrestaurant.com.np/" className="project" target="_blank" rel="noreferrer">View Project</a>
                    </div>
                </div>
               
                <div className="card">
                    <div className="box">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/019/777/254/small/sketchbook-icon-vector.jpg" alt="sketchbook"/>
                        <div className="text">Sketchbook</div>
                        <p>Deep Computer is an institution project .</p>
                        <a href="https://deepcomputer.edu.np/" className="project" target="_blank" rel="noreferrer">View Project</a>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="https://static-00.iconduck.com/assets.00/pinterest-icon-512x512-3vn0ggs9.png" alt="img"/>
                        <div className="text">Pintrest</div>
                        <p>Lorem ipsum dolor sit amet.</p>
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
