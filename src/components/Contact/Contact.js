import React from "react";
import {FiPhone} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';
import {ImLocation} from 'react-icons/im';
import {IoIosSend} from 'react-icons/io';
import './Contact.css';

function Contact() {
  return (
    <>
      <section className="contact">

        <div className="contact__container">

          <div className='contact__address'>

            <h2 className="contact__title">CONTACT</h2>
            <div className="contact__content">
              <div className="contact__phone" > <FiPhone className="contact__icons"/>  08164123725 </div>
              <div className="contact__mail" > <AiOutlineMail className="contact__icons"/> gerleojerry@gmail.com</div>
              <div className="contact__location" > 
              <ImLocation className="contact__icons"/> 5,Banire Street, Obawole, Ifako Ijaye, Lagos, Nigeria.</div>
            </div>

            
          </div>

          <div className="contact__message">
            <form className="form">
              <div className='form__sender__details'>
                <div className="form__group form__small">
                  <label htmlFor="name" className="form__name__label form__label">Your name</label>
                  <input id='name' type='text' className="form__name form__input" />
                </div>

                <div className="form__group form__big">
                  <label htmlFor="mail" className="form__mail__label form__label">Your mail</label>
                  <input id='mail' type='text' className="form__mail form__input" />
                </div>
              </div>

              <div className="form__group">
                <label htmlFor="subject" className="form__subject__label form__label">Subject</label>
                  <input id = 'subject' type='text' className="form__subject form__input" />
              </div>

              <div className="form__group">
                <label htmlFor="message" className="form__message__label form__label">Message</label>

                <textarea rows={10} id = 'message' className="form__message form__input"  ></textarea>
              </div>

              <button className="form__button"> Send < IoIosSend className="form__button__icon" /> </button>

            </form>

          </div>

        </div>

      </section>
    </>
  )
}

export default Contact
