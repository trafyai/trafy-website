import React from 'react'
import '@styles/landing-page/LandingPage.css';
import Image from 'next/image';
import certificate from '@public/assets/Images/course-page/certificate/certificate.svg'

export const Landingcertificate = () => {
  return (
    <div className='landing-certificate'>
        <div className='landing-certificate-container'>
            <div className='landing-certificate-headline'>
            <h2>Earn Industry Recognized Certificate</h2>
            <p>Add this credential to your LinkedIn profile, resume, or CV to showcase your expertise. Share your achievement on social media and during performance reviews to underscore your commitment to professional growth and success.</p>
            </div>

            <div className='landing-certificate-image'>
                <Image src={certificate}/>
            </div>
        </div>
    </div>
  )
}


