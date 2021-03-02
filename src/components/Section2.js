import React from 'react'
import dev from '../images/dev.png'
import design from '../images/design.png'
import cloud from '../images/cloud.png'

const Section2 = () => {
    return (
        <section className="skills">
            <div className="skills-container">
                <ul>
                    <li className="transition2">
                        <div className="icon-container one">
                            <img src={design} alt="design icon"/>
                        </div>
                        <p className="skill-title"> UI UX DESIGN</p>
                        <p className="featured-desc skill desc"> Does your Website need a facelift? Does your company need rebranding. I am your guy </p>
                    </li>
                    <li className="transition2">
                        <div className="icon-container two">
                            <img src={dev} alt="dev icon"/>
                        </div>
                        <p className="skill-title"> FULLSTACK DEVELOPMENT</p>
                        <p className="featured-desc skill desc"> I create feature-rich applications that have stunning front-ends and dynamic backends. These applications are responsive and are optimized for mobile </p>
                    </li>
                    <li className="transition2">
                        <div className="icon-container three">
                            <img src={cloud} alt="design icon"/>
                        </div>
                        <p className="skill-title"> SEO </p>
                        <p className="featured-desc skill desc"> Let me help your website appear on the top of all search engines for your clients to access them with ease.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Section2
