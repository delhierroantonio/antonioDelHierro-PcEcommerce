import './NavBar.css';
import brandLogo  from '../../imagenes/softPcLogo.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
function NavBar() {

    return(
        <nav className='nav'>
            <Link to="/">
                <img className='nav__picture' src={brandLogo} alt='brand logo' />
            </Link>
            <ul className='nav__links'>
                <li>
                    <Link to="/">Todo</Link>
                </li>
                <li>
                    <Link to="/category/men's clothing">Caballero</Link>
                </li>
                <li>
                    <Link to="/category/women's clothing">Dama</Link>
                </li>
                <li>
                    <Link to="/category/electronics">Tecnologia</Link>
                </li>
                <li>
                    <Link to="/category/jewelery">Joyeria</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;