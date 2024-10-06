import React, { useRef } from 'react'
import './contact.css'
import Reactiv from '../../assets/react.png'
import JavaScript from '../../assets/javascript.png'
import htmlPng from '../../assets/html.png'
import cssPng from '../../assets/css.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubrIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from "@emailjs/browser"

export const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u8dxxdd', 'template_5okpcqp', form.current, 'aDTY7qkUTMbfD2vZx')
      .then(
        (result) => {
          console.log('SUCCESS!',result.text);
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contactPage">
        <div id="steck">
            <h1 className="contactPageTitle">Мой стек технологий</h1>
            <p className="steckDesc">В работе с проектами я использую</p>
            <div className="steckImgs">
                <img src={Reactiv} alt="steck" className="steckImg" />
                <img src={JavaScript} alt="steck" className="steckImg" />
                <img src={htmlPng} alt="steck" className="steckImg" />
                <img src={cssPng} alt="steck" className="steckImg" />
            </div>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Связаться со мной</h1>
          <span className="contactDesc">Пожалуйста, заполните данные для того, чтобы связаться со мной</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Ваше Имя' name='your_name'/>
          <input type="email" className="email" placeholder='Выша Почта' name='your_email'/>
          <textarea className='msg' name="message" rows="5" placeholder='Ваше Сообщение'></textarea>
          <button type='submit' value='Send' className="submitBtn">Подтвердить</button>
          <div className="links">
            <img src={FacebookIcon} alt="FacebookIcon" className="link" />
            <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            <img src={YouTubrIcon} alt="YouTubrIcon" className="link" />
            <img src={InstagramIcon} alt="InstagramIcon" className="link" />
          </div>
          </form>
               </div>
    </section>
  )
}
