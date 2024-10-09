import React, { useState } from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolioWeather.PNG'
import Portfolio2 from '../../assets/calculator.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'
import Weather from './Weather'
import Calculator from './Calculator'


export const Works = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenPopup = (project) => {
        setSelectedProject(project);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedProject(null);
    };

  const projects = [
    {
        id: 1,
        title: "Прогноз погоды",
        image: Portfolio1,
        component: <Weather />
    },
    {
        id: 2,
        title: "Калькулятор",
        image: Portfolio2,
        component: <Calculator />
    },
    //  {
    //      id: 3,
    //      title: 
    //      image: Portfolio3,
    //      component: 
    //  },
    // {
    //     id: 4,
    //     title: "Проект 4",
    //     image: Portfolio4,
    //     component: <div>Описание проекта 4</div>
    // },
    // {
    //     id: 5,
    //     title: "Проект 5",
    //     image: Portfolio5,
    //     component: <div>Описание проекта 5</div>
    // },
    // {
    //     id: 6,
    //     title: "Проект 6",
    //     image: Portfolio6,
    //     component: <div>Описание проекта 6</div>
    // },
];

  return (
    <section id='works'>
        <h2 className="worksTitle">Портфолио</h2>
        <span className="worksDesc">Я придаю большое значение мелочам и тщательно работаю над проектами, уделяя внимание каждой детали.</span>
        <div className="worksImgs">
                {projects.map((project) => (
                    <img 
                        key={project.id}
                        src={project.image} 
                        alt={project.title} 
                        className="worksImg portfolio-item" 
                        onClick={() => handleOpenPopup(project)} 
                    />
                ))}
            </div>
            <button className="workBtn">Узнать больше</button>

            {isPopupOpen && selectedProject && (
                <div className="popup">
                    <div className="popupContent">
                        <h2>{selectedProject.title}</h2>
                        {selectedProject.component}
                        <button onClick={handleClosePopup} className="workBtn">Закрыть</button>
                    </div>
                </div>
            )}
    </section>
  )
}
