import React from 'react';
import Header from './header/Header.js';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import './homepage.css'

function  Homepage() {
  return (
    <div className='homepage'>
     
     <Header />
     <About />
     <Services />
     <Projects />
    </div>
  )
}

export default Homepage