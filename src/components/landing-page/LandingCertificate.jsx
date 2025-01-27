import React from 'react'
import '@styles/landing-page/LandingPage.css';
import Image from 'next/image';
import certificate from '@public/assets/Images/course-page/certificate/certificate.svg'
import google from '@public/assets/Images/landing-page/google-scholar.svg';
import tn from '@public/assets/Images/landing-page/tnsdc.svg';
import aicte from '@public/assets/Images/landing-page/aicte.svg';

export const Landingcertificate = () => {
  return (
    <div className='landing-certificate'>
        <div className='landing-certificate-container'>
            <div className='landing-certificate-headline'>
            <h2>Earn Industry Recognized Certificate</h2>
            <p>Add this credential to your LinkedIn profile, resume, or CV to showcase your expertise. Share your achievement on social media and during performance reviews to underscore your commitment to professional growth and success.</p>
            <div className='landing-certificate-stamps'>
              <Image src={google} alt='google scholar'/>
              <Image src={tn} alt='tn'/>
              <Image src={aicte} alt='aicte'/>
            </div>
            </div>

            <div className='landing-certificate-image'>
                <Image src={certificate}/>
            </div>
        </div>
    </div>
  )
}


