import React, { useState } from 'react'
import {Link} from "react-scroll"
import "../../index.css"
import "../styles/header.css"
const Hearder = () => {
  const [menu, setMenu] =useState(false)
  const handleMenu = () => setMenu(!menu)


  const [navChange, setNavChange] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNavChange(true)
    } else {
      setNavChange(false)
    }
  }

  window.addEventListener("scroll", changeNav)

  return (
    <>
      <nav className={navChange? "navbar show_nav": "navbar"} >
        <div className="nav_brand">
            <h1><span>TD</span>Photography</h1>
        </div>
        <ul className={menu? "nav_items show_items": "nav_items"}>
            <li className="nav_list">
                <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-90} duration={500} onClick={handleMenu}> Home</Link>
            </li>
            <li className="nav_list">
                <Link to="collection" spy={true} smooth={true} offset={-90} duration={500} onClick={handleMenu}>Collections</Link>
            </li>
            <li className="nav_list">
                <Link to="services" spy={true} smooth={true} offset={-90} duration={500} onClick={handleMenu}>Services</Link>
            </li>
            <li className="nav_list">
                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={handleMenu}>Connect</Link>
            </li>
        </ul>
        <div className={menu? "hamburger_menu active": "hamburger_menu"} onClick={handleMenu}>
            <div className="line" id="line1"></div>
            <div className="line" id="line2"></div>
            <div className="line" id="line3"></div>
        </div>
      </nav>
    </>
  )
}

export default Hearder
