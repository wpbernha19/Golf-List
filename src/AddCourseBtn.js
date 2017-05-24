import React from 'react'

import './AddCourseBtn.css'

const AddCourseBtn = ({ addCourse }) => {
  return( 
    <button 
      className="AddCourseBtn" 
      onClick={addCourse}>
        Add Course
    </button>
  )
}

export default AddCourseBtn