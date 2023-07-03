import React from 'react'
import {Link} from "react-scroll"

const Services = ({title, subTitle, list1, list2, amount}) => {
  return (
    <>
      
        <div className="service_card">
          <div className="charges">
            <h2>{amount}</h2>
          </div>
            <div className="service_title">
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
                <hr />
            </div>
            <div className="service_body">
                <ul className="service_description">
                    <li>{list1}</li>
                    <li>{list2}</li>
                </ul>
                <div className="service_controls">
                    <Link className='btn' to="contact" spy={true} smooth={true} offset={-70} duration={500}>Book Your Slot</Link>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Services
