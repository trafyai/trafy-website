import React from 'react'
import '@styles/course/course-single/CoursePage.css'
import Figma from "@public/assets/Images/course-page/hero-section/Figma.png";
import Miro from "@public/assets/Images/course-page/hero-section/Miro.png";
import check from '@public/assets/Images/course-page/learn/check-circle.svg'
import Image from 'next/image'

const CourseSkill = (props) => {
    console.log("props",props.toolsIcon[0]);
  return (
    <div className='course-skill'>
        <div className='course-skill-container'>
            <div className='course-gain'>
                <h2>Skills you'll gain</h2>
                <div className='course-gain-contents'>
                    {props.skillsGain.map((data,index)=>(
                <h3 key={index}>{data}</h3>
                    ))}
                </div>
            </div>

            <div className='course-tools'>
                <h2>Tools Covered</h2>
                <div className='course-tools-contents'>
                    {props.toolsIcon.map((data,index)=>(
                    <Image key={index} src={data.image} width={40} height={40} alt={data.alt}/>))}
                </div>
            </div>

            <div className='course-includes'>
                <h2>This course includes</h2>
                <div className='course-includes-contents'>
                    {props.courseIncludes.map((data,index)=>(
                    <div className='course-includes-contents-point' key={index}>
                        <Image src={check} width={15} height={15} />
                        <p>{data}</p>
                    </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default CourseSkill