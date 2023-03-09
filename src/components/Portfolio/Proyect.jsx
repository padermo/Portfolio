import React from 'react'

function Proyect({img, name, github, demo}) {
  return (
    <div className='proyect'>
      <figure className="proyect__picture">
        <img src={img} alt={`Img ${name}`} className="proyect__img" />
      </figure>
      
      <div className="proyect__data">
        <h3 className="proyect__subtitle">{name}</h3>
        <div className="proyect__links">
          <a href={github} className="proyect__link" target="_blank" rel='noreferrer'>GitHub</a>
          {demo? <a href={demo} className="proyect__link" target="_blank" rel='noreferrer'>Demo</a> : ""}
        </div>
      </div>
    </div>
  )
}

export default Proyect