import React, { Component } from 'react';

import './UserInput.css'

class UserInput extends Component {
  render() {
    return (
      <div className="user-input">
        <textarea></textarea>
        <button className="add-course">Add Course</button>
      </div>
    )
  }
}

export default UserInput