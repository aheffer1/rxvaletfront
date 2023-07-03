import React from 'react'
import "./Header.css";
import classNames from 'classnames';
import useSticky from './useSticky';
import LogoImg from '../../assets/Logo.png';
import CartImg from '../../assets/basket-shopping.png'

const Header = () => {
	const { sticky, stickyRef } = useSticky();
	return (
		<>
			<header>
				<div className='top-header'>
					<div className="logo">
						<a href="/">
							<img src={LogoImg} alt="RxValet Logo" />
						</a>
					</div>
					<div className='search'>
						<form>
							<input type='search' placeholder='Search medication like liptior' />
						</form>
					</div>
					<div className='header-right'>
						<button className='btn-secondary btn-icon'>
							<img src={CartImg} alt="Cart" />
							<span className='red-dot'></span>
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