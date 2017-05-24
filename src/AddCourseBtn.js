import React from 'react'

import './AddCourseBtn.css'

const AddCourseButton = ({ addCourse }) => {
  return <button className="AddCourseBtn" onClick={addCourse}>Add Course</button>
}

export default AddCourseButton