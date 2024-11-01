<<<<<<< HEAD
import React from 'react';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro" className="h-[calc(100vh-4rem)] w-full max-w-[75rem] mx-auto overflow-hidden relative">
      <div className="h-full w-full p-8 flex flex-col justify-center text-3xl font-bold">
        <span className="text-1.75rem font-light">Приветствую</span>
        <span className="introText">
          Я <span className="text-yellow-500">Андрей Каримов</span>
          <br /> Начинающий веб-дизайнер
          <p className="text-base tracking-wide font-light">
            Занимаюсь веб-разработкой на React.
          </p>
        </span>
        <Link to="contact" smooth={true}>
        <button
  className="bg-white my-4 py-3 px-6 rounded-full flex items-center justify-center"
  onClick={() => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }}
>
  <img src={btnImg} alt="Связаться" className="h-4 w-4 mr-2" /> {/* Добавлен фильтр для черного цвета изображения */}
  <span className="text-base text-black">Связаться со мной</span> {/* Добавлен класс text-black для текста */}
</button>


        </Link>
      </div>
      <img
        src={bg}
        alt="Profile"
        className="absolute top-[-15rem] right-[-3rem] z-[-1] object-cover h-screen"
      />
    </section>
  );
}

export default Intro;
=======
import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
        <span className="hello">Приветствую,</span>
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

>>>>>>> a3f109759cf48dc0d17f6cbba84e7eba50afaa56
