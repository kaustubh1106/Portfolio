import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const func = () => {
        const toggle = document.querySelectorAll('.desktopMenuListItem');
        toggle.forEach(opt => {
            opt.addEventListener('click', async () => {
                const activeElement = await document.querySelector('.active');

                if (activeElement) {
                    activeElement.classList.remove('active');
                    activeElement.classList.add('nonactive');
                }

                opt.classList.add('active');
                opt.classList.remove('nonactive');
            });
        });
    };

    useEffect(() => {
        func();
    }, []);

    return (
        <nav className="navbar">
            <h1 className="navbar-name">Kaustubh.</h1>
            <button className="menu-toggle" onClick={toggleMenu}>
                hello
            </button>
            <div className={`desktopMenu ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/home" className="desktopMenuListItem active">Home</Link>
                <Link to="/about" className="desktopMenuListItem nonactive">About</Link>
                <Link to="/services" className="desktopMenuListItem nonactive">Services</Link>
                <Link to="/contact" className="desktopMenuListItem nonactive">Contact</Link>
            </div>
            <button className="desktopMenuBtn">
                Contact Me
            </button>
        </nav>
    );
};

export default Navbar;
