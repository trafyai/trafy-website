import React from 'react';
import '@styles/course/course-single/CoursePage.css';
import Image from 'next/image';
import rating from '@public/assets/Images/course-page/hero-section/rating.svg'
const CourseHero = (props) => {
    return (
        <div className="course-hero">
            <div className='course-hero-container'>
                {/* <div className='course-hero-left'> */}
                    <div className='course-hero-details'>
                            <p>Level : {props.level}</p>
                            <p>Duration :{props.duration}</p>
                    </div>
                    <div className='course-hero-contents'>
                        <div className='course-hero-headline'>
                            <h1>{props.courseHeading}</h1>
                            <p>{props.courseDescription} </p>
                        </div>
                        <div className='course-hero-certified'>
                            <p>{props.certificationCourse}</p>
                        </div>
                        <div className='course-hero-rating'>
                            <p>{props.rating}</p>
                            <Image src={rating}  height={14}/>
                            <span>{props.ratings}</span>
                        </div>
                        <button>Join Now</button>
                    </div>
                {/* </div> */}
                {/* <div className='course-hero-right'>

                </div> */}
            </div>
        </div>
    );
};

export default CourseHero;