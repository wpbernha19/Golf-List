import React from 'react'

import './Actions.css'

const Actions = ({ course, removeCourse }) => {
  return (
    <span className="Actions">
      <button
        className="remove"
        onClick={() => removeCourse(course)}
      >
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  )
}

export default Actions