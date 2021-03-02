import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-container">
            <header>
                <Link to="/" className="logo">LUSIGI</Link>

                <nav>
                    <ul>
                        <li>
                            <Link to='#'>My Works</Link>
                        </li>
                        <li>
                            <Link to='#'>My Skills </Link>
                        </li>
                        <li>
                            <Link to='#'>Hire Me</Link>
                        </li>
                    </ul>
                </nav>
            </header>
           
           
        </div>
    )
}

export default Navbar
