import React from 'react'
import "./Footer.css";
import { android_store_1, apple_store_1, Line_3, RxLogo } from '../../assets';

const Footer = () => {
  return (
    <footer>
        <div className="container">
                <div className="left">
                    <a href="#" className="logo">
                        <img src={RxLogo} alt="" />
                    </a>
                    <h2>Address</h2>
                    <p>1580 Atkinson Road</p>

                    <h2>Email</h2>
                    <p>info@myrxvalet.com</p>

                    <h2>Phone</h2>
                    <p>1-855-798-2538</p>
                
                    <h2>Office Hours</h2>
                    <p>Monday - Thursday: 8:00 AM - 8:00 PM <br />
                    Friday: 8:00 AM – 7:00 PM (EST)
                    </p>
                </div>
                <div className="middle">
                    <h2>PRODUCT CATEGORIES</h2>

                        <p><a href="#">Browse by A-Z <br /></a>
                        <a href="#">Browse all Medications<br /></a>
                        <a href="#">Browse all Diabetic supplies<br /></a>
                        <a href="#">Browse Common Meds</a></p>

                    <h2>POLICY INFO</h2> 
                        <p><a href="#">Privacy Policy<br /></a>
                        <a href="#">Terms of use<br /></a>
                        <a href="#">Customer Support</a></p>
                </div>
                <div className="right">
                    <h2>COMPANY</h2>
                        <p><a href="#">About Us<br /></a>
                        <a href="#">Health Articles<br /></a>
                        <a href="#">Testimonials<br /></a>
                        <a href="#">FAQ<br /></a>
                        <a href="#">Contact Us</a></p>

                        <h2>DOWNLOAD APP</h2>
                        <div className="download-app">
                            <a href="#">
                                <img src={apple_store_1} alt="" />
                            </a>

                            <a href="#">
                                <img src={android_store_1} alt="" />
                            </a>
                      </div>
                </div>
                <div className="line" />
                <div className="bottom">
                    <p style={{fontSize: "14px"}}>© Copyright 2013-2022 Rx Valet, LLC. All rights reserved.</p>
                    <p style={{fontSize: "14px"}}>Facebook Instagram Twitter</p>
                </div>
        </div>
    </footer>
  )
};

export default Footer;

