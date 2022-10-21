import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/PH-icon.jpg'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='about' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu} className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu} >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='skills' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu} >
                            Skills
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='demo' spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu} >
                            Demo
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
