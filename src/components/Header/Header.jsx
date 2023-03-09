import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About';
import Skills from '../Skills/Skills';
import Cv from '../CV/Cv'

function Header() {
  return (
    <header className='hero' id='home'>
      <Navbar />
      <section className='hero__container'>
        <div className='hero__home'>
          <div className='hero__texts'>
            <h1 className='hero__title'>I'm Fabio Estevez</h1>
            <h3 className='hero__subtitle'>Full Stack Developer</h3>
          </div>

          <div className="hero__info">
            <About/>
            <Skills/>
          </div>
        </div>
        <Cv />
      </section>
      <div className="hero__wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='hero__wave--svg'>
          <path
            fill="#31363A"
            fill-opacity="1"
            d="M0,32L12.6,69.3C25.3,107,51,181,76,181.3C101.1,181,126,107,152,101.3C176.8,96,202,160,227,160C252.6,160,278,96,303,85.3C328.4,75,354,117,379,122.7C404.2,128,429,96,455,122.7C480,149,505,235,531,266.7C555.8,299,581,277,606,256C631.6,235,657,213,682,186.7C707.4,160,733,128,758,144C783.2,160,808,224,834,229.3C858.9,235,884,181,909,154.7C934.7,128,960,128,985,122.7C1010.5,117,1036,107,1061,117.3C1086.3,128,1112,160,1137,165.3C1162.1,171,1187,149,1213,149.3C1237.9,149,1263,171,1288,181.3C1313.7,192,1339,192,1364,192C1389.5,192,1415,192,1427,192L1440,192L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  )
}

export default Header