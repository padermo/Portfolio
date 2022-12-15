import React from 'react'
import '../../style/normalize.css'
import '../../style/style.css'
import Header from '../Header/Header'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Services from '../Services/Services'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Services />
    </div>
  )
}

export default App