import React from 'react'

const Skills = () => {
  return (
    <div>
      <section className="skills" id="skills">
        <div className="max-width">
            <h2 className={`title animate__animated animate__heartBeat animate__infinite`}>My skills</h2>
            <div className="skills-content">
            <div className="carousel owl-carousel">
                <div className="card">
                     <div class="box">
                     <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="html" style={{width:"100px", height:"100px"}}></img>
                     <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="html" style={{width:"100px", height:"100px"}}></img>
                     </div>
                    
                    {/* <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="html"></img>
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="html"></img>
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="html"></img>
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="html"></img>
                     */}
                </div>
                </div>
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default Skills
