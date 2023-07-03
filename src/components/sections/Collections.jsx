import React from 'react'
import "../styles/collections.css"
const Collections = ({ image, alt }) => {
  return (
    <>
      <div className="collection_img">
        <img src={image} alt={alt} />
      </div>
    </>
  )
}

export default Collections
