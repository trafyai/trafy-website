import CookiePopup from '@components/common/auth/cookies/CookiePopup.jsx'; // Adjust the path as needed
import "@styles/globals.css";
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookiePopup />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
