import React from 'react'
import Image from 'next/image'
import rating from '@public/assets/Images/course-page/hero-section/rating.svg'

const CourseReview = (props) => {
  return (
    <div className='course-review'>
        <div className='course-review-container'>
            <h2>Review</h2>
            <div className='course-review-contents'>
                {props.review.map((data,index)=>(
                <div className='course-review-box' key={index}>
                    <div className='course-review-name'>
                        <div className='course-review-name-image'>
                        {data.name && data.name[0].toUpperCase()}
                        </div>
                        <div className='course-review-name-contents'>
                            <p>{data.name}</p>
                            <Image src={rating} alt='rating'/>
                        </div>
                    </div>
                    <div className='course-review-name-desc'>
                        <p>{data.content}</p>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
  )
}

export default CourseReview