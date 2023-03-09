import React, { useState, useEffect } from "react";
import {useTranslation} from 'react-i18next';

function Skills() {
  const datos = [
    "React JS",
    "JavaScript",
    "CSS3",
    "HTML5",
    "Sass",
    "Node JS",
    "Express",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redux",
    "Git",
    "Sequelize",
    "Bootstrap",
    "Firebase",
    "Jest",
    "Figma",
  ];
  const [skills, setSkills] = useState();
  const [t] = useTranslation("global");

  useEffect(() => {
    setSkills(datos.map((e) => <p key={e} className="skill">{e}</p>));
  }, []);

  return (
    <section className="skills">
      <h2 className="title">{t("skills.title")}</h2>

      <div className="skills__data">{skills}</div>
    </section>
  );
}

export default Skills;
