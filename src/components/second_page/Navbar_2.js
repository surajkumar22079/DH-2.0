import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar_2.css'
import search_icon from "../../Images/search_icon.png";

export const Navbar_2 = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform search with query
        console.log(`Searching for ${query}...`);
    };

    const [show, handleShow] = useState(false);
    // const navTransition = () => {
    //     if (window.scrollY > 100) {
    //         handleShow(true);
    //     } else {
    //         handleShow(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll");
    //     return () => window.removeEventListener("scroll");
    // }, [])
    return (
        <>
            <div className={`navbar_2 ${true && 'nav_color_2'}`}>
                <div className='nav_content_2'>
                    <div className='dh_logo_2'>
                        <div className='nav_logo_2'>
                            <img src='images/DH_logo.png' alt='DH logo' />
                        </div>
                        <div className='nav_logo_name_2'>
                            <h1>DifferHome</h1>
                        </div>
                    </div>
                    <div className="lets_right_navbar2">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={query}
                                onChange={handleInputChange}
                                placeholder="Explore Properties"
                                className="search_box_navbar2"
                            />
                            <button type="submit" className="btn"><img src={search_icon} alt="" /></button>
                        </form>
                    </div>
                    <div className='dh_menu_2'>
                        <Link to="/" className='menu_links'>Home</Link>
                        <Link to="/about" className='menu_links'>About</Link>
                        <Link to="/service" className='menu_links'>Services</Link>
                        <Link to="/contact" className='menu_links'>Contact Us</Link>
                    </div>
                    
                </div>
                <div className="android_nav">
                        <a href="./about">About</a>
                        <a href="./3D_layout">3D Layout</a>
                        <a href="./floor_plan">Floor Plan</a>
                        <a href="./consult">Consult</a>
                        <a href="./map_view">Map view</a>
                        <a href="./add_on_services">Add on services</a>
                    </div>
            </div>
        </>
    )
}
