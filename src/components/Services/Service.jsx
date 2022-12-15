import React from 'react'

function Service({id, img, title, paragraph}) {
  return (
    <div className='service'>
      <figure className="service__picture">
        <img src={img} alt={`Img ${id}`} className="service__img" />
      </figure>

      <div className="service__texts">
        <h3 className="service__title">{title}</h3>
        <p className="service__paragraph">{paragraph}</p>
      </div>
    </div>
  )
}

export default Service