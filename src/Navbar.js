import React from 'react'

const Navbar = () => {
  return (
    <div id="header">
    <div class="container">
        <nav>
            <h1>Portfolio</h1>
            <ul id="sidemenu">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>        
                <li><a href="#services">Projects</a></li>    
                <li><a href="#portfolio">Certifications</a></li>   
                <li><a href="#contact">Contact</a></li> 
                <i class="fas fa-times" onclick="closemenu()"></i>
            </ul>
            <i class="fas fa-bars" onclick="openmenu()"></i>
        </nav>
        <div class="header-text">
            <h1>Hi, I'm <span>Ajay</span></h1>
            <p>Full Stack Developer</p>
        </div>
        <i style={{fontSize: "small"}}><q>I build responsive and visually engaging web experiences</q></i>
    </div>
</div>
  )
}

export default Navbar
