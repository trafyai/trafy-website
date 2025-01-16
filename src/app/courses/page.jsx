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
    canonical: "https://trafy.ai/courses",
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