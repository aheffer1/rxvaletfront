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
                    <h2>Address</h2>
                    <ul><li>1580 Atkinson Road</li></ul>

                    <h2>Email</h2>
                    <ul><li>info@myrxvalet.com</li></ul>

                    <h2>Phone</h2>
                    <ul><li>1-855-798-2538</li></ul>
                
                    <h2>Office Hours</h2>
                    <ul>
                        <li>Monday - Thursday: 8:00 AM - 8:00 PM</li>
                        <li>Friday: 8:00 AM – 7:00 PM (EST)</li>
                    </ul>
                </div>
                <div className="middle">
                    <h1>PRODUCT CATEGORIES</h1>
                    <ul>
                        <li>Browse by A-Z</li>
                        <li>Browse all Medications</li>
                        <li>Browse all Diabetic supplies</li>
                        <li>Browse Common Meds</li>
                    </ul>

                    <h1>POLICY INFO</h1> 
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                        <li>Customer Support</li>
                    </ul>
                </div>
                <div className="right">
                    <h1>COMPANY</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Health Articles</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>

                    <h1>DOWNLOAD</h1>
                    <a href="#">
                        <img src={apple_store_1} alt="" />
                    </a>

                    <a href="#">
                        <img src={android_store_1} alt="" />
                    </a>
                </div>
                <div className="bottom">
                    <div className="copyright-text">© Copyright 2013-2022 Rx Valet, LLC. All rights reserved.</div>
                    <div className="social-text">Facebook Instagram Twitter</div>
                </div>
    </footer>
  )
};

export default Footer;

