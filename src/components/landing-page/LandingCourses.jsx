import React from 'react'
import '@styles/landing-page/LandingPage.css';
import courseData from '@data/courses/CourseData'
import Link from 'next/link'

const LandingCourses = () => {
  return (
    <div className="landing-courses" >
      <div className="landing-courses-container">
        <h2>Related Courses</h2>
        <div className="landing-courses-contents">
            {courseData.map((course,index)=>(
            <Link href={course.id} className="landing-courses-box" key={index}>
              <h4 style={{backgroundColor:course.bgColor}}>{course.category}</h4>
              <div className="landing-courses-box-contents">
                <div className="landing-courses-box-contents-desc">
                  <h3>{course.courseHeading}</h3>
                  <p>{course.courseDescription}</p>
                </div>
                <div className="landing-courses-box-contents-level">
                  <p>{course.level}</p>
                  <p>{course.duration}</p>
                </div>
              </div>
            </Link>
            ))}
        </div>
      </div>
  </div>
  )
}

export default LandingCourses