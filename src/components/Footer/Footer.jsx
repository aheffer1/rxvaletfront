import React from 'react'
import "./Footer.css";
import { android_store_1, apple_store_1, Line_3, RxLogo } from '../../assets';

const Footer = () => {
  return (
    <footer>
        <div className="wrapper">
                <div className="contactInfo">
                    <a href="#" className="logo">
                        <img src={RxLogo} alt="" />
                    </a>
                    <div className="contactInfo-text">
                        <span className="contactInfo-wrapper">
                            Address
                            <br />
                        </span>
                        <span className="span">
                            1580 Atkinson Road
                            <br />
                        </span>
                        <span className="contactInfo-wrapper2">
                            {" "}
                            <br />
                        </span>

                        <span className="contactInfo-wrapper">
                            Email
                            <br />
                        </span>
                        <span className="span">
                            info@myrxvalet.com
                            <br />
                        </span>
                        <span className="contactInfo-wrapper2">
                            {" "}
                            <br />
                        </span>

                        <span className="contactInfo-wrapper">
                            Phone
                            <br />
                        </span>
                        <span className="span">
                            1-855-798-2538
                            <br />
                        </span>
                        <span className="contactInfo-wrapper2">
                            {" "}
                            <br />
                        </span>

                        <span className="contactInfo-wrapper">
                            Office Hours
                            <br />
                        </span>
                        <span className="span">
                            Monday - Thursday: 8:00 AM - 8:00 PM
                            <br />
                            Friday: 8:00 AM – 7:00 PM (EST)
                            <br />
                        </span>
                    </div>
                </div>
                <div className="product-categories">
                    <div className="product-categories-text">
                        PRODUCT CATEGORIES 
                        <br />     
                        <div className="product-categories-wrapper">
                            Browse by A-Z <br />
                            Browse all Medications <br />
                            Browse all Diabetic supplies <br />
                            Browse Common Meds <br />
                        </div>                  
                    </div>
                </div>
                <div className="policy-info">
                    <div className="policy-info-text">
                        POLICY INFO
                        <br />   
                        <div className="policy-info-wrapper">
                            Privacy Policy <br />
                            Terms of use <br />
                            Customer Support <br />
                        </div>
                    </div>
                </div>
                <div className="company">
                    <div className="company-text">
                        COMPANY
                        <br /> 
                        <div className="company-wrapper">
                            About Us <br />
                            Health Articles <br />
                            Testimonials <br />
                            FAQ <br />
                            Contact Us <br />
                        </div>
                    </div>
                </div>
                <div className="download-app">
                    <div className="download-app-text">DOWNLOAD</div>
                    <div className="frame3">
                        <a href="#">
                            <img src={apple_store_1} alt="" />
                        </a>

                        <a href="#">
                            <img src={android_store_1} alt="" />
                        </a>
                    </div>
                </div>
                <div className="line3">
                    <img src={Line_3} alt="" />
                </div>
                <div className="bottom">
                    <div className="copyright-text">© Copyright 2013-2022 Rx Valet, LLC. All rights reserved.</div>
                    <div className="social-text">Facebook Instagram Twitter</div>
                </div>
        </div>
    </footer>
  )
};

export default Footer;

/*
Address
                        <div className="contactInfo-text2">
                            1580 Atkinson Road                     
                        </div>
                        <div className="contactInfo-text2">
                            Lawrenceville, GA 30043                     
                        </div>   
                        Email
                        <div className="contactInfo-text2">
                            <ul>
                                <li>info@myrxvalet.com</li>
                            </ul>
                        </div>
                        <h2>Phone</h2>
                        <div className="contactInfo-text2">
                            <ul>
                                <li>1-855-798-2538</li>
                            </ul>
                        </div>
                        <h2>Office Hours</h2>
                        <div className="contactInfo-text2">
                            <ul>
                                <li>Monday - Thursday: 8:00 AM - 8:00 PM</li>
                                <li>Friday: 8:00 AM – 7:00 PM (EST)</li>
                            </ul>
                        </div>*/