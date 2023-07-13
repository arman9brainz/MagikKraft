import React from 'react'
import './Navbar.css'
import { Logo } from '../../assets'
const Navbar = () => {
    return (
        <nav>
            <div className="nav">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src={Logo} />
                    </a>
                </div>
                <div className="nav-button">
                    <button>Join The Waitlist</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;