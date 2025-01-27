// 'use client'
// import React from 'react';
// import '@styles/course/join-now/JoinForm.css';
// import { useParams } from 'next/navigation';
// import '@styles/course/join-now/JoinForm.css';
// import courseData from '@data/courses/CourseData';

// const JoinForm = () => {
//   const params = useParams();
//   const slug = params.slug; 
//   const data = courseData.find((course)=>course.id===slug)
//   return (
//     <div className='join-form'>
//       <div className='join-form-container'>
//         <div className='join-form-headline'>
//           <h2>Join our {data.courseHeading} Course</h2>
//           <p>Take the first step towards mastering {data.courseHeading}. Submit your details below and our team will reach out shortly.</p>
//         </div>
//           <form action="" onSubmit={(e) => {e.preventDefault();console.log("Form submitted");}} className='join-form-user-contents'>
//             <div className='join-form-fullname'>
//               <input type="text" placeholder='First Name' name='firstName' required />
//               <input type="text" placeholder='Last Name' name='lastName' required />
//             </div>
//             <div className='join-form-credentials'>
//               <input type="email" placeholder='Email ID' name='email' required />
//               <input type="text" placeholder='Phone Number' name='email' required />
//               <input type="text" placeholder='Country' name='country' required />
//               <input type="text" placeholder='Profession' name='profession' />
//               <input type="text" placeholder='Organisation / Institute' name='organization' />
//             </div>
//             <button type="submit">Join Now</button>
//           </form>
//           <div className='join-form-contents'>
//           <p>Your information will remain private and secure as per our <a href="/privacy-policy">Privacy Policy</a>.</p>
//         </div>
//         </div>

//       </div>
//   );
// };

// export default JoinForm;


'use client'
import React, { useState } from 'react';
import '@styles/course/join-now/JoinForm.css';
import { useParams } from 'next/navigation';
import courseData from '@data/courses/CourseData';

const JoinForm = () => {
  const params = useParams();
  const slug = params.slug; 
  const data = courseData.find((course) => course.id === slug);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    profession: '',
    organization: '',
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false); // For success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data) {
      console.error("Course data not found!");
      return;
    }

    const courseName = data.courseHeading;
    const formattedCourseName = `${courseName}.json`; // Store in Firebase as courseName.json

    const dataWithTimestamp = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    // Store form data in Firebase
    fetch(`https://uiux-courseformdata-default-rtdb.firebaseio.com/${formattedCourseName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataWithTimestamp),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data saved successfully:', data);

      // Show the "Thanks for Joining" popup
      setIsPopupVisible(true);

      // Reload the page after 3 seconds
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    })
    .catch(error => {
      console.error('Error saving data:', error);
    });

    console.log("Form submitted", dataWithTimestamp);
  };

  return (
    <div className='join-form'>
      <div className='join-form-container'>
        <div className='join-form-headline'>
          <h2>Join our {data?.courseHeading} Course</h2>
          <p>Take the first step towards mastering {data?.courseHeading}. Submit your details below and our team will reach out shortly.</p>
        </div>
        <form onSubmit={handleSubmit} className='join-form-user-contents'>
          <div className='join-form-fullname'>
            <input type="text" placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} required />
            <input type="text" placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className='join-form-credentials'>
            <input type="email" placeholder='Email ID' name='email' value={formData.email} onChange={handleChange} required />
            <input type="text" placeholder='Phone Number' name='phone' value={formData.phone} onChange={handleChange} required />
            <input type="text" placeholder='Country' name='country' value={formData.country} onChange={handleChange} required />
            <input type="text" placeholder='Profession' name='profession' value={formData.profession} onChange={handleChange} />
            <input type="text" placeholder='Organisation / Institute' name='organization' value={formData.organization} onChange={handleChange} />
          </div>
          <button type="submit">Join Now</button>
        </form>

        {/* Popup Message */}
        {isPopupVisible && (
          <div className='popup'>
            <p>Thanks for Joining the {data?.courseHeading} Course!</p>
          </div>
        )}

        <div className='join-form-contents'>
          <p>Your information will remain private and secure as per our <a href="/privacy-policy">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default JoinForm;
