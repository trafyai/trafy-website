
// 'use client'
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import courseData from '@data/courses/CourseData';

// const CourseRelated = (props) => {
//   const { category} = props; // Destructure courseData from props
//   const router = useRouter();
//   const [currentId, setCurrentId] = useState(null);
//   console.log

//   useEffect(() => {
//     if (router && router.asPath) {
//       const pathSegments = router.asPath.split('/');
//       setCurrentId(pathSegments[pathSegments.length - 1]); // Assuming ID is the last part of the URL
//     }
//   }, [router]);

//   // Filter out the current course and limit to 3 courses
//   const relatedCourses = courseData // Use courseData here
//     .filter(course => course.category === category && course.id !== props.id)
//     .slice(0, 3); // Limit to 3 courses

//   return (
//     <div className="course-related">
//       <div className="course-related-container">
//         <h2>Related Courses</h2>
//         <div className="course-related-contents">
//           {relatedCourses.map((course, index) => (
//                 <Link href={course.id}  className='course-related-box' key={index}>
//                 <h4>{course.category}</h4>
//                 <div className='course-related-box-contents'>
//                     <div className='course-related-box-contents-desc'>
//                         <h3>{course.courseHeading}</h3>
//                         <p>{course.courseDescription}</p>
//                     </div>
//                     <div className='course-related-box-contents-level'>
//                         <p>{course.level}</p>
//                         <p>{course.duration}</p>
//                     </div>
//                 </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseRelated;

'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import courseData from '@data/courses/CourseData';

const CourseRelated = (props) => {
  const { category } = props; // Destructure courseData from props
  const router = useRouter();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    if (router && router.asPath) {
      const pathSegments = router.asPath.split('/');
      setCurrentId(pathSegments[pathSegments.length - 1]); // Assuming ID is the last part of the URL
    }
  }, [router]);

  // Filter out the current course and limit to 3 courses
  const relatedCourses = courseData
    .filter(course => course.category === category && course.id !== props.id)
    .slice(0, 3); // Limit to 3 courses

  return (
    <div className="course-related" style={{ padding: relatedCourses.length > 0 ? '0' : '35px 0px' }}>
      {relatedCourses.length > 0 && (
        <div className="course-related-container">
          <h2>Related Courses</h2>
          <div className="course-related-contents">
            {relatedCourses.map((course, index) => (
              <Link href={course.id} className="course-related-box" key={index}>
                <h4>{course.category}</h4>
                <div className="course-related-box-contents">
                  <div className="course-related-box-contents-desc">
                    <h3>{course.courseHeading}</h3>
                    <p>{course.courseDescription}</p>
                  </div>
                  <div className="course-related-box-contents-level">
                    <p>{course.level}</p>
                    <p>{course.duration}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseRelated;
