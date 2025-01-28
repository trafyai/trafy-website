'use client'
import React from 'react'
import '@styles/landing-page/LandingPage.css';
import Link from 'next/link';
import Image from 'next/image';

const LandingHero = () => {

  return (
    <div className='landing-hero'>
        <div className='landing-hero-container'>
            <h1>Become a Generative AI Expert</h1>
            <p>Level Up with AI! Unlock creativity. Streamline workflow. Boost productivity. Create stunning designs. Gain in-demand skills. Propel your career.</p>
            <Link href='/advanced-generative-ai-program' className='landing-hero-button'>
                Join Now
            </Link>
        </div>
    </div>
  )
}

export default LandingHero