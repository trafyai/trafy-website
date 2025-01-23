import "@styles/globals.css";
import React from 'react'
import CookiePopup from "@components/common/cookies/CookiePopup";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookiePopup />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
