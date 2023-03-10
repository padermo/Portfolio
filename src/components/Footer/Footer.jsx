import React from 'react'
import {useTranslation} from 'react-i18next';

function Footer() {
  const [t] = useTranslation("global");
  return (
    <section className='footer'>
      <div className="footer__content">
        <h2 className="footer__title">&copy; Padermo. All Rights Reserved</h2>
        <div className="footer__menu">
          <a href="#home" className="footer__link">{t("navbar.home")}</a>
          <a href="#services" className="footer__link">{t("navbar.services")}</a>
          <a href="#portfolio" className="footer__link">{t("navbar.portfolio")}</a>
        </div>
      </div>
    </section>
  )
}

export default Footer