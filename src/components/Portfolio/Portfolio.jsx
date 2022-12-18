import React, {useState, useEffect} from 'react'
import Proyect from './Proyect'
import galleryLight from '../../assets/images/gallerylightbox.png'
import formAnimate from '../../assets/images/formanimate.png'
import landingLight from '../../assets/images/landinglightbox.png'
import menuClip from '../../assets/images/menuclippath.png'
import easybank from '../../assets/images/easybank.png'
import fylo from '../../assets/images/fylo.png'
import huddle from '../../assets/images/huddle.png'
import devtools from '../../assets/images/devtools.png'

function Portfolio() {
  const data = [
    {
      id: 1,
      name: "Gallery Light Box",
      img: galleryLight,
      github: "https://github.com/padermo/GalleryLightBox",
      demo: "https://gallery-light-box.vercel.app/"
    },
    {
      id: 2,
      name: "Form Animate",
      img: formAnimate,
      github: "https://github.com/padermo/FormAnimate",
      demo: "https://form-animate.vercel.app/"
    },
    {
      id: 3,
      name: "Landing Light Box",
      img: landingLight,
      github: "https://github.com/padermo/LandingLightBox",
      demo: "https://landing-light-box.vercel.app/"
    },
    {
      id: 4,
      name: "Menu CLip Path",
      img: menuClip,
      github: "https://github.com/padermo/MenuClipPath",
      demo: "https://menu-clip-path.vercel.app/"
    },
    {
      id: 5,
      name: "Landing Easybank",
      img: easybank,
      github: "https://github.com/padermo/FrontendLandingTres",
      demo: "https://frontend-landing-easybank.vercel.app/"
    },
    {
      id: 6,
      name: "Landing Fylo",
      img: fylo,
      github: "https://github.com/padermo/FrontendLandingDos",
      demo: "https://frontend-landing-fylo.vercel.app/"
    },
    {
      id: 7,
      name: "Landing Huddle",
      img: huddle,
      github: "https://github.com/padermo/FrontendLandingUno",
      demo: "https://frontend-landing-huddle.vercel.app/"
    },
    {
      id: 8,
      name: "DevTools",
      img: devtools,
      github: "https://github.com/padermo/Devtools",
      demo: "https://devtools-eta.vercel.app/"
    },
  ];

  const [viewProyect, setViewProyect] = useState();

  const onLoad = () => {
    setViewProyect(
      data.map(e => (
        <Proyect key={e.id} name={e.name} img={e.img} github={e.github} demo={e.demo}/>
      ))
    )
  }

  useEffect(()=> {
    onLoad();
  },[]);

  return (
    <section className='portfolio' id='portfolio'>
      <div className="portfolio__content container">
        <h2 className="title title--bottom">Portfolio</h2>
        <div className="portfolio__info">
          {viewProyect}
        </div>
      </div>
    </section>
  )
}

export default Portfolio