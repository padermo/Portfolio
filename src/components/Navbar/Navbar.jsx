import React from 'react'
import logo from '../../assets/icons/logo.svg'
import {useTranslation} from 'react-i18next';

function Navbar() {
  const [t] = useTranslation("global");
  return (
    <nav className='nav'>
      <div className="nav__content">
        <figure className='nav__picture'>
          <img src={logo} alt="Img icon" className='nav__img' />
        </figure>

        <div className='nav__links' >
          <a href="#home" className='nav__link'>{t("navbar.home")}</a>
          <a href="#services" className='nav__link'>{t("navbar.services")}</a>
          <a href="#portfolio" className='nav__link'>{t("navbar.portfolio")}</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar