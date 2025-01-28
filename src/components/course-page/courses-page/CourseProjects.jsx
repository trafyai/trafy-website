import React from 'react'

const CourseProjects = (props) => {
  return (
    <div className='course-projects'>
        <div className='course-projects-container'>
            <h2>Projects</h2>
            <div className='course-projects-content'>
                {props.project.map((data,index)=>(
                <div className='course-projects-box' key={index}>
                    <div className='course-project-box-heading'>
                        <h3>{data.title}</h3>
                    </div>
                    <div className='course-project-box-description'>
                        <p>{data.description}</p>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
  )
}

export default CourseProjects