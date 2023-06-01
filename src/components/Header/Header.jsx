import React from 'react'
import "./Header.css";

const Header = () => {
    return (
      <header>
        <div className="menu">
          <div className='option1'>
            Medications
          </div>
          <div className='option2'>Diabetics</div>
          <div className='option3'>Women's Health</div>
          <div className='option4'>Men's Health</div>
          <div className='option5'>Cholesterol</div>
          <div className='option6'>Cold Sores</div>
          <div className='option7'>Birth Control</div>
          <div className='option8'>Hair Loss</div>
          <div className='option9'>Erectile Dysfunction</div>
          <div className='option10'>Pets Care</div>
          <div className='option11'>Formulary</div>
        </div>
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
              <div className='whitebutton'>
                <div className='signin'>
                  Sign In
                </div>
              </div>
              <div className='bluebutton'>
                <div className='getstarted'>
                  Get started
                </div>
              </div>
            </div>
          </div>
          <div className="ellipse1"></div>
        </div>
      </header>
    )
};

  export default Header;