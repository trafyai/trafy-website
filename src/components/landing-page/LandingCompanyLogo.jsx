import React from 'react'
import '@styles/landing-page/LandingPage.css'
import Image from 'next/image'
import hubspot from '@public/assets/Images/landing-page/logos/b-hubspot.png'
import beehiiv from '@public/assets/Images/landing-page/logos/0_8yAJkF8i65__fSJU 1.svg'
import clickup from '@public/assets/Images/landing-page/logos/b-clickup.png'
import hostinger from '@public/assets/Images/landing-page/logos/b-hostinger.png'
import mailercloud from '@public/assets/Images/landing-page/logos/b-mailercloud.png'
import shopify from '@public/assets/Images/landing-page/logos/b-shopify.png'
import wati from '@public/assets/Images/landing-page/logos/b-wati.png'
import amazon from '@public/assets/Images/landing-page/logos/b-amazon.png'



const LandingCompanyLogo = () => {
  return (
    <div className='landing-company'>
        <div className='landing-company-container'>
            <h2>Trained and Trusted by companies that innovate</h2>
            {/* <div className='landing-company-logo-d'>
                <Image src={hubspot} alt='hubspot'/>
                <Image src={shopify} alt='shopify'/>
                <Image src={hostinger} alt='hostinger'/>
                <Image src={mailercloud} alt='mailercloud'/>
                <Image src={clickup} alt='clickup'/>
                <Image src={wati} alt='wati'/>
                <Image src={beehiiv} alt='beehiiv' style={{height:"22px"}}/>
                <Image src={amazon} alt='amazon'/>
            </div> */}
            <div className='landing-company-logo-container'>
                <div className='landing-company-logo'>
                    {/* First set of logos */}
                    <Image src={hubspot} alt='hubspot'/>
                <Image src={shopify} alt='shopify'/>
                <Image src={hostinger} alt='hostinger'/>
                <Image src={mailercloud} alt='mailercloud'/>
                <Image src={clickup} alt='clickup'/>
                <Image src={wati} alt='wati'/>
                <Image src={beehiiv} alt='beehiiv' style={{height:"22px"}}/>
                <Image src={amazon} alt='amazon'/>
                </div>
                <div className='landing-company-logo'>
                    {/* First set of logos */}
                    <Image src={hubspot} alt='hubspot'/>
                <Image src={shopify} alt='shopify'/>
                <Image src={hostinger} alt='hostinger'/>
                <Image src={mailercloud} alt='mailercloud'/>
                <Image src={clickup} alt='clickup'/>
                <Image src={wati} alt='wati'/>
                <Image src={beehiiv} alt='beehiiv' style={{height:"22px"}}/>
                <Image src={amazon} alt='amazon'/>
                </div>
                <div className='landing-company-logo'>
                    {/* First set of logos */}
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
    </div>
  )
}

export default LandingCompanyLogo