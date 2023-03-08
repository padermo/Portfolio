import React, { useState, useEffect } from "react";

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
  ];
  const [skills, setSkills] = useState();

  useEffect(() => {
    setSkills(datos.map((e) => <p key={e} className="skill">{e}</p>));
  }, []);

  return (
    <section className="skills">
      <h2 className="title">Skills</h2>

      <div className="skills__data">{skills}</div>
    </section>
  );
}

export default Skills;
