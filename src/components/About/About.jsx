import React from "react";
import {useTranslation} from 'react-i18next';

function About() {
  const [t] = useTranslation("global");
  return (
    <section className="about">
      <h2 className="title">{t("about.title")}</h2>
      <p className="about__paragraph">
        {t("about.text")}
      </p>
    </section>
  );
}

export default About;
