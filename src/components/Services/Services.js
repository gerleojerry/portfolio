import React from 'react';
import './Services.css';
import {FiDatabase} from 'react-icons/fi';
import {AiOutlineLayout} from 'react-icons/ai';
import {BsFileCodeFill} from 'react-icons/bs';
import {GrRobot} from 'react-icons/gr';


function Services() {
  return (
    <section className='services' id='services'>

      <div className='container'>
        <h2 className='services__title' >MY SERVICES</h2>

        <div className='services__content'>
        
          <div className='services__list' >
            <div className='services__list__item'  > < FiDatabase color={'green'} /> DATA SCIENCE</div>
            <div className='services__list__item'  > < AiOutlineLayout/> FRONT END DEVELOPMENT</div>
          </div>

          <div className='services__list' >
            <div className='services__list__item' >  < BsFileCodeFill className='services__icons
            '/> BACKEND DEVELOPMENT</div>
            <div className='services__list__item'> <GrRobot className='services__icons
            ' />MACHINE LEARNING</div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Services