import React from 'react'
import LandingHero from '@components/landing-page/LandingHero';
import LandingCourses from '@components/landing-page/LandingCourses';
import { GoogleAnalytics } from "@next/third-parties/google";
import { LandingPotential } from '@components/landing-page/LandingPotential';
import { Landingcertificate } from '@components/landing-page/LandingCertificate';
import LandingReview from '@components/landing-page/LandingReview';

export const metadata= {
  title: "trafy - Your Personalised AI mentor",
  description:
    "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
  // keywords: [
  //   "elastic",
  //   "python",
  //   "javascript",
  //   "react",
  //   "machine learning",
  //   "data science"
  // ],
  openGraph: {
    url: "https://academy.trafy.ai",
    type: "website",
    title: "trafy - Your Personalised AI mentor",
    description:
    "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/testing-f9c8c.appspot.com/o/opengraph-image%20(1).png?alt=media&token=0683e583-ffc7-417f-9701-a04ed58305e7",
        width: 1200,
        height: 630,
        alt: "trafy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "trafy - Your Personalised AI mentor",
    description:
    "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
    // creator: "@dminhvu02",
    // site: "@dminhvu02",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/testing-f9c8c.appspot.com/o/opengraph-image%20(1).png?alt=media&token=0683e583-ffc7-417f-9701-a04ed58305e7",
        width: 1200,
        height: 630,
        alt: "trafy"
      }
    ]
  },
  alternates: {
    canonical: "https://academy.trafy.ai",
  }
};

const Home = () => {
  return (
   
       
    <div>
        <GoogleAnalytics gaId="G-THWZDJH6WZ" />
        <LandingHero/>
        <LandingCourses/>
        <LandingPotential/>
        <Landingcertificate/>
        <LandingReview/>
    </div>
   
  )
}

export default Home;