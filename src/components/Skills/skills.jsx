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
    </section>
  )
}
