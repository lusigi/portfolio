import React from 'react'
import contact from '../images/contact.jpg'
import './HireMe.css'
import Navbar from '../components/Navbar'

function HireMe() {
    return (
        <div className="page">
            <Navbar/>
                <div className="hire">
            
            <div className="banner">
                <h1>Get in Touch</h1>
                <img src={contact} alt="contact"/>

            </div>

            <div className="contact">
                <div className="mail">
                    <h3>brianisadia94@gmail.com</h3>
                </div>
                <div className="phone">
                    <h3>+254796661363</h3>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default HireMe
