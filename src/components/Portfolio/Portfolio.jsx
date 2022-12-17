import React, {useState, useEffect} from 'react'
import Proyect from './Proyect'
import galleryLight from '../../assets/images/gallerylightbox.png'

function Portfolio() {
  const data = [
    {
      id: 1,
      name: "Gallery Light Box",
      img: galleryLight,
      github: "https://github.com/padermo/GalleryLightBox",
      demo: "https://gallery-light-box.vercel.app/"
    },
  ];

  const [viewProyect, setViewProyect] = useState();

  const onLoad = () => {
    setViewProyect(
      data.map(e => (
        <Proyect name={e.name} img={e.img} github={e.github} demo={e.demo}/>
      ))
    )
  }

  useEffect(()=> {
    onLoad();
  },[]);

  return (
    <section className='portfolio' id='portfolio'>
      <div className="portfolio__content container">
        <h2 className="title title__margin">Portfolio</h2>
        <div className="portfolio__info">
          {viewProyect}
        </div>
      </div>
    </section>
  )
}

export default Portfolio