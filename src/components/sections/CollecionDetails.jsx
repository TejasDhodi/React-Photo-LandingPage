import React from 'react'
import Collections from './Collections'
const CollecionDetails = () => {
    const collectionData = [
        
        {
            image: "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            alt: "Wedding"
        },
        
        {
            image: "https://images.unsplash.com/photo-1635919254233-38ea27301900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            alt: "Wedding"
        },

        {
            image: "https://images.unsplash.com/photo-1583878545126-2f1ca0142714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            alt: "Wedding"
        },
        
        {
            image: "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        
        {
            image: "https://images.unsplash.com/photo-1633104502699-b2ecf0fee294?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            alt: "Wedding"
        },
        
        {
            image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            alt: "Wedding"
        },

        {
            image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            alt: "Wedding"
        },

        {
            image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            alt: "Wedding"
        },

        {
            image: "https://images.unsplash.com/photo-1599922430916-ebb0a87ae326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhYnklMjBzaG9vdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            alt: "Wedding"
        }
    ]
    return (
        <>
        {
            collectionData.map((currEle, index) => (
                <Collections 
                image={currEle.image}
                alt={currEle.alt}
                key={index}
                />
            ))
        }
        </>
    )
}

export default CollecionDetails
