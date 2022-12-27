import React from 'react'

function Footer() {
  return (
    <section className='footer'>
      <div className="footer__content container">
        <h2 className="title title--margin title-size">&copy; Padermo. All Rights Reserved</h2>
        <div className="footer__menu">
          <a href="#home" className="footer__link">Home</a>
          <a href="#about" className="footer__link">About</a>
          <a href="#skills" className="footer__link">Skills</a>
          <a href="#services" className="footer__link">Services</a>
          <a href="#portfolio" className="footer__link">Portfolio</a>
          <a href="#contact" className="footer__link">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default Footer