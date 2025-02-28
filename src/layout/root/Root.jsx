import './Root.css';
import kitchenLogo from '../../assets/logo/edited.jpg'
import {Link} from 'react-scroll';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Root = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="root">
            <header className="header">
                <div className="header-content">
                    <div className="logo-container">
                        <img src={kitchenLogo} alt="Kitchen Logo" className="logo"/>
                        <button className="menu-toggle" onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            <li><Link to="welcome"
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      className="nav-item"
                                      activeClass="active"
                                      onClick={closeMenu}>Головна</Link></li>
                            <li><Link to="about"
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      className="nav-item"
                                      activeClass="active"
                                      onClick={closeMenu}>Про нас</Link></li>
                            <li><Link to="our-works"
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      className="nav-item"
                                      activeClass="active"
                                      onClick={closeMenu}>Наші роботи</Link></li>
                            <li><Link to="steps"
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      className="nav-item"
                                      activeClass="active"
                                      onClick={closeMenu}>Співпраця</Link></li>
                            <li><Link to="footer"
                                      smooth={true}
                                      duration={500}
                                      spy={true}
                                      className="nav-item"
                                      activeClass="active"
                                      onClick={closeMenu}>Контакти</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Root;