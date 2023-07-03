import React from 'react'
import "../styles/SectionTitle.css"
const SectionTitle = ({description}) => {
    return (
        <>
            <div className="section_title">
                <h1>{description.title}</h1>
                <p>{description.subTitle}</p>
            </div>
        </>
    )
}

export default SectionTitle
