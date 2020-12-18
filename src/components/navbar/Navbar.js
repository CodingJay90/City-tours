import React from 'react'
import './Navbar.css'
import Logo from '../../logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={Logo} width="100" alt="city"/>
            <ul className="nav-links">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/" className="nav-link">About</a></li>
                <li><a href="/" className="nav-link active">tours</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
