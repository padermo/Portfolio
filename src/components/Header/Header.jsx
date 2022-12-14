import React from 'react'
import img from "../../assets/images/img_bg_blanco.png"
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <header className='hero'>
      <section className='container'>
        <Navbar />

        <div id='home' className='hero__home'>
          <figure className='hero__picture'>
            <img src={img} alt="Img home" className='hero__img' />
          </figure>

          <div className='hero__texts'>
            <h3 className='hero__subtitle'>Hola!</h3>
            <h1 className='hero__title'>Soy Fabio Estevez</h1>
            <h3 className='hero__subtitle'>Full Stack Developer</h3>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header