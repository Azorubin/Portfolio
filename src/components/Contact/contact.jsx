import React, { useRef, useState } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // Импорт иконок
import { SiTailwindcss } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa'; // Импорт иконки Telegram
import emailjs from "@emailjs/browser";

const technologyData = [
  { icon: <FaReact className="text-blue-600 w-32 h-32" />, name: 'React' },
  { icon: <FaJs className="text-yellow-500 w-32 h-32" />, name: 'JavaScript' },
  { icon: <FaHtml5 className="text-red-500 w-32 h-32" />, name: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-400 w-32 h-32" />, name: 'CSS3' },
  { icon: <SiTailwindcss className="text-cyan-400 w-32 h-32" />, name: 'Tailwind CSS' },
];

export const Contact = () => {
  const form = useRef();
  const [hoveredTech, setHoveredTech] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_u8dxxdd', 'template_5okpcqp', form.current, 'aDTY7qkUTMbfD2vZx')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contactPage" className="min-h-screen flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center">
      <div id="steck" className="p-8">
        <h1 className="text-4xl mb-4">Мой стек технологий</h1>
        <p className="font-light text-sm">В работе с проектами я использую</p>
        <div className="my-4 flex flex-wrap justify-center">
          {technologyData.map((tech, index) => (
            <div
              key={index}
              className="relative m-4 transition-transform duration-200 hover:scale-110"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {tech.icon}
              {hoveredTech === tech.name && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md p-1">
                  {tech.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div id="contact" className="p-8">
        <h1 className="text-4xl mb-4">Связаться со мной</h1>
        <span className="p-4 font-light text-base">Пожалуйста, заполните данные для того, чтобы связаться со мной</span>
        <form className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto" ref={form} onSubmit={sendEmail}>
          <input type="text" className="font-medium w-full max-w-[40rem] my-2 p-2 text-white bg-gray-800 rounded-md border-none" placeholder='Ваше Имя' name='your_name' />
          <input type="email" className="font-medium w-full max-w-[40rem] my-2 p-2 text-white bg-gray-800 rounded-md border-none" placeholder='Ваша Почта' name='your_email' />
          <textarea className='font-medium w-full max-w-[40rem] my-2 p-2 text-white bg-gray-800 rounded-md border-none' name="message" rows="5" placeholder='Ваше Сообщение'></textarea>
          <button type='submit' className="bg-white rounded-md my-4 py-3 px-6 text-black">Подтвердить</button>
          <a href="https://t.me/Azorubin" target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-500 rounded-md my-4 py-3 px-6 text-white hover:bg-blue-600 transition duration-200">
            <FaTelegramPlane className="mr-2" /> Связаться со мной через Telegram
          </a>
        </form>
      </div>
    </section>
  );
};
