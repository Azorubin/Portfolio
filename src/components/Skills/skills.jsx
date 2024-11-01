<<<<<<< HEAD
import React from 'react';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

export const Skills = () => {
  return (
    <section id="skills" className="overflow-hidden w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <span className='text-3xl md:text-4xl font-semibold pt-12 mb-6'>Обо мне</span>
        <span className='font-normal text-base md:text-lg max-w-2xl px-4'>
          Я — специалист, который занимается разработкой дизайна веб-сайтов и веб-приложений. <br />
          Моя основная задача — сделать проект привлекательным, удобным и функциональным для пользователей.
          <br />
          Я обладаю широким спектром умений и навыков, которые позволяют мне создавать качественный проект. Вот некоторые из навыков:
        </span>
        <div className='mt-6 w-full max-w-4xl text-left'>
            <div className='flex items-center bg-gray-800 p-6 rounded-lg mb-4'>
                <img src={UIDesign} alt='UIDesign' className='object-cover h-12 w-12 md:h-16 md:w-16 m-4' />
                <div className='ml-4'>
                    <h2 className='text-lg md:text-xl font-bold'>UI/UX Design</h2>
                    <p className='text-sm md:text-base font-light'>Дизайн отвечает за внешний вид интерфейса</p>
                </div>
            </div>
            <div className='flex items-center bg-gray-800 p-6 rounded-lg mb-4'>
                <img src={WebDesign} alt='WebDesign' className='object-cover h-12 w-12 md:h-16 md:w-16 m-4' />
                <div className='ml-4'>
                    <h2 className='text-lg md:text-xl font-bold'>Website Design</h2>
                    <p className='text-sm md:text-base font-light'>Визуальное оформление вебсайта с целью сделать его привлекательным для пользователей<br /> и повысить конверсию</p>
                </div>
            </div>
            <div className='flex items-center bg-gray-800 p-6 rounded-lg mb-4'>
                <img src={AppDesign} alt='AppDesign' className='object-cover h-12 w-12 md:h-16 md:w-16 m-4' />
                <div className='ml-4'>
                    <h2 className='text-lg md:text-xl font-bold'>Application Design</h2>
                    <p className='text-sm md:text-base font-light'>Разработка интерфейса мобильного приложения, который будет интуитивно понятен и удобен для пользователя</p>
                </div>
            </div>
        </div>
=======
import './skills.css'
import React from 'react'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


export const Skills = () => {
  return (
    <section id="skills" >
        <span className='skillTitle'>Обо мне</span>
        <span className='skillDesc'>Я — специалист, который занимается разработкой дизайна веб-сайтов и веб-приложений. <br/>Моя основная задача — сделать проект привлекательным, удобным и функциональным для пользователей.

Я обладаю широким спектром умений и навыков, которые позволяют мне создавать качественный проект. Вот некоторые из навыков:</span>
        <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'></img>
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                 <p>Дизайн отвечает за внешний вид интерфейса</p> 
            </div>
        </div>
        <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>
            <div className='skillBarText'>
                <h2>Website Design</h2>
                 <p>Визуальное оформление вебсайта с целью сделать его привлекательным для пользователей<br/> и повысить конверсию</p> 
            </div>
        </div>
        <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg'></img>
            <div className='skillBarText'>
                <h2>Application Design</h2>
                 <p>Разработка интерфейса мобильного приложения, который будет интуитивно понятен и удобен для пользователя</p> 
            </div>
        </div>
        </div>
>>>>>>> a3f109759cf48dc0d17f6cbba84e7eba50afaa56
    </section>
  )
}
