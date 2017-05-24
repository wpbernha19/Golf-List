import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import './Course.css'
import Actions from './Actions'

class Course extends Component {
  componentDidMount() {
    this.nameInput.htmlEl.focus()
  }

  updateName = (ev) => {
    const { course, saveCourse } = this.props
    course.name = ev.target.value
    saveCourse(course)
  }

  blurOnEnter = (ev) => {
    if(ev.key === 'Enter') {
      ev.preventDefault()
      ev.target.blur()
    }
  }

render() {
  const { course, removeCourse } = this.props
    return(
      <li className="Course">
        <input type="checkbox" value="on" />
        <div className="details">
            <ContentEditable
              className="name"
              html={course.name}
              onChange={this.updateName}
              onKeyPress={this.blurOnEnter}
              ref={input => this.nameInput = input}
            />
          <Actions 
            course={course} 
            removeCourse={removeCourse}
          /> 
        </div>
      </li>
    )
  }
}

export default Course