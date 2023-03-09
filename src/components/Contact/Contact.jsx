import React, { useState } from "react";
import github from "../../assets/icons/bxl-github.svg";
import linkedin from "../../assets/icons/bxl-linkedin-square.svg";
import email from "../../assets/icons/bx-envelope.svg";
import whatsapp from "../../assets/icons/bxl-whatsapp.svg";
import up from "../../assets/icons/bx-chevron-up.svg";
import down from "../../assets/icons/bx-chevron-down.svg";

function Contact() {

  const [viewData, setViewData] = useState();
  const [viewHidde, setViewHidde] = useState("contact__hidde");
  const [text, setText] = useState(<img src={up} alt="icon up" className="contact__icon"/>);

  const handleClick = () => {
    if(viewHidde === "contact__hidde"){
      setViewHidde("contact__view");
      setText(<img src={up} alt="icon up" className="contact__icon"/>);
    }else if(viewHidde === "contact__view"){
      setViewHidde("contact__hidde");
      setText(<img src={down} alt="icon down" className="contact__icon"/>);
    }

    setViewData(
      <div className={viewHidde}>
        <a href="https://github.com/padermo" target='_blank' rel="noreferrer" className="contact__social">
          <img src={github} alt="icon github" className="contact__icon" />
        </a>
        <a href="https://www.linkedin.com/in/fabio-andres-estevez-herrera/" target='_blank' rel="noreferrer" className="contact__social">
          <img src={linkedin} alt="icon linkedin" className="contact__icon" />
        </a>
        <a href="https://wa.link/kin6ut" target='_blank' rel="noreferrer" className="contact__social">
          <img src={whatsapp} alt="icon whatsapp" className="contact__icon" />
        </a>
        <a href="mailto:fabioaeh96@gmail.com" target='_blank' rel="noreferrer" className="contact__social">
          <img src={email} alt="icon email" className="contact__icon" />
        </a>
      </div>
    )
  }

  return (
    <section className="contact">
      {viewData}
      <button className="contact__cta" onClick={handleClick}>{text}</button>
    </section>
  );
}

export default Contact;
