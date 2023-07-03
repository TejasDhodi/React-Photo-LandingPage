import React from 'react'
import { FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import "../styles/footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_container">
                    <h2>Stay Connected</h2>
                    <h5>Maharashtra, India</h5>
                    <div className="icons">
                        <FaInstagram />
                        <FaLinkedin />
                        <FaMailBulk />
                    </div>
                    <h5>Copyright @TDPhotography</h5>
                </div>
            </footer>
        </>
    )
}

export default Footer
