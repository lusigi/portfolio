import React from 'react'
import Hero from './Hero';
import Section from './Section';
import Section2 from './Section2';
import Section3 from './Section3';
import Navbar from './Navbar';

function Home() {
    return (
        <div>
             <Navbar />
                <Hero />
                <Section />
                <Section2 />
                <Section3 />
        </div>
    )
}

export default Home
