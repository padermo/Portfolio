import React, { useState, useEffect } from "react";
import Proyect from "./Proyect";
import galleryLight from "../../assets/images/gallerylightbox.webp";
import formAnimate from "../../assets/images/formanimate.webp";
import landingLight from "../../assets/images/landinglightbox.webp";
import menuClip from "../../assets/images/menuclippath.webp";
import easybank from "../../assets/images/easybank.webp";
import fylo from "../../assets/images/fylo.webp";
import huddle from "../../assets/images/huddle.webp";
import devtools from "../../assets/images/devtools.webp";
import countries from "../../assets/images/countries.webp";
import formik from "../../assets/images/formik.webp";
import cloudinary from "../../assets/images/cloudinary.webp";
import rick from "../../assets/images/rick.webp";
import weather from "../../assets/images/weather.webp";
import lazy from "../../assets/images/lazy.webp";
import movies from "../../assets/images/movies.webp";

function Portfolio() {
  const data = [
    {
      id: 1,
      name: "Gallery Light Box",
      img: galleryLight,
      github: "https://github.com/padermo/GalleryLightBox",
      demo: "https://gallery-light-box.vercel.app/",
    },
    {
      id: 2,
      name: "Form Animate",
      img: formAnimate,
      github: "https://github.com/padermo/FormAnimate",
      demo: "https://form-animate.vercel.app/",
    },
    {
      id: 3,
      name: "Landing Light Box",
      img: landingLight,
      github: "https://github.com/padermo/LandingLightBox",
      demo: "https://landing-light-box.vercel.app/",
    },
    {
      id: 4,
      name: "Menu CLip Path",
      img: menuClip,
      github: "https://github.com/padermo/MenuClipPath",
      demo: "https://menu-clip-path.vercel.app/",
    },
    {
      id: 5,
      name: "Landing Easybank",
      img: easybank,
      github: "https://github.com/padermo/FrontendLandingTres",
      demo: "https://frontend-landing-easybank.vercel.app/",
    },
    {
      id: 6,
      name: "Landing Fylo",
      img: fylo,
      github: "https://github.com/padermo/FrontendLandingDos",
      demo: "https://frontend-landing-fylo.vercel.app/",
    },
    {
      id: 7,
      name: "Landing Huddle",
      img: huddle,
      github: "https://github.com/padermo/FrontendLandingUno",
      demo: "https://frontend-landing-huddle.vercel.app/",
    },
    {
      id: 8,
      name: "DevTools",
      img: devtools,
      github: "https://github.com/padermo/DevTools",
      demo: "https://dev-tools-nu.vercel.app/",
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
      demo: "https://form-react-formik.vercel.app/",
    },
    {
      id: 11,
      name: "React Cloudinary",
      img: cloudinary,
      github: "https://github.com/padermo/ReactCloudinary",
      demo: "https://react-cloudinary-seven.vercel.app/",
    },
    {
      id: 12,
      name: "Rick & Morty",
      img: rick,
      github: "https://github.com/padermo/RickAndMorty",
      demo: "https://rick-and-morty-silk.vercel.app/",
    },
    {
      id: 13,
      name: "Weather",
      img: weather,
      github: "https://github.com/padermo/Weather",
      demo: "https://weather-henna-five.vercel.app/",
    },
    {
      id: 14,
      name: "Movies",
      img: movies,
      github: "https://github.com/padermo/Movies",
      demo: "https://movies-eight-mu.vercel.app/",
    },
    {
      id: 15,
      name: "Lazy loadin & skeleton",
      img: lazy,
      github: "https://github.com/padermo/LazySkeleton",
      demo: "https://lazy-skeleton.vercel.app/",
    },
  ];

  const [viewProyect, setViewProyect] = useState();

  const onLoad = () => {
    setViewProyect(
      data.map((e) => (
        <Proyect
          key={e.id}
          name={e.name}
          img={e.img}
          github={e.github}
          demo={e.demo}
        />
      ))
    );
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__content">
        <h2 className="title">Portfolio</h2>
        <div className="portfolio__info">{viewProyect}</div>
      </div>
      <div className="portfolio__wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="portfolio__wave--svg">
          <path
            fill="#292B2E"
            fill-opacity="1"
            d="M0,128L12.6,154.7C25.3,181,51,235,76,256C101.1,277,126,267,152,256C176.8,245,202,235,227,197.3C252.6,160,278,96,303,106.7C328.4,117,354,203,379,213.3C404.2,224,429,160,455,133.3C480,107,505,117,531,144C555.8,171,581,213,606,229.3C631.6,245,657,235,682,229.3C707.4,224,733,224,758,208C783.2,192,808,160,834,154.7C858.9,149,884,171,909,165.3C934.7,160,960,128,985,144C1010.5,160,1036,224,1061,234.7C1086.3,245,1112,203,1137,202.7C1162.1,203,1187,245,1213,256C1237.9,267,1263,245,1288,213.3C1313.7,181,1339,139,1364,133.3C1389.5,128,1415,160,1427,176L1440,192L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Portfolio;
