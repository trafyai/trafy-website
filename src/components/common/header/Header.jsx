'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@styles/common/header/NavBar.css'
import logoColor from '@public/assets/Images/comman/navbar/trafy-black-logo.png'

import arrow from '@public/assets/Images/comman/navbar/arrow-outward-white.svg';
import hamburgerIcon from '@public/assets/Images/comman/navbar/hamburger-black.svg';
import closeIcon from '@public/assets/Images/comman/navbar/close-black.svg';
// import { useTheme } from '@context/ThemeContext';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    setIsThemeReady(true);
  }, [theme]);

  // const handleNavigation = (targetPath) => {
  //   setMenuOpen(false);
  //   if (targetPath.startsWith('#')) {
  //     document.body.classList.remove('overflow');
  //     const element = document.querySelector(targetPath);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   } else if (targetPath.startsWith('http')) {
  //     window.location.href = targetPath;
  //   } else {
  //     document.body.classList.remove('overflow');
  //   }
  // };
  const handleNavigation = (targetPath) => {
    setMenuOpen(false);
    document.body.classList.remove('overflow');
  
    if (targetPath.startsWith('#')) {
      const element = document.querySelector(targetPath);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetPath.startsWith('http')) {
      window.location.href = targetPath;
    }
  };
  

  return (
    <div className="navbar">
      <div className="navbar-container" ref={menuRef}>
        <Link href='/' className="navbar-logo">
          <Image src={logoColor} alt="trafy logo" />
        </Link>

        <div className="navbar-contents">
          {/* <div className="navbar-research" onClick={() => handleNavigation('/')}>
            Research
          </div>
          <div className="navbar-academy" onClick={() => handleNavigation('https://academy.trafy.ai/')}>
            Academy
          </div> */}
          <div className="navbar-academy" onClick={() => handleNavigation('#pathway-section')} >
            Pathway
          </div>
          <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
            Resources
          </div>
          <div className="navbar-community" onClick={() => handleNavigation('/')}>
            Community
          </div>
          <div className='navbar-buttons'>
          <Link href='/login' className="navbar-login">
            Login
          </Link>
          <Link href='/signup'className="navbar-signup">
            Signup
          </Link>
          </div>
        </div>

        <div className="navbar-contents-menu">
          <Image src={menuOpen ? closeIcon : hamburgerIcon} alt={menuOpen ? 'close-icon' : 'hamburger-icon'}
            width={24} height={24} onClick={() => setMenuOpen(!menuOpen)}/>
        </div>
      </div>
      <div className={`navbar-contents-drop ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-contents-mobile">
          {/* <div className="navbar-research" onClick={() => handleNavigation('/')}>
            Research
          </div>
          <div className="navbar-academy" onClick={() => handleNavigation('https://academy.trafy.ai/')}>
            Academy
          </div> */}
          <div className="navbar-academy" onClick={() => handleNavigation('#pathway-section')}>
            Pathway
          </div>
          <div className="navbar-resources" onClick={() => handleNavigation('https://blog.trafy.ai/')}>
            Resources
          </div>
          <div className="navbar-community" onClick={() => handleNavigation('/')}>
            Community
          </div>
          {/* <div className='navbar-buttons'>
          <Link href='/login' className="navbar-login">
            Login
          </Link>
          <Link href='/signup'className="navbar-signup">
            Signup
          </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
