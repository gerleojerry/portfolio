import React from 'react';
import './Projects.css';
import {BsArrowRight} from 'react-icons/bs';

function Projects() {
  return (
    <>

      <section id='projects' className='projects'>
        <div className='projects__container'>

          <h2 className='projects__header'>PROJECTS</h2>
          <div className='projects__content'>

            <div className='projects__card'>
              <img className='projects__card__img' src='images/eduford.png' alt='' />
              <div className='projects__card__title'>School Website</div>
              <div className='projects__card__subtitle'>HTML, CSS,  JS </div>
              <div className='projects__card__actions'>
                <a className='projects__card__links projects__card__code' href='https://github.com/gerleojerry/website6' >View Code <BsArrowRight size={20} className='projects__icon'/> </a>
                <a href='https://gerleo-website6.netlify.app/' className='projects__card__links projects__card__preview' >Live Preview</a>
              </div>
            </div>
            
            <div className='projects__card'>
              <img className='projects__card__img' src='images/koffee.png' alt='' />     
              <div className='projects__card__title'>Coffee Website</div>
              <div className='projects__card__subtitle'>HTML, CSS, JS </div>
              <div className='projects__card__actions'>
                <a className='projects__card__links projects__card__code' href='https://github.com/gerleojerry/koffeee-website' >View Code <BsArrowRight size={20} className='projects__icon'/> </a>
                <a href='https://koffeee.netlify.app/' className='projects__card__links projects__card__preview' >Live Preview</a>
              </div>
            </div>

          </div>
          {/* THIS IS THE END OF THE PROJECT__CONTENT. */}
          <div className='projects__content'>

            <div className='projects__card'>
              <img className='projects__card__img' src='images/car.png' alt='' />
              <div className='projects__card__title'>Car Website</div>
              <div className='projects__card__subtitle'>HTML, CSS, React</div>
              <div className='projects__card__actions'>
                <a className='projects__card__links projects__card__code' href='https://github.com/gerleojerry/Car-Website' >View Code <BsArrowRight size={20} className='projects__icon'/> </a>
                <a href='https://vocal-pegasus-e3c9aa.netlify.app/' className='projects__card__links projects__card__preview' >Live Preview</a>
              </div>
            </div>
            
            <div className='projects__card'>
              <img className='projects__card__img' src='images/fotogenic.png' alt='' />
              <div className='projects__card__title'>Photo Website</div>
              <div className='projects__card__subtitle'>HTML, CSS, VUE JS</div>
              <div className='projects__card__actions'>
                <a className='projects__card__links projects__card__code' href='https://github.com/gerleojerry/Photogenic-website-' >View Code <BsArrowRight size={20} className='projects__icon'/> </a>
                <a href='https://venerable-eclair-ada3bd.netlify.app/' className='projects__card__links projects__card__preview' >Live Preview</a>
              </div>
            </div>

          </div>
          {/* THIS IS THE END OF THE PROJECT__CONTENT. */}
        </div>

      </section>

    </>
  )
}

export default Projects