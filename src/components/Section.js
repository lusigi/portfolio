import React from 'react'
import {Link} from 'react-router-dom'
import featured from '../images/featured.JPG'

const Section = () => {
    return (
        <section className="featured">
         <div className="left">
             <div className="inner transition2">
                 <p className="subtitle">Featured Project</p>
                 <Link to="/" className="featured-title">Traveloo</Link>
                 <p className="featured-desc">React was used in this project to build a dynamic frontend which showcases different destinations and Hotels. MongoDb was used as a noSQL database to store hotel information for the backend. The website however is undergoing maintenance and will be up before you know it. To view live projects scroll down.</p>
             </div>
             
         </div>

         <img className="right transition2" src={featured} alt="featured"/>
            
        </section>
    )
}

export default Section

