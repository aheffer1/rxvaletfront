import React from 'react'
import "./Header.css";
import classNames from 'classnames';
import useSticky from './useSticky';
import LogoImgs from '../../assets/Logo.png';
import CartImg from '../../assets/basket-shopping.png';

const Header = () => {
    const { sticky, stickyRef } = useSticky();
    return (
      <>
        <header>
          <div className='top-header'>
            <div className="logo">
              <a href="/">
                <img src={LogoImgs} alt="RxValet Logo" />
              </a>
            </div>
            <div className='search'>
              <form>
                <input type='search' placeholder='Search for medications like lipitor' />
              </form>
            </div>
            <div className='header-right'>
              <button className='btn-secondary btn-icon'>
                <img src={CartImg} alt="Cart" />
              </button>
              <button className="btn-secondary">
                Sign In
              </button>
              <button className="btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </header>
        <nav ref={stickyRef} className={classNames('nav', { sticky })}>
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
        <div
        style={{
        height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
        }}
        />
      </>
    )
};

  export default Header;

 /* <header>
  <div className="actualheader">
    <div className="logo">
      <a href="/">
      </a>
    </div>
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
<nav ref={stickyRef} className={classNames('nav', { sticky })}>
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
<div
style={{
height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
}}
/>*/