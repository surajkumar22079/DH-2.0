import React from 'react'
import { connect } from 'react-redux'
import './Footer.css';
import DH_logo from '../../Images/DH_logo.png';
import { MdEmail, MdCall } from "react-icons/md";
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
export const Footer = (props) => {
    return (
        <div className='footer' >
            <div className="footer_top">
                <div className="footerl1">
                    <div className='DH_logo'>
                        <img src={DH_logo} alt="" className='nav_logo' />
                        <h1>DifferHome</h1>
                    </div>
                    <p>One-stop platform for all the activities, either it is locating the perfect dream home to building a new one or long tiring searches, we provide all the services just in here.
                    </p>
                    <div className="about_blogs">
                        <a href="./Blogs">Blogs</a>
                        <a href="./About_Us">About Us</a>
                        <a href="./FAQs">FAQs</a>
                    </div>
                </div>
                <div className="footerl2">
                    <h1>Explore</h1>
                    <a href="./">Apartments</a>
                    <a href="./">Villa</a>
                    <a href="./">Bungalow</a>
                    <a href="./">Plot/Land</a>
                    <a href="./">Residential</a>
                    <a href="./">Commercial</a>
                </div>
                <div className="footerl3">
                    <h1>Contact Us</h1>
                    <div className='footerr_contact_info'>
                        <div className="footer_email_phone">
                            <span><MdEmail /></span>
                            <a href="mailto:contactus@differhome.com"> contactus@differhome.com</a>
                        </div>
                        <div className="footer_email_phone">
                            <span><MdCall /></span>
                            <a href="tel:+919351822152"> (+91)-9351822152 </a>
                        </div>
                        <div className="footer_socialmedia_icons">
                            <a href="https://www.instagram.com/differhome/?igshid=YmMyMTA2M2Y%3D"><FaInstagram /></a>
                            <a href="https://www.facebook.com/DifferHome?mibextid=ZbWKwL"><FaFacebookSquare /></a>
                            <a href="https://www.linkedin.com/company/differ-home/"><FaLinkedin /></a>
                            <a href="https://twitter.com/DifferHome?t=11TIVul9d1sd6i3APqYFKg&s=08"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <h4>Privacy policy | Terms & Conditions</h4>
                <h4>Copyright@ 2022. All Rights Reserved.</h4>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)