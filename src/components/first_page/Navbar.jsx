import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import Hamburger from "../../Images/hamburger.png";

export const Navbar = () => {

    const [show, handleShow] = useState(false);
    const [show_ham, handleShow_ham] = useState(false);
    const navTransition = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    const click_ham = () => {
        if (show_ham === true) handleShow_ham(false);

        else handleShow_ham(true);
    }
    useEffect(() => {
        window.addEventListener("scroll", navTransition);
        return () => window.removeEventListener("scroll", navTransition);
    }, [])



    return (
        <>
            <div className={`navbar ${show && 'nav_color'}`}>
                <div className='nav_content'>
                    <div className='dh_logo'>
                        <div className='nav_logo'>
                            <img src='images/DH_logo.png' alt='DH logo' />
                        </div>
                        <div className='nav_logo_name'>
                            <h1>DifferHome</h1>
                        </div>
                    </div>
                    <div className='dh_menu'>
                        <Link to="/" className='menu_links'>Home</Link>
                        <Link to="/about" className='menu_links'>About</Link>
                        <Link to="/service" className='menu_links'>Services</Link>
                        <Link to="/contact" className='menu_links'>Contact Us</Link>
                    </div>
                    <div className="ham_nav">
                        <button onClick={click_ham} className="hamburger">
                            <img src={Hamburger} alt="" className="ham_img" />
                        </button>
                        <div className={`ham_navbar ${show_ham && 'abc'}`}>
                            <Link to="/" className='menu_links_ham'>Home</Link>
                            <Link to="/about" className='menu_links_ham'>About</Link>
                            <Link to="/service" className='menu_links_ham'>Services</Link>
                            <Link to="/contact" className='menu_links_ham'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
