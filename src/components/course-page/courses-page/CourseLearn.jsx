import React from 'react'
import '@styles/course/course-single/CoursePage.css'
import Image from 'next/image'
import check from '@public/assets/Images/course-page/learn/check.svg'

const CourseLearn = (props) => {
  return (
    <div className='course-learn'>
        <div className='course-learn-container'>
                <h2>What you'll learn</h2>
                <div className='course-learn-contents'>
                    {props.learnPoints.map((data,index)=>(
                    <div className='course-learn-contents-points' key={index}>
                        <Image src={check} width={18} height={18}/>
                        <p>{data}</p>
                    </div>))}
                </div>
        </div>
    </div>
  )
}

export default CourseLearn