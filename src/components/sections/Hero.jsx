import React, { useEffect, useState } from 'react'
import HeroModal from './HeroModal'
import { Link } from "react-scroll"
import "../../index.css"
import "../styles/hero.css"
import "../styles/modal.css"

const Hero = () => {
  const [modal, setModal] = useState(false)
  modal?document.body.style.overflow="hidden": document.body.style.overflow="auto"

  return (
    <>
      <div className="hero_container">
        <div className="modal_container">
          {modal && <HeroModal closeModal={setModal} />}
        </div>
        <div className="hero_img" id='hero'>
          <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Background Image" />
        </div>
        <div className="hero_body">
          <div className='hero_description'>
            <h1><span>Tejas Dh</span>odi</h1>
            <p>Profes<span>sional Photo</span>grapher a<span>nd Videogr</span>apher</p>
            <p>Specia<span>lized</span> In <span>Wedding</span> and <span>Event</span></p>
          </div>
          <div className="controls">
            <Link className='btn' to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
            <Link className='btn btn_light' onClick={() => setModal(true)}>What We Do</Link>
          </div>


        </div>
      </div>
    </>
  )
}

export default Hero
