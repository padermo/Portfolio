import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__content container">
        <div className="footer__info">
          <h2 className="footer__title">© Padermo Portfolio. All Rights Reserved</h2>
          <div className="footer__menu">
            <a href="#home" className="footer__link">Home</a>
            <a href="#about" className="footer__link">About</a>
            <a href="#skills" className="footer__link">Skills</a>
            <a href="#servicios" className="footer__link">Services</a>
            <a href="#portfolio" className="footer__link">Portfolio</a>
            <a href="#contact" className="footer__link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer