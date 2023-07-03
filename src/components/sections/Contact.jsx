import React from 'react'
import SectionTitle from './SectionTitle'
import contact from "../../assets/operator.png"
import "../styles/contact.css"
import { FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <section className="contact_section" id="contact">
                <SectionTitle description={{ title: "Connect With Me", subTitle: "Feel Free To Contact" }} />
                <div className="contact_container">
                    <div className="contact_details">
                        <div className="contact_icons">
                            <img src={contact} alt="connect" />
                            <div className="social_icons">
                                <FaInstagram />
                                <FaLinkedin />
                                <FaMailBulk />
                            </div>
                        </div>
                        <form action="https://formsubmit.co/ca42f91993c2b45ad52ac18a876cdded" method="POST">
                            <div className="input_fields">
                                <label htmlFor="name">Name</label>
                                <input className='input' type="text" name="Name" id="name" placeholder='Enter Your Name' required/>
                            </div>
                            <div className="input_fields">
                                <label htmlFor="number">Contact Number</label>
                                <input className='input' type="text" name="Name" id="number" placeholder='Enter Your Contact Number' required/>
                            </div>
                            <div className="input_fields">
                                <label htmlFor="textbox">Name</label>
                                <textarea className='input' name="description" id="textbox" cols="30" rows="10" required></textarea>
                            </div>
                            <div className="btn_container">
                                <button className='btn'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
