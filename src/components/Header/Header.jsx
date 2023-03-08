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
    </header>
  )
}

export default Header