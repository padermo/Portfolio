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
import countries from '../../assets/images/countries.jpeg'
import formik from '../../assets/images/formik.png'
import cloudinary from '../../assets/images/cloudinary.png'
import rick from '../../assets/images/rick.png'
import weather from '../../assets/images/weather.png'
import lazy from '../../assets/images/lazy.png'
import movies from '../../assets/images/movies.png'

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
      github: "https://github.com/padermo/DevTools",
      demo: "https://dev-tools-nu.vercel.app/"
    },
    {
      id: 9,
      name: "Countries",
      img: countries,
      github: "https://github.com/padermo/CountriesApi",
    },
    {
      id: 10,
      name: "React Formik",
      img: formik,
      github: "https://github.com/padermo/FormReactFormik",
      demo: "https://form-react-formik.vercel.app/"
    },
    {
      id: 11,
      name: "React Cloudinary",
      img: cloudinary,
      github: "https://github.com/padermo/ReactCloudinary",
      demo: "https://react-cloudinary-seven.vercel.app/"
    },
    {
      id: 12,
      name: "Rick & Morty",
      img: rick,
      github: "https://github.com/padermo/RickAndMorty",
      demo: "https://rick-and-morty-silk.vercel.app/"
    },
    {
      id: 13,
      name: "Weather",
      img: weather,
      github: "https://github.com/padermo/Weather",
      demo: "https://weather-henna-five.vercel.app/"
    },
    {
      id: 14,
      name: "Movies",
      img: movies,
      github: "https://github.com/padermo/Movies",
      demo: "https://movies-eight-mu.vercel.app/"
    },
    {
      id: 15,
      name: "Lazy loadin & skeleton",
      img: lazy,
      github: "https://github.com/padermo/LazySkeleton",
      demo: "https://lazy-skeleton.vercel.app/"
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
      <div className="portfolio__content">
        <h2 className="title">Portfolio</h2>
        <div className="portfolio__info">
          {viewProyect}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
