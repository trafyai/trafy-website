'use client'
import React from 'react';
import '@styles/course/join-now/JoinForm.css';
import { useParams } from 'next/navigation';
import '@styles/course/join-now/JoinForm.css';
import courseData from '@data/courses/CourseData';

const JoinForm = () => {
  const params = useParams();
  const slug = params.slug; 
  const data = courseData.find((course)=>course.id===slug)
  return (
    <div className='join-form'>
      <div className='join-form-container'>
        <div className='join-form-headline'>
          <h2>Join our {data.courseHeading} Course</h2>
          <p>Take the first step towards mastering {data.courseHeading}. Submit your details below and our team will reach out shortly.</p>
        </div>
          <form action="" onSubmit={(e) => {e.preventDefault();console.log("Form submitted");}} className='join-form-user-contents'>
            <div className='join-form-fullname'>
              <input type="text" placeholder='First Name' name='firstName' required />
              <input type="text" placeholder='Last Name' name='lastName' required />
            </div>
            <div className='join-form-credentials'>
              <input type="email" placeholder='Email ID' name='email' required />
              <input type="text" placeholder='Phone Number' name='email' required />
              <input type="text" placeholder='Country' name='country' required />
              <input type="text" placeholder='Profession' name='profession' />
              <input type="text" placeholder='Organisation / Institute' name='organization' />
            </div>
            <button type="submit">Join Now</button>
          </form>
          <div className='join-form-contents'>
          <p>Your information will remain private and secure as per our <a href="/privacy-policy">Privacy Policy</a>.</p>
        </div>
        </div>

      </div>
  );
};

export default JoinForm;


