import React from 'react'
import '@styles/landing-page/LandingPage.css';
import Image from 'next/image'
import rating from '@public/assets/Images/landing-page/rating.svg'

export const ReviewData = [
    { "name": "Amit Sharma", "letter": "A", "content": "The course provided practical knowledge that helped me apply design theory to real-world projects. The lessons on wireframing and mobile UX were especially valuable for me." },
    { name: "Rohit Malhotra",
    content: "The instructors break down the complex aspects of design in an easily digestible way. I now have a deeper understanding of accessibility and inclusive design."
    },
    { "name": "Suresh Rao", "letter": "S", "content": "A comprehensive course that covers everything from the basics to advanced prompt techniques. The learning curve is smooth, and I was able to apply what I learned to my own AI projects right away!" },
    {
        "name": "Rahul Sharma",
        "content": "I’ve taken several Python courses, but this one stood out due to its clear explanations and step-by-step approach. The chatbot project helped me gain real-world Python skills!"
    }
];
const LandingReview = (props) => {
  return (
    <div className='landing-review'>
        <div className='landing-review-container'>
            <h2>Review</h2>
            <div className='landing-review-contents'>
                {ReviewData.map((data,index)=>(
                <div className='landing-review-box' key={index}>
                    <div className='landing-review-name'>
                        <div className='landing-review-name-image'>
                        {data.name && data.name[0].toUpperCase()}
                        </div>
                        <div className='landing-review-name-contents'>
                            <p>{data.name}</p>
                            <Image src={rating} />
                        </div>
                    </div>
                    <div className='landing-review-name-desc'>
                        <p>{data.content}</p>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
  )
}

export default LandingReview