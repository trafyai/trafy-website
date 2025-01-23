import React from 'react';
import UiuxCourse from '@components/course-page/course-landing-page/UiuxCourse';
import DigitalMarketingCourse from '@components/course-page/course-landing-page/DigitalMarketingCourse';
import ArtificialIntelligenceCourse from '@components/course-page/course-landing-page/ArtificialIntelligenceCourse';
import Head from 'next/head';
import '@styles/course/course-landing/CourseLanding.css'
export const metadata = {
  title: "trafy - Your Personalised AI mentor",
  description: "Learn UI/UX designing, artificial intelligence, and performance marketing with our interactive courses and accelerate your career with expert guidance",
  alternates: {
    canonical: "https://academy.trafy.ai/courses",
  },
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
};
const Course = () => {
  return (
    <div className='course-landing-page'> 
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <UiuxCourse/>
        <DigitalMarketingCourse/>
        <ArtificialIntelligenceCourse/>
    </div>
  )
}

export default Course;