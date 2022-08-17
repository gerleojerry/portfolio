import React from 'react';
import Header from './header/Header.js';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import './homepage.css';
import Footer from './footer/Footer';

function  Homepage() {
  return (
    <div id='projects' className='homepage'>
     
     <Header />
     <About />
     <Services />
     <Projects />
     <Contact />
     <Footer />
    </div>
  )
}

export default Homepage