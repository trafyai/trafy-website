// components/common/auth/cookies/CookiePopup.jsx
'use client'
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from '@styles/common/cookies/CookiePopup.css'; // Import the CSS Module

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    console.log('cookieConsent:', cookieConsent); // For debugging purposes
    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const handleAcceptAll = () => {
    Cookies.set('cookieConsent', 'all', { expires: 365 });
    setShowPopup(false);
    // Enable all cookies and tracking services
    console.log('Accepted all cookies');
    // Add your logic to enable cookies here
  };

  const handleDeclineAll = () => {
    Cookies.set('cookieConsent', 'none', { expires: 365 });
    setShowPopup(false);
    // Disable all optional cookies and tracking services
    console.log('Declined all cookies');
    // Add your logic to disable optional cookies here
  };

  const handleManageCookies = () => {
    // Redirect to a "Manage Cookies" page or open a modal
    console.log('Manage cookies clicked');
    window.location.href = '/manage-cookies'; // Update with your actual path if different
  };

  if (!showPopup) return null;

  return (
    <div className={styles.cookiePopup}>
      <p>
        We use cookies to improve our site. Some cookies are necessary for our website 
        and services to function properly. Other cookies are optional and help personalize 
        your experience, including advertising and analytics. You can consent to all cookies, 
        decline all optional cookies, or manage optional cookies.
      </p>
      <div className={styles.buttonGroup}>
        <button onClick={handleAcceptAll} className={styles.acceptBtn}>Accept all</button>
        <button onClick={handleDeclineAll} className={styles.declineBtn}>Decline all</button>
        <button onClick={handleManageCookies} className={styles.manageBtn}>Manage cookies</button>
      </div>
    </div>
  );
};

export default CookiePopup;
