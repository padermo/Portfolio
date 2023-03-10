import React, { useState, useEffect } from "react";
import github from "../../assets/icons/bxl-github.svg";
import linkedin from "../../assets/icons/bxl-linkedin-square.svg";
import email from "../../assets/icons/bx-envelope.svg";
import whatsapp from "../../assets/icons/bxl-whatsapp.svg";
import up from "../../assets/icons/bx-chevron-up.svg";
import down from "../../assets/icons/bx-chevron-down.svg";
import { useTranslation } from "react-i18next";

function Contact() {
  const [t] = useTranslation("global");

  const [viewData, setViewData] = useState();
  const [viewHidde, setViewHidde] = useState("contact__hidde");
  const [text, setText] = useState(
    <img src={up} alt="icon up" className="contact__icon" />
  );

  const handleClick = () => {
    if (viewHidde === "contact__hidde") {
      setViewHidde("contact__view");
      setText(<img src={down} alt="icon up" className="contact__icon" />);
    } else if (viewHidde === "contact__view") {
      setViewHidde("contact__hidde");
      setText(<img src={up} alt="icon down" className="contact__icon" />);
    }

    setViewData(
      <>
        <a
          href="https://github.com/padermo"
          target="_blank"
          rel="noreferrer"
          className="contact__social contact__social--4"
        >
          <img src={github} alt="icon github" className="contact__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/fabio-andres-estevez-herrera/"
          target="_blank"
          rel="noreferrer"
          className="contact__social contact__social--3"
        >
          <img src={linkedin} alt="icon linkedin" className="contact__icon" />
        </a>
        <a
          href="https://wa.link/kin6ut"
          target="_blank"
          rel="noreferrer"
          className="contact__social contact__social--2"
        >
          <img src={whatsapp} alt="icon whatsapp" className="contact__icon" />
        </a>
        <a
          href="mailto:fabioaeh96@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact__social contact__social--1"
        >
          <img src={email} alt="icon email" className="contact__icon" />
        </a>
      </>
    );
  };

  return (
    <section className="contact">
      <div className={viewHidde}>{viewData}</div>
      <button className="contact__cta" onClick={handleClick}>
        {text}
      </button>
      <p className="contact__cta--tooltip">{t("contact.title")}</p>
    </section>
  );
}

export default Contact;
