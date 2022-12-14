import React, { useState, useEffect } from 'react'
import adobe from "../../assets/icons/adobe-photoshop.svg"
import bootstrap from "../../assets/icons/bootstrap.svg"
import css3 from "../../assets/icons/css-3.svg"
import html5 from "../../assets/icons/html-5.svg"
import javascript from "../../assets/icons/javascript.svg"
import linux from "../../assets/icons/linux-tux.svg"
import node from "../../assets/icons/nodejs-icon.svg"
import postgres from "../../assets/icons/postgresql.svg"
import react from "../../assets/icons/react.svg"
import redux from "../../assets/icons/redux.svg"
import sass from "../../assets/icons/sass.svg"
import sequelize from "../../assets/icons/sequelize.svg"


function Skills() {
  const datos = [
    {
      "id": 1,
      "name": "Adobe Photoshop",
      "img": adobe
    },
    {
      "id": 2,
      "name": "Bootstrap",
      "img": bootstrap
    },
    {
      "id": 3,
      "name": "CSS3",
      "img": css3
    },
    {
      "id": 4,
      "name": "HTML5",
      "img": html5
    },
    {
      "id": 6,
      "name": "JavaScript",
      "img": javascript
    },
    {
      "id": 7,
      "name": "Linux",
      "img": linux
    },
    {
      "id": 8,
      "name": "Node.JS",
      "img": node
    },
    {
      "id": 9,
      "name": "PostgreSQL",
      "img": postgres
    },
    {
      "id": 10,
      "name": "React",
      "img": react
    },
    {
      "id": 11,
      "name": "Redux",
      "img": redux
    },
    {
      "id": 12,
      "name": "Sass",
      "img": sass
    },
    {
      "id": 13,
      "name": "Sequelize",
      "img": sequelize
    }
  ]

  const [skills, setSkills] = useState();

  const onLoad = () => {
    setSkills(
      datos.map(e => (
        <div key={e.id} className="skills__pictures--borde">
          <img src={e.img} alt={e.name} className="skills__img" />
          <h3 className='skills__name'>{e.name}</h3>
        </div>
      ))
    )
  }

  useEffect(() => {
    onLoad()
  },[])

  return (
    <section id='skills' className='skills'>
      <div className="skills__content container">
        <h2 className="title title--margin">Skills</h2>

        <div className="skills__pictures">
          {skills}
        </div>
      </div>
    </section>
  )
}

export default Skills