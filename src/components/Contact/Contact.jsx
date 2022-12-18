import React, {useState, useEffect} from 'react'
import github from '../../assets/icons/bxl-github.svg'
import linkedin from '../../assets/icons/bxl-linkedin-square.svg'
import instagram from '../../assets/icons/bxl-instagram.svg'

function Contact() {

  const data = [
    {
      id: 1,
      img: github,
      url: "https://github.com/padermo"
    },
    {
      id: 2,
      img: linkedin,
      url: "https://www.linkedin.com/in/fabio-andres-estevez-herrera/"
    },
    {
      id: 3,
      img: instagram,
      url: "https://www.instagram.com/padermoo/"
    },
  ];

  const [viewContact, setViewContact] = useState();

  const onLoad = () => {
    setViewContact(
      data.map(e => (
        <a href={e.url} key={e.id} className="contact__social" target="_blank"><img src={e.img} alt="Img contact" className='contact__icon' /></a>
      ))
    )
  }

  useEffect(()=>{
    onLoad();
  },[]);

  return (
    <section className='contact' id='contact'>
      <div className="contact__content container">
        <h2 className="title title--bottom">Contact</h2>
        <div className="contact__info">
          {viewContact}
        </div>
      </div>
    </section>
  )
}

export default Contact