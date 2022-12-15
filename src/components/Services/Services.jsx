import React from 'react'
import Service from './Service'
import tag from '../../assets/icons/bx-code-alt.svg'
import like from '../../assets/icons/bxs-like.svg'
import time from '../../assets/icons/bx-timer.svg'
import design from '../../assets/icons/bxs-palette.svg'
import devices from '../../assets/icons/bxs-devices.svg'
import ceo from '../../assets/icons/bx-target-lock.svg'

function Services() {
  const info = [
    {
      id: 1,
      name: "Responsive Design",
      description: "Your site will display properly on any device, including desktop computers, tablets and mobile phone.",
      img: devices
    },
    {
      id: 2,
      name: "Creative Design",
      description: "A good and attractive web design helps you keep your leads on your site, witch is the digital face of your business.",
      img: design
    },
    {
      id: 3,
      name: "Development",
      description: "I know the importance of web design and can help you create website you'll love.",
      img: tag
    },
    {
      id: 4,
      name: "Social Media",
      description: "There are a lot of social platforms out there, and you should promote your presence on them on your website.",
      img: like
    },
    {
      id: 5,
      name: "Performance",
      description: "Retaining users is crucial to improving conversions. High-performing sites engage and retain users.",
      img: time
    },
    {
      id: 6,
      name: "SEO",
      description: "I will optimize your site with intelligent search engine optimization strategy to generate leads.",
      img: ceo
    },
  ]
  return (
    <section className='services'>
      <div className="services__content container">

      </div>
    </section>
  )
}

export default Services