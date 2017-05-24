import React from 'react'

import './CourseList.css'
import Course from './Course'

const CourseList = (props) => {
  const sortCourses = (a, b) => {
    return b.match(/\d+/)[0] - a.match(/\d+/)[0]
  }

  return (
    <ul className="CourseList">
      {
        Object
          .keys(props.courses)
          .sort(sortCourses)
          .map(courseId => <Course
                            course={props.courses[courseId]}
                            key={courseId}
                            {...props}
                          />)

      }
    </ul>
  )
}

// ['thing-1', 'thing-2', 'thing-3']

export default CourseList