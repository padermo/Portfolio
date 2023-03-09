import React from 'react'
import logo from '../../assets/icons/logo.svg'

function Navbar() {
  return (
    <nav className='nav'>
      <div className="nav__content">
        <figure className='nav__picture'>
          <img src={logo} alt="Img icon" className='nav__img' />
        </figure>

        <div className='nav__links' >
          <a href="#home" className='nav__link'>Home</a>
          <a href="#services" className='nav__link'>Services</a>
          <a href="#portfolio" className='nav__link'>Portfolio</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar