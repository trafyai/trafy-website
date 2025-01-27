'use client'
import React from 'react'
import Image from 'next/image'
import '@styles/course/course-single/CoursePage.css'
import certificate from '@public/assets/Images/course-page/certificate/certificate.svg'

const CourseCertificate = () => {
  return (
    <div className='course-certificate'>
        <div className='course-certificate-container'>
            <div className='course-certificate-contents'>
                <h3>Earn a career certificate</h3>
                <p>Add this credential to your LinkedIn profile, resume, or CV
                Share it on social media and in your performance review</p>
            </div>
            <div className='course-certificate-image'>
                <Image src={certificate} />
            </div>
        </div>
    </div>
  )
}

export default CourseCertificate