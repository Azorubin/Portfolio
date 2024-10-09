import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
        <span className="hello">Приветствую</span>
        <span className="introText">Я <span className="introName">Андрей К.</span><br/>Начинающий веб-дизайнер
        <p className="introPara">Занимаюсь веб-разработкой на React.</p>
          </span>
        <Link><button className="btn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}><img src={btnImg} alt="Связаться" className='btnImg' />Связаться со мной</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg' ></img>
    </section>
  )
}

export default Intro

