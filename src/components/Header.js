import React from 'react';
import '../App.css';


const Header = () => {
  return (
    <div>
    <nav className="navbar" style={{
                    overflowY: "scroll",
                    background: "crimson"
                }}>
        <div className="max-width">
            <div className="logo">
            <a href="/">Shw<span>.</span></a>
            </div>
            <ul className="menu">
                <li><a href="#home" className="menu-btn">Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#services" className="menu-btn">Skills</a></li>
                {/* <li><a href="#skills" className="menu-btn">Skills</a></li> */}
                <li><a href="#teams" className="menu-btn">Projects</a></li>
                <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Header;
