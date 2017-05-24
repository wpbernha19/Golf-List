import React from 'react'

import './CourseList.css'
import Course from './Course'

const CourseList = (props) => {
  const sortCourses = (a, b) => {
    return b.match(/\d+/)[0] - a.match(/\d+/)[0]
  }

  return(
    <ul className="CourseList">
      {
        Object
          .keys(props.courses)
          .sort(sortCourses)
          .map(courseId => <Course 
                              {...props}
                              course={props.courses[courseId]}
                              key={courseId}
                             />)
      }
    </ul>
  )
}

export default CourseList