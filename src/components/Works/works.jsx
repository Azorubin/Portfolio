import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa'; // Импорт иконки GitHub
import Portfolio1 from '../../assets/portfolioWeather.PNG';
import Portfolio2 from '../../assets/calculator.png';
import Weather from './Weather';
import Calculator from './Calculator';
import './works.css';

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
            component: <Weather />,
            technologies: ["React", "Tailwind CSS", "OpenWeather API"],
        },
        {
            id: 2,
            title: "Калькулятор",
            image: Portfolio2,
            component: <Calculator />,
            technologies: ["React", "Tailwind CSS"],
        },
    ];

    return (
        <section id='works' className="mx-auto min-h-screen max-w-4xl flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-5xl my-4">Портфолио</h2>
            <span className="font-light text-lg max-w-xl">Я придаю большое значение мелочам и тщательно работаю над проектами, уделяя внимание каждой детали.</span>
            <div className="flex flex-wrap justify-center w-full">
                {projects.map((project) => (
                    <img 
                        key={project.id}
                        src={project.image} 
                        alt={project.title} 
                        className="worksImg portfolio-item h-64 w-64 m-4 object-contain cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-lg pulse-animation"  
                        onClick={() => handleOpenPopup(project)} 
                    />
                ))}
            </div>

            {isPopupOpen && selectedProject && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-black bg-opacity-70 p-6 rounded-lg text-center m-4">
                        <h2 className="text-3xl mb-4">{selectedProject.title}</h2>
                        {selectedProject.component}
                        <h3 className="text-lg mt-4">Технологии:</h3>
                        <ul className="list-disc list-inside mb-4">
                            {selectedProject.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                        <button onClick={handleClosePopup} className="bg-white rounded-full my-4 py-3 px-8 text-black">Закрыть</button>
                    </div>
                </div>
            )}

            <div className="mt-8">
                <h3 className="text-2xl mb-2">Дополнительные ссылки:</h3>
                <div className="flex items-center space-x-4">
                    <a 
                        href="https://naturaphotogallery.ru" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-yellow-400 hover:underline text-lg"
                    >
                        Мой личный проект
                    </a>
                    <span>|</span>
                    <div className="flex items-center space-x-1">
                        <FaGithub className="text-lg" />
                        <a 
                            href="https://github.com/Azorubin" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-yellow-400 hover:underline text-lg"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
