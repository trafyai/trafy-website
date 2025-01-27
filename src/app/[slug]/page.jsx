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