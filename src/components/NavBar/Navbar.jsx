import React, { useState } from 'react';
<<<<<<< HEAD
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="bg-gray-800 h-20 w-full p-4 flex items-center justify-between sticky top-0 z-30">
            {/* Логотип с отступом слева */}
            <img src={logo} alt="Logo" className='object-cover h-24 w-32  ' /> {/* Отступ слева и справа */} 

            <div className="hidden md:flex space-x-4 flex-grow justify-center"> {/* Центрирование ссылок и равномерное распределение пространства */}
                <Link
                    activeClass='active'
                    to='intro'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-white cursor-pointer hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400"
                >
                    Главная
                </Link>
                <Link
                    activeClass='active'
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-white cursor-pointer hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400"
                >
                    Обо мне
                </Link>
                <Link
                    activeClass='active'
                    to='works'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="text-white cursor-pointer hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400"
                >
                    Портфолио
                </Link>
                <Link
                    activeClass='active'
                    to='steck'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="text-white cursor-pointer hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400"
                >
                    Технологии
                </Link>
            </div>

            {/* Кнопка контактов с отступом справа */}
            <button
                className="hidden md:flex bg-white text-black px-4 py-2 rounded-full flex items-center mr-2" // Отступ справа
                onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <img src={contactImg} alt="Contact" className="h-4 w-4 mr-2 text-black" /> Связаться
            </button>

            {/* Иконка меню для мобильных устройств */}
            <img
                src={menu}
                alt="Menu"
                className='h-7 md:hidden cursor-pointer'
                onClick={() => setShowMenu(!showMenu)}
                aria-expanded={showMenu}
                aria-controls="navMenu"
            />

            {/* Мобильное меню */}
            {showMenu && (
                <div className="absolute top-16 right-4 z-20 flex flex-col bg-gray-900 rounded-lg p-2">
                    <Link
                        activeClass='active'
                        to='intro'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="text-white p-2 cursor-pointer hover:bg-gray-700"
                        onClick={() => setShowMenu(false)}
                    >
                        Главная
                    </Link>
                    <Link
                        activeClass='active'
                        to='skills'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="text-white p-2 cursor-pointer hover:bg-gray-700"
                        onClick={() => setShowMenu(false)}
                    >
                        Обо мне
                    </Link>
                    <Link
                        activeClass='active'
                        to='works'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="text-white p-2 cursor-pointer hover:bg-gray-700"
                        onClick={() => setShowMenu(false)}
                    >
                        Портфолио
                    </Link>
                    <Link
                        activeClass='active'
                        to='steck'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="text-white p-2 cursor-pointer hover:bg-gray-700"
                        onClick={() => setShowMenu(false)}
                    >
                        Технологии
                    </Link>
                    <Link
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="text-white p-2 cursor-pointer hover:bg-gray-700"
                        onClick={() => setShowMenu(false)}
                    >
                        Контакты
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
=======
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from'../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png'




const Navbar = () => {
    const[showMenu,setShowMenu]=useState(false);
    return (<nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Главная</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem" >Обо мне</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem" >Портфолио</Link>
        <Link activeClass='active' to='steck' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem" >Технологии</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Связаться
        </button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>{
            setShowMenu(!showMenu)}}/>
        <div className="navMenu" style={{display : showMenu?'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>{
            setShowMenu(false)}}>Главная</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>{
            setShowMenu(false)}}>Обо мне</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>{
            setShowMenu(false)}}>Портфолио</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>{
            setShowMenu(false)}}>Клиенты</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>{
            setShowMenu()}}>Контакты</Link>
        </div>
    </nav>);
}

export default Navbar
>>>>>>> a3f109759cf48dc0d17f6cbba84e7eba50afaa56
