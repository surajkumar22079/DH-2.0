import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import "./Second_page.css";

import ghar__white from "../../Images/ghar_white.jpg";
import banner1 from "../../Images/banner1.jpg";
import banner2 from "../../Images/banner2.jpg";
import like_icon from "../../Images/like_icon_filled.png";
import discount_icon from "../../Images/discount_icon.png";
import area_icon from "../../Images/area_icon.png";
import furlenco_logo from "../../Images/furlenco_logo.png";
import bhk from "../../Images/bhk.png";
import age_property from "../../Images/age_property.png";
import enquire_icon from "../../Images/enquire_icon.png";
import download_icon from "../../Images/download_icon.png";
import { MdEmail, MdCall, MdMail } from "react-icons/md";
import Carousel from "./Carousel.js";
import Search_by_city_card from './search_by_city_card.js';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import 'mapbox-gl/dist/mapbox-gl.css';
import Carousel_floor_plan from './3D_floor_plan_carousel.js'


const images = [
    { src: `${ghar__white}`, alt: 'Image_1' },
    { src: `${banner1}`, alt: 'Image_2' },
    { src: `${banner2}`, alt: 'Image_3' },
];
export const Second_page = () => {

    const [showFirstDiv, setShowFirstDiv] = useState(true);

    const primary_info_click = () => {
        setShowFirstDiv(true);
    };

    const secondary_info_click = () => {
        setShowFirstDiv(false);
    };

    // 
    return (
        <div className='second_page'>
            <div className="back_to_search">
                <p>&#8592; Back to search</p>
            </div>
            <div className="prop_details">
                <div className="prop_images">
                    <div className="images_videos_prop_div">
                        <div className="images_videos_prop">
                            <div className='images_div'>
                                <p style={{ color: "white" }}>+6 Images</p>
                            </div>
                        </div>
                        <div className="images_videos_prop">
                            <div className='images_div'>
                                <p style={{ color: "white" }}>+6 Images</p>
                            </div>
                        </div>
                        <div className="images_videos_prop">
                            <div className='images_div'>
                                <p style={{ color: "white" }}>+6 Images</p>
                            </div>
                        </div>
                    </div>
                    <div className="full_view_image">
                        {/* <img src={like_icon} alt=""  className='like_icon'/> */}
                        <img src={ghar__white} alt="" className='prop_full_view_pic' />
                    </div>
                </div>
                <div className="prop_specifications">
                    <div className="upper">
                        <div className="left">
                            <h1>Gokul Apartments</h1>
                            <h2>₹40 Lac - ₹43Lac</h2>
                            <a href="">View EMI plans</a>

                            <h3>View All offers</h3>
                            <div className="discount">
                                <img src={discount_icon} alt="" />
                                <p>Don’t miss out on the best offers of the year</p>
                            </div>
                        </div>
                        <div className="option_primary_secondary">
                            <button onClick={primary_info_click}>Primary Info</button>
                            <button onClick={secondary_info_click}>Secondary Info</button>
                        </div>
                        <div className="right" style={{ display: showFirstDiv ? 'flex' : 'none' }}>
                            <h2>Address of the property</h2>
                            <h3>Daftary Road, Malad North, Mumbai, India</h3>
                            <h3>PINCODE  : 2026232</h3>
                            <div className="blocks_second_page">
                                <div className="block">
                                    <div className="sub_block">
                                        <img src={area_icon} alt="" />
                                        <p>Area</p>
                                    </div>
                                    <p>2346 Sq. Ft.</p>
                                </div>
                                <div className="block">
                                    <div className="sub_block">
                                        <img src={age_property} alt="" />
                                        <p>Age of the Property</p>
                                    </div>
                                    <p>2346 Sq. Ft.</p>
                                </div>
                                <div className="block">
                                    <div className="sub_block">
                                        <img src={bhk} alt="" />
                                        <p>BHK</p>
                                    </div>
                                    <p>2346 Sq. Ft.</p>
                                </div>
                                <div className="block">
                                    <div className="sub_block">
                                        <img src={area_icon} alt="" />
                                        <p>Area</p>
                                    </div>
                                    <p>2346 Sq. Ft.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="lower">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptatem vero. Assumenda accusamus eveniet sapiente sunt quis voluptatibus alias praesentium deserunt nostrum ipsam! Numquam iure officia inventore.</p>
                        <div className="lower_blocks" style={{ display: showFirstDiv ? 'none' : 'flex' }}>
                            <div className="lower_sub_block">
                                <h3>Carpet Area</h3>
                                <p>2190 Sqft.</p>
                            </div>
                            <div className="lower_sub_block">
                                <h3>Carpet Area</h3>
                                <p>2190 Sqft.</p>
                            </div>
                        </div>
                        <div className="lower_blocks" style={{ display: showFirstDiv ? 'none' : 'flex' }}>
                            <div className="lower_sub_block">
                                <h3>Carpet Area</h3>
                                <p>2190 Sqft.</p>
                            </div>
                            <div className="lower_sub_block">
                                <h3>Carpet Area</h3>
                                <p>2190 Sqft.</p>
                            </div>
                        </div>
                        <div className="lower_blocks" style={{ display: showFirstDiv ? 'none' : 'flex' }}>
                            <div className="lower_sub_block">
                                <h3>Carpet Area</h3>
                                <p>2190 Sqft.</p>
                            </div>
                        </div>
                        <div className="Enquire_Brochure">
                            <button className="Enquire">
                                <p>Enquire</p>
                                <img src={enquire_icon} alt="" />
                            </button>
                            <button className="Brochure">
                                <p>Download Brochure</p>
                                <img src={download_icon} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout_and_map">
                <div className="images_layout">
                    <h2>3D Layouts & Floor Plans</h2>
                    <div className="layout_and_floor_plan">
                        <Carousel_floor_plan images={images} />

                    </div>
                    <button>View All</button>
                </div>

                <div className="consult_map">
                    <div className="consult">
                        <h3>Consult Our expert</h3>
                        <div className="consult_block">
                            <MdCall />
                            <p>+91 9999333444</p>
                        </div>
                        <div className="consult_block">
                            <MdMail />
                            <p>+91 9999333444</p>
                        </div>
                        <div className="consult_block">
                            <MdCall />
                            <p>+91 9999333444</p>
                        </div>
                    </div>
                    <div className="map">
                        <img src={ghar__white} alt="map_will_change_later" />
                        <button>View on Map</button>
                    </div>
                </div>


            </div>
            <div className="other_specifications">
                <h2>Other specifications</h2>

            </div>
            <div className="other_specifications">
                <h2>Add On Services</h2>
                <div className="add_on_services_blocks">
                    <div className="add_on_services">
                        <img src={furlenco_logo} alt="" />
                        <h3>Furlenco Furnitures</h3>
                    </div>
                    <div className="add_on_services">
                        <img src={furlenco_logo} alt="" />
                        <h3>Furlenco Furnitures</h3>
                    </div>
                    <div className="add_on_services">
                        <img src={furlenco_logo} alt="" />
                        <h3>Furlenco Furnitures</h3>
                    </div>
                    <div className="add_on_services">
                        <img src={furlenco_logo} alt="" />
                        <h3>Furlenco Furnitures</h3>
                    </div>
                </div>
            </div>

            <div className="similar_properties">
                <h3>Similar Properties</h3>
                <div className="similar_properties_div">
                    <Carousel />
                    <div className="android_similar_prop">
                        <Search_by_city_card />
                        <Search_by_city_card />
                        <Search_by_city_card />
                        <Search_by_city_card />
                        <Search_by_city_card />
                    </div>
                </div>
            </div>


        </div>
    );
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Second_page)        