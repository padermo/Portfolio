import React from 'react'
import logo from '../../assets/icons/logo.svg'

function Navbar() {
  return (
    <nav className='nav'>
      <figure className='nav__picture'>
        <img src={logo} alt="Img icon" className='nav__img' />
      </figure>

      <div className='nav__links'>
        <a href="#home" className='nav__link'>Home</a>
        <a href="#about" className='nav__link'>About</a>
        <a href="#skills" className='nav__link'>Skills</a>
        <a href="#servicios" className='nav__link'>Services</a>
        <a href="#portfolio" className='nav__link'>Portfolio</a>
        <a href="#contact" className='nav__link'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar