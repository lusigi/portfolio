import React from 'react'
import scroll from '../images/scroll.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="content">
                <h1>Amazing Web Experiences for Amazing Companies</h1>
                <div className="meet">
                    <p>Meet Brian Lusigi</p>
                </div>
                <img src={scroll} className="scroll" alt="scroll"/>
            </div>
            <svg width="468" height="448" viewBox="0 0 468 448" fill="none" className="hero-design" xmlns="http://www.w3.org/2000/svg">
                <rect x="234" width="117" height="112" fill="#6700EE"/>
                <rect x="351" y="112" width="117" height="112" fill="#B831AA" fill-opacity="0.27"/>
                <rect x="234" y="224" width="117" height="112" fill="#6700EE"/>
                <rect y="224" width="117" height="112" fill="#B831AA" fill-opacity="0.27"/>
                <rect x="118" y="336" width="117" height="112" fill="white"/>
                <rect x="118" y="112" width="117" height="112" fill="white"/>
                <circle cx="295.5" cy="168.5" r="55.5" fill="#FF28C3" fill-opacity="0.59"/>
                <circle cx="174.5" cy="279.5" r="55.5" fill="#0BFCD3" fill-opacity="0.72"/>
            </svg>

        </div>
    )
}

export default Hero
