import React from 'react';
import '../styles/Footer.css';
import map from '../assets/images/Map.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="container-f">
            <div className="row">
                <div className="col-lg-6">
                    <div className="Box">
                        <img src={map} alt="Map" />
                        <div className="content">
                            <h4>Contact</h4>
                            <a href="#">Contact Us</a>
                            <a href="#">Support</a>
                            <a href="#">Unsubscribe</a>
                            <a href="#">Notifications</a>
                        </div>
                    </div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="col-lg-2">
                    <div className="content">
                        <h4>Products</h4>
                        <a href="#">Technologies</a>
                        <a href="#">Automation</a>
                        <a href="#">Productivity</a>
                        <a href="#">Safety</a>
                        <a href="#">More Products</a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="content">
                        <h4>Industries</h4>
                        <a href="#">Healthcare & Life Science</a>
                        <a href="#">Transportation & Logistics</a>
                        <a href="#">Manufacturing</a>
                        <a href="#">Distribution Centers</a>
                        <a href="#">Retail</a>
                        <a href="#">E-Commerce</a>
                        <a href="#">Government</a>
                    </div>

                </div>
            </div>
            <div className="bottom-f">
                <div>© 2023 . Saint Gobain All Rights Reserved</div>
                <div className="logos">
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaSquareFacebook size={25} color="#213A81" />
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaSquareInstagram size={25} color="#213A81" />
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={25} color="#213A81" />
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare size={25} color="#213A81" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
