import React from 'react'
import CourseData from '../../data/courses/CourseData'
import CourseHero from '@components/course-page/courses-page/CourseHero'
import CourseLearn from '@components/course-page/courses-page/CourseLearn'
import CourseSkill from '@components/course-page/courses-page/CourseSkill'
import CourseSyllabus from '@components/course-page/courses-page/CourseSyllabus'
import CourseProjects from '@components/course-page/courses-page/CourseProjects'
import CourseCertificate from '@components/course-page/courses-page/CourseCertificate'
import CourseReview from '@components/course-page/courses-page/CourseReview'
import CourseRelated from '@components/course-page/courses-page/CourseRelated'

export async function generateMetadata({params}) {
  const id = params.slug;
  const data = CourseData.find(datas => datas.id === id);
  return{
  title: data.courseHeading,
  description:data.courseDescription,
  openGraph: {
    url: `https://academy.trafy.ai/${data.id}`,
    type: "website",
    title: data.courseHeading,
  description:data.courseDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "trafy - Your Personalised AI mentor",
    description:
    "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
  },
  alternates: {
    canonical: `https://academy.trafy.ai/${data.id}`,
  }
  }
};

const page = ({params}) => {
    const id = params.slug;
    const data = CourseData.find(datas => datas.id === id);
  return (
    <>
    <CourseHero {...data} />
      <CourseLearn {...data} />
      <CourseSkill {...data}/>
      <CourseSyllabus {...data}/> 
      <CourseProjects {...data}/>
      <CourseCertificate {...data}/>
      <CourseReview {...data}/>
      <CourseRelated {...data}/>
    </>
  )
}

export default page