import React from 'react'
import img from "../../assets/images/img_bg_blanco.png"
import Navbar from '../Navbar/Navbar'
import Cv from '../CV/Cv'

function Header() {
  return (
    <header className='hero' id='home'>
      <section className='container'>
        <Navbar />

        <div className='hero__home'>
          <figure className='hero__picture'>
            <img src={img} alt="Img home" className='hero__img' />
          </figure>

          <div className='hero__texts'>
            <h3 className='hero__subtitle'>Hi!</h3>
            <h1 className='hero__title'>I'm Fabio Estevez</h1>
            <h3 className='hero__subtitle'>Full Stack Developer</h3>
          </div>
        </div>
        <Cv />
      </section>
    </header>
  )
}

export default Header