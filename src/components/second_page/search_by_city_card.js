import React from 'react'
import { connect } from 'react-redux'
import "../first_page/Home_main.css";
import img5 from "../../Images/img5.jpg";
import share_icon from "../../Images/share_icon.png";
import like_icon from "../../Images/like_icon.png";
import bedroom_icon from "../../Images/bedroom_icon.png";
import bathroom_icon from "../../Images/bathroom_icon.png";

export const Search_by_city_card = () => {
    return (
        <div className="search_by_city_card">
            <img src={img5} alt="" />
            <div className="property_name">
                <h4>Gokul Apartments</h4>
                <div>
                    <img src={share_icon} alt="" />
                    <img src={like_icon} alt="" />
                </div>
            </div>
            <h5>Manipur Colony, Manhattan Colony...</h5>
            <div className="bed_bath">
                <div className="bedroom">
                    <img src={bedroom_icon} alt="" />
                    <h6>2 Bedrooms</h6>
                </div>
                <div className="bathroom">
                    <img src={bathroom_icon} alt="" />
                    <h6>2 Bathrooms</h6>
                </div>
            </div>
            <div className="prop_category">
                <h5>Furnished</h5>
                <h5>Sea-View</h5>
                <h5>Lawn Mower</h5>
            </div>
            <div className="add_to_compare">
                <input type="checkbox" id="compare_checkbox" />
                <h6>Add to compare</h6>
            </div>
            <div className="property_price">
                <h5>₹40 Lac</h5>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Search_by_city_card)