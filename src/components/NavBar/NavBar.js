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
                    <Link to="/category/gaming">Gaming</Link>
                </li>
                <li>
                    <Link to="/category/productivity">Productivity</Link>
                </li>
                <li>
                    <Link to="/category/bestSellers">Best Sellers</Link>
                </li>
            </ul>
            <Link to="/cart">
                <CartWidget /> 
            </Link>
        </nav>
    )
}

export default NavBar;