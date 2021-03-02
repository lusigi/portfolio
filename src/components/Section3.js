import React from 'react'
import { Link } from 'react-router-dom'
import netclone from '../images/netflix.JPG'
import airclone from '../images/airbnb.PNG'
import twitterclone from '../images/twitter.png'

const Section3 = () => {
    return (
        <section className="portfolio">
            <h3>My Works</h3>
            <div className="portfolio-container">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="featured-title">Netflix-Clone</p>
                        <p className="featured-desc">One of my best Projects ever. I had just learned how to consume REST APIs in my applications and saw it fit to put it into practice. I also implemented some advanced CSS features such as animations and flexbox. click on the picture to go to the deployed website.</p>
                    </div>
                    <a href="https://netflix-clone-1d560.web.app/"><img src={netclone}alt="netclone"/></a>
                </div>
                

                <div className="portfolio-right">
                <a href="https://airbnb-clone-a4764.web.app/"><img src={airclone}alt="airbnbclone"/></a>
                    <div className="inner">
                        <p className="featured-title">Airbnb-Clone</p>
                        <p className="featured-desc">I have always insisted on how React is the best library to build applications that are optimized for performance. The react-router helps avoid making get requests to the server in order to navigate between pages. Other Nodejs libraries such as react-date-picker ease the hustle of creating new elements. Click on the image to head to the website and interact with it </p>
                    </div>
                   
                </div>

                <div className="portfolio-left">
                    <div className="inner">
                        <p className="featured-title">Twitter-Clone</p>
                        <p className="featured-desc">Firebase provides an amazing platform for hosting and storage among other features. The firebase database was used in this project to store new posts. I also implemented the sticky CSS position to ensure that the sidebars remain fixed as we scroll down the middle section just like twitter Click on the image to interact with it </p>
                    </div>
                    <a href="https://twitter-clone-903fc.web.app/"><img src={twitterclone}alt="twitterclone"/></a>
                </div>
                
            </div>


            <div className="hire">
                <p>Like what You see? <span><Link to='/'>Hire Me</Link></span></p>
            </div>
        </section>
    )
}

export default Section3
