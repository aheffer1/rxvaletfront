import React from 'react'
import "./Footer.css";
import { android_store_1, apple_store_1, Line_3, RxLogo } from '../../assets';

const Footer = () => {
  return (
    <footer>
                <div className="left">
                    <a href="#" className="logo">
                        <img src={RxLogo} alt="" />
                    </a>
                    <h1>Address</h1>
                    <div className="text">1580 Atkinson Road</div>

                    <h1>Email</h1>
                    <div className="text">info@myrxvalet.com</div>

                    <h1>Phone</h1>
                    <div className="text">1-855-798-2538</div>
                
                    <h1>Office Hours</h1>
                    <div className="text">Monday - Thursday: 8:00 AM - 8:00 PM <br />
                    Friday: 8:00 AM – 7:00 PM (EST)
                    </div>
                </div>
                <div className="middle">
                    <h1>PRODUCT CATEGORIES</h1>

                        <div className="text"><a href="#">Browse by A-Z <br /></a>
                        <a href="#">Browse all Medications<br /></a>
                        <a href="#">Browse all Diabetic supplies<br /></a>
                        <a href="#">Browse Common Meds</a></div>

                    <h1>POLICY INFO</h1> 
                        <div className="text"><a href="#">Privacy Policy<br /></a>
                        <a href="#">Terms of use<br /></a>
                        <a href="#">Customer Support</a></div>
                </div>
                <div className="right">
                    <h1>COMPANY</h1>
                        <div className="text"><a href="#">About Us<br /></a>
                        <a href="#">Health Articles<br /></a>
                        <a href="#">Testimonials<br /></a>
                        <a href="#">FAQ<br /></a>
                        <a href="#">Contact Us</a></div>

                        <h1>DOWNLOAD APP</h1>
                        <div className="download-app">
                            <a href="#">
                                <img src={apple_store_1} alt="" />
                            </a>

                            <a href="#">
                                <img src={android_store_1} alt="" />
                            </a>
                      </div>
                </div>
                <div className="bottom">
                    <div className="copyright-text">© Copyright 2013-2022 Rx Valet, LLC. All rights reserved.</div>
                    <div className="social-text">Facebook Instagram Twitter</div>
                </div>
    </footer>
  )
};

export default Footer;

