import React, { useState, useEffect } from "react";
import './BannerSlider.css'
import { MdEmail, MdCall } from "react-icons/md";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import banner1 from "../../Images/banner1.jpg";
import banner2 from "../../Images/banner2.jpg";
import banner3 from "../../Images/banner3.jpg";
import banner4 from "../../Images/banner4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import search_icon from "../../Images/search_icon.png";
import vector from "../../Images/Vector.png";

export const BannerSlider = (props) => {
    const navigate = useNavigate();

    const images = [banner1, banner2, banner3, banner4];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(i => (i + 1) % 4);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        setSelectedCity('');
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };
    const handleclick = (e) => {
        e.preventDefault();
        navigate('/profile-page');
    }

    return (
        <>
            <div className='banner' style={{ backgroundImage: `url(${images[index]})` }}>
                <div className='banner_contents'>
                    <div className='banner_contact_info_parent'>
                        <span className='banner_line'><hr /></span>
                        <div className='banner_contact_info'>
                            <div className="banner_email_phone">
                                <span><MdEmail /></span>
                                <a href="mailto:contactus@differhome.com"> contactus@differhome.com</a>
                            </div>
                            <div className="banner_email_phone">
                                <span><MdCall /></span>
                                <a href="tel:+919351822152"> (+91)-9351822152 </a>
                            </div>
                            <div className="banner_socialmedia_icons">
                                <a href="https://www.instagram.com/differhome/?igshid=YmMyMTA2M2Y%3D"><FaInstagram /></a>
                                <a href="https://www.facebook.com/DifferHome?mibextid=ZbWKwL"><FaFacebookSquare /></a>
                                <a href="https://www.linkedin.com/company/differ-home/"><FaLinkedin /></a>
                                <a href="https://twitter.com/DifferHome?t=11TIVul9d1sd6i3APqYFKg&s=08"><FaTwitter /></a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="banner_main_select">
                    <div className="State_City_Select">
                        <select id="state-select" value={selectedState} onChange={handleStateChange} className="option_color select" >
                            <option value="" className="option_color"><span className="option_block">
                                State</span></option>
                            {getStates(selectedCountry).map(state => (
                                <option key={state} value={state} className="option_color">{state}</option>
                            ))}
                        </select>

                        {/* <label htmlFor="city-select">Select a city:</label> */}
                        <select id="city-select" className="option_color select" value={selectedCity} onChange={handleCityChange}>
                            <option value="" className="option_color"><span className="option_block">
                                City</span></option>
                            {getCitiesForState(selectedState).map(city => (
                                <option key={city} value={city} className="option_color">{city}</option>
                            ))}
                        </select>


                        <button className="search_icon" onClick={handleclick}>
                            <img src={search_icon} alt="" />
                        </button>
                    </div>
                    <div className="type_select">
                        <div className="round">
                            <input type="checkbox" id="checkbox" className="checkbox" />
                            <label for="checkbox">Apartment</label>
                        </div>
                        <div className="round border">
                            <input type="checkbox" id="checkbox2" className="checkbox" />
                            <label for="checkbox2">Villa</label>
                        </div>
                        <div className="round border">
                            <input type="checkbox" id="checkbox3" className="checkbox" />
                            <label for="checkbox3">Plot</label>
                        </div>

                    </div>

                </div>

                <div className="banner_main_text">
                    <p>We prefer our home to be Differ</p>
                </div>
                <div className="banner_last_div">
                    <img src={vector} alt="" />
                    <p>Real State Agency</p>
                </div>

            </div>
        </>
    );


};
const getCitiesForState = (state) => {
    // Replace with your own data or API call to get the list of cities for the selected state
    switch (state) {
        case 'Andhra Pradesh':
            return ['Visakhapatnam', 'Vijayawada', 'Guntur'];
        case 'Arunachal Pradesh':
            return ['Itanagar', 'Naharlagun'];
        case 'Assam':
            return ['Guwahati', 'Silchar', 'Dibrugarh'];
        case 'Bihar':
            return ['Patna', 'Gaya', 'Bhagalpur'];
        // Add more cases as needed
        default:
            return [];
    }
};


const getStates = () => {
    return ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];
}

