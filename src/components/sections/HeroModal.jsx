import React from 'react'
import "../styles/modal.css"
const HeroModal = ({closeModal}) => {
  return (
    <>
        <div className="bg_blur"></div>
        <div className="modal">
            <div className="close_modal" onClick={() => closeModal(false)}>X</div>
            <div className="modal_title">
                <h1>What We Do ??</h1>
            </div>
            <dl className="modal_description">
                <dt>Photography :</dt>
                <dd>The team excels in capturing still images that tell stories, evoke emotions, and showcase the beauty of their subjects.</dd>
                <dt>Videography :</dt>
                <dd>The team is well-versed in the art of videography, skillfully crafting narratives through moving images. They expertly handle equipment, cinematography techniques, and editing software to produce engaging videos. </dd>
                <dt>Event Coverage :</dt>
                <dd>The team specializes in documenting events, be it weddings, corporate functions, conferences, or social gatherings.</dd>
                <dt>Editing and Post-Production :</dt>
                <dd>Apart from capturing images and footage, the team excels in post-production processes. They meticulously edit and enhance the visuals, adding creative touches, color grading, sound design, and special effects to deliver a polished final product.</dd>
            </dl>
        </div>
    </>
  )
}

export default HeroModal
