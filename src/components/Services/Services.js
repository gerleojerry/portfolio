import React from 'react';
import './Services.css';
import {FiDatabase} from 'react-icons/fi';
import {AiOutlineLayout} from 'react-icons/ai';
import {BsFileCodeFill} from 'react-icons/bs';
import {FaRobot} from 'react-icons/fa';


function Services() {
  return (
    <>
      <section className='services' id='services'>

        <div className='container'>
          <h2 className='services__title' >MY SERVICES</h2>

          <div className='services__content'>
          
            <div className='services__list' >
              <div className='services__list__item'  > < FiDatabase className='services__icons' /> DATA SCIENCE</div>
              <div className='services__list__item'  > < AiOutlineLayout className='services__icons
              ' /> FRONT END DEVELOPMENT</div>
            </div>

            <div className='services__list' >
              <div className='services__list__item' >  < BsFileCodeFill className='services__icons
              '/> BACKEND DEVELOPMENT</div>
              <div className='services__list__item'> <FaRobot  className='services__icons
              ' />MACHINE LEARNING</div>
            </div>

          </div>

        </div>

      </section>

      <section className='qualifications'>
        <div className='container'> 
          <div className='qualifications__main'>
            <h2>QUALIFICATIONS</h2>

            <div className='qualifications__content'>

              <div className='qualifications__content__data'>
                <div className='qualifications__date'>2016 - 2022</div>

                <div className='qualifications__position'> Computer Science and Engineering. </div>

                <div className='qualifications__organization'>Ladoke Akintola University of Technology, Ogbomoso.</div>
              </div>

              <div className='qualifications__content__data'>
                <div className='qualifications__date'>2021 - 2022</div>

                <div className='qualifications__position'> Data Science (Intern) </div>

                <div className='qualifications__organization'>LAUTECH Data Science, Ogbomoso.</div>
              </div>

            </div>
          </div>

          <div className='qualifications__skills'>

            <h2 className='skills__title' >SKILLS</h2>

            <div className='skills__content' >
              <div className='skills__item'>HTML</div>
              <div className='skills__item'>CSS</div>
              <div className='skills__item'>JavaScript</div>
              <div className='skills__item'>TypeScript</div>
              <div className='skills__item'>React</div>
              <div className='skills__item'>Git &amp; Github</div>
              <div className='skills__item'>Python</div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Services