import React, { useState } from 'react';
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