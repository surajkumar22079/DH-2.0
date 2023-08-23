import React, { useState } from 'react';
import { connect } from 'react-redux'
import "./Home_main.css";
import zerobrokerage from "../../Images/zero_brokerage.png";
import verified_properties from "../../Images/verified_properties.png";
import Best from "../../Images/Best.png";
import Real_Time from "../../Images/Real_Time.png";
import Transparent from "../../Images/Transparent.png";
import search_icon from "../../Images/search_icon.png";
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import img4 from "../../Images/img4.jpg";
import vector1 from "../../Images/vector1.png";
import vector2 from "../../Images/vector2.png";
import vector3 from "../../Images/vector3.png";
import vector4 from "../../Images/vector4.png";
import logo1 from "../../Images/logo1.png";
import logo2 from "../../Images/logo2.png";
import logo3 from "../../Images/logo3.png";
import img_notebook_pen from "../../Images/img_notebook_pen.jpg";
import Search_by_city_card from './search_by_city_card.js';


export const Home_main = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform search with query
        console.log(`Searching for ${query}...`);
    };
    return (
        <div>
            <div className="why_choose_us">
                <p>Why choose us</p>
                <div className="block_choose">
                    <div className="blocks">
                        <img src={zerobrokerage} alt="" />
                        <br />
                        <br />
                        <span className="span1">Zero</span>
                        <br />
                        <span className="span2">Brokerage Fee</span>
                    </div>
                    <div className="blocks">
                        <img src={verified_properties} alt="" />
                        <br />
                        <br />
                        <span className="span1">Verified</span>
                        <br />
                        <span className="span2">Properties</span>
                    </div>
                    <div className="blocks">
                        <img src={Transparent} alt="" />
                        <br /><br />
                        <span className="span1">Transparent</span>
                        <br />
                        <span className="span2">Dealing</span>
                    </div>
                    <div className="blocks">
                        <img src={Real_Time} alt="" />
                        <br /><br />
                        <span className="span1">Real-time</span>
                        <br />
                        <span className="span2">Properties</span>
                    </div>
                    <div className="blocks">
                        <img src={Best} alt="" />
                        <br /><br />
                        <span className="span1">Best</span>
                        <br />
                        <span className="span2">Discounts</span>
                    </div>
                </div>
            </div>
            <div className="lets">
                <div className="lets_left">
                    <h1>Lets find your Dream Home</h1>
                    <h4>Bringing you one step closer</h4>
                </div>
                <div className="lets_right">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            placeholder="Explore Properties"
                            className="search_box"
                        />
                        <button type="submit" className="btn"><img src={search_icon} alt="" /></button>
                    </form>
                </div>
            </div>
            <div className="exclusive">
                <h2>Exclusive Properties</h2>
                <div className="excl_prop">
                    <div className="exclusive_block">
                        <img src={img1} alt="Luxurious Apartments" />
                        <h3>Luxurious Apartments</h3>
                        <h4>Levelling up the comfort zone</h4>
                    </div>
                    <div className="exclusive_block">
                        <img src={img2} alt="Luxurious Apartments" />
                        <h3>Single & Multi Room BHKs</h3>
                        <h4>Numbers aren’t just only figures</h4>
                    </div>
                    <div className="exclusive_block">
                        <img src={img3} alt="Luxurious Apartments" />
                        <h3>Villa & Bunglow</h3>
                        <h4>Detached homes & society based</h4>
                    </div>
                    <div className="exclusive_block">
                        <img src={img4} alt="Luxurious Apartments" />
                        <h3>Commercial Apartments</h3>
                        <h4>Investment are always good</h4>
                    </div>
                </div>
            </div>

            <div className="search_by_city">
                <h3>Search by city/localities</h3>
                <div className='search_by_city_card_Set'>
                    <Search_by_city_card />
                    <Search_by_city_card />
                    <Search_by_city_card />
                </div>
            </div>
            <div className="search_by_city ">
                <h3>Search by property type</h3>
                <div className='search_by_city_card_Set'>
                    <Search_by_city_card />
                    <Search_by_city_card />
                    <Search_by_city_card />
                </div>
            </div>
            <div className="free_consultation">
                <div className="free">
                    <h1>Free Consultation</h1>
                    <h3>GET A free expert consultation</h3>
                    <p>With a well-trained and professional team, full analysis on the properties with a futuristic perspective to help you determine the value.</p>
                    <h4>Call Now</h4>
                </div>
                <img src={img_notebook_pen} alt="" className="img_notebook_pen" />
                <div className="free_cards">
                    <div>
                        <img src={vector1} alt="" />
                        <h4>RERA Verified</h4>
                    </div>
                    <div>
                        <img src={vector2} alt="" />
                        <h4>Zero Commission</h4>
                    </div>
                    <div>
                        <img src={vector3} alt="" />
                        <h4>Expert’s Support</h4>
                    </div>
                    <div>
                        <img src={vector4} alt="" />
                        <h4>Promising Lowest Price</h4>
                    </div>
                </div>
            </div>
            <div className="partners">
                <h1>Partnered With</h1>
                <div className="partners_logos">
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo1} alt="" />
                    <img src={logo1} alt="" />
                </div>
            </div>
            <div className="query">
                <h1>Looking for a property</h1>
                <h3>For any query, reach us</h3>
                <form action=""  className="query_form">
                    <input type="text" name="" id="" placeholder="name"/>
                    <input type="tel" name="" id="" placeholder="Phone number"/>
                    <input type="text" name="" id="" placeholder='Your query'/>
                    <button type="submit" className='btn_query_form'>Submit</button>
                </form>
            </div>


        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home_main)