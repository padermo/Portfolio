import React, {useState} from 'react'
import {useTranslation} from 'react-i18next';
import config from '../../assets/icons/bxs-cog.svg';

function Configurations() {
  const [t, i18n] = useTranslation("global");
  const [viewMenu, setViewMenu] = useState("configurations__menu--hidden");
  const [changeEn, setChangeEn] = useState("configurations__change--hidden");
  const [changeEs, setChangeEs] = useState("configurations__change--view");

  const handleClick = () =>{
    if(viewMenu === "configurations__menu--hidden"){
      setViewMenu("configurations__menu--view");
    }else if(viewMenu === "configurations__menu--view"){
      setViewMenu("configurations__menu--hidden");
    }
  }

  const handleChangeLan = (e) => {
    if(e.target.value === "en"){
      i18n.changeLanguage("en");
      setChangeEs("configurations__change--hidden");
      setChangeEn("configurations__change--view");
    }else if(e.target.value === "es"){
      i18n.changeLanguage("es");
      setChangeEs("configurations__change--view");
      setChangeEn("configurations__change--hidden");
    }
  }

  return (
    <div className='configurations'>
      <button className='configurations__options' onClick={handleClick}><img src={config} alt="icon config" className='configurations__options--img' /></button>

      <div className={viewMenu}>
        <button onClick={handleChangeLan} value="en" className={`configurations__change configurations__change--left ${changeEn}`}>EN</button>
        <button onClick={handleChangeLan} value="es" className={`configurations__change configurations__change--rigth ${changeEs}`}>ES</button>
      </div>
    </div>
  )
}

export default Configurations