
'use client';
import React, {useState, useEffect} from 'react';
import '@styles/common/footer/Footer.css'
import Image from 'next/image';
import Link from 'next/link';
import logo from '@public/assets/Images/comman/navbar/trafy-white-logo.png'

const Footer = () => {




  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <Image src={logo} alt="trafy logo" />
        </div>
        <div className="footer-right">
          <div className="footer-right-contents">
            <Link href="/terms-of-service">Terms of Services</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cancellation-policy">Cancellation Policy</Link>
          </div>
          <div className="footer-right-contents">
            <Link href="https://www.linkedin.com/company/trafyai">LinkedIn</Link>
            <Link href="https://www.instagram.com/trafyai">Instagram</Link>
            <Link href="https://twitter.com/trafyai">X</Link>
          </div>
          <div className="footer-right-contents">
            <p>© 2025, trafy</p>
            {/* <div className="footer-theme">
              <p>Theme</p>
              <div
                className="theme-change-button"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                <span className={`light-theme ${theme === 'light' ? 'active' : ''}`}></span>
                <span className={`dark-theme ${theme === 'dark' ? 'active' : ''}`}></span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

