'use client'
import React from 'react'
import '@styles/landing-page/LandingPage.css';
import Image from 'next/image';

const LandingHero = () => {

  return (
    <div className='landing-hero'>
        <div className='landing-hero-container'>
            <h1>Become a Gen AI Expect</h1>
            <p>Level Up with AI! Unlock creativity. Streamline workflow. Boost productivity. Create stunning designs. Gain in-demand skills. Propel your career.</p>
            <div className='landing-hero-button'>
                Join Now
            </div>
        </div>
    </div>
  )
}

export default LandingHero