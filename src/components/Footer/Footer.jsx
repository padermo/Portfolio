import React from 'react'

function Footer() {
  return (
    <section className='footer'>
      <div className="footer__content">
        <h2 className="footer__title">&copy; Padermo. All Rights Reserved</h2>
        <div className="footer__menu">
          <a href="#home" className="footer__link">Home</a>
          <a href="#services" className="footer__link">Services</a>
          <a href="#portfolio" className="footer__link">Portfolio</a>
        </div>
      </div>
    </section>
  )
}

export default Footer