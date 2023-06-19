import React from 'react'
import "./Header.css";

const Header = () => {
    return (
      <header>
          <nav>
            <ul>
              <li><a href="/">Medications</a></li>
              <li><a href="/">Diabetics</a></li>
              <li><a href="/">Women's Health</a></li>
              <li><a href="/">Men's Health</a></li>
              <li><a href="/">Cholesterol</a></li>
              <li><a href="/">Cold Sores</a></li>
              <li><a href="/">Birth Control</a></li>
              <li><a href="/">Hair Loss</a></li>
              <li><a href="/">Erectile Dysfunction</a></li>
              <li><a href="/">Pets Care</a></li>
              <li><a href="/">Formulary</a></li>
            </ul>
          </nav>
        <div className="actualheader">
          <div className="logo"></div>
          <div className='search'>
            <div className='input'>
              <div className='location'>
                <div className='location-text'>
                  Deliver to 38006
                </div>
              </div>
              <div className='line1'></div>
              <div className='searchtext'>
                Search for medications like lipitor
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='buttons'>
              <div className='icon-buttons'>
                <div className='basket-shopping'>

                </div>
              </div>
              <button class="whitebutton">
                Sign In
              </button>
              <button class="bluebutton">
                Get started
              </button>
            </div>
          </div>
          <div className="ellipse1"></div>
        </div>
      </header>
    )
};

  export default Header;