import React from 'react'
import ContentEditable from 'react-contenteditable'

import './Course.css'
import Actions from './Actions'

const Course = ({ course, saveCourse, removeCourse }) => {
  const updateName = (ev) => {
    course.name = ev.target.value
    saveCourse(course)
  }

  return(
    <li className="Course">
      <input type="checkbox" value="on" />
      <div className="details">
          <ContentEditable
            className="name"
            html={course.name}
            onChange={updateName}
          />
         <Actions 
          course={course} 
          removeCourse={removeCourse}
        /> 
      </div>
    </li>
  )
}

export default Course