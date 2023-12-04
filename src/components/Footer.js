import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <div>
      <footer>
       
            <div style={{display: "flex",padding:"20px"}}>
            <a href="https://github.com/Shweta-819"><GitHubIcon sx={{ fontSize: 50 }}/></a>
            <a href="www.linkedin.com/in/shwetadonode"><LinkedInIcon sx={{ fontSize: 50 }} /></a>
            <a href="https://www.facebook.com/shweta.donode.7"><FacebookIcon sx={{ fontSize: 50 }}/></a>
            <a href="mailto:shwetadonode891@gmail.com"><EmailIcon sx={{ fontSize: 50 }}/></a>
            </div>
        {/* </ul> */}
       
        <p>&copy; 2023 <a href="https://hembdrpun.com.np/" target="_blank"  rel="noreferrer">Made in India</a> | All Rights Reserved |</p>

        <i class="fa fa-facebook-f" style={{fontSize :"48px", color:"red"}}></i>
        <i class="fa fa-facebook-f" style={{fontSize :"48px", color:"red"}}></i>
    </footer>
    </div>
  )
}

export default Footer
