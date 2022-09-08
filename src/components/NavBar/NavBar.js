import React from 'react';
import './NavBar.css';
import brandLogo  from '../../imagenes/softPcLogo.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return(
        <nav className='nav'>
            <a href='/'>
                <img className='nav__picture' src={brandLogo} alt='brand logo' />
            </a>
            <ul className='nav__links'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Products</a>
                </li>
                <li>
                    <a href='/'>Best Sellers</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;