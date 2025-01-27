import React from 'react'
import '@styles/landing-page/LandingPage.css'
import Image from 'next/image'
import hubspot from '@public/assets/Images/landing-page/logos/hubspot.svg'
import beehiiv from '@public/assets/Images/landing-page/logos/0_8yAJkF8i65__fSJU 1.svg'
import clickup from '@public/assets/Images/landing-page/logos/clickup.svg'
import hostinger from '@public/assets/Images/landing-page/logos/hostinger.svg'
import mailercloud from '@public/assets/Images/landing-page/logos/mailercloud.svg'
import shopify from '@public/assets/Images/landing-page/logos/shopify.svg'
import wati from '@public/assets/Images/landing-page/logos/wati.svg'
import amazon from '@public/assets/Images/landing-page/logos/amazon.svg'



const LandingCompanyLogo = () => {
  return (
    <div className='landing-company'>
        <div className='landing-company-container'>
            <h2>Trained and Trusted by companies that innovate</h2>
            <div className='landing-company-logo'>
                <Image src={hubspot} alt='hubspot'/>
                <Image src={shopify} alt='shopify'/>
                <Image src={hostinger} alt='hostinger'/>
                <Image src={mailercloud} alt='mailercloud'/>
                <Image src={clickup} alt='clickup'/>
                <Image src={wati} alt='wati'/>
                <Image src={beehiiv} alt='beehiiv' style={{height:"22px"}}/>
                <Image src={amazon} alt='amazon'/>
            </div>
        </div>
    </div>
  )
}

export default LandingCompanyLogo