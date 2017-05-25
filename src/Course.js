import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import './Course.css'
import Actions from './Actions'

class Course extends Component {
  componentDidMount() {
    if (!this.nameInput.htmlEl.textContent) {
      this.nameInput.htmlEl.focus()
    }
  }

  updateName = (ev) => {
    const { course, saveCourse } = this.props
    course.name = ev.target.value
    saveCourse(course)
  }

  toggleCompletion = (ev) => {
    const { course, saveCourse } = this.props
    course.completed = ev.target.checked
    saveCourse(course)
  }

   updateDD = (ev) => {
    const { course, saveCourse} = this.props
    course.dueDate = ev.target.value
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
        <input 
          type="checkbox"
          defaultChecked={course.completed}
          onChange={this.toggleCompletion}
        />
        <div className="details">
            <ContentEditable
              className="name"
              html={course.name}
              onChange={this.updateName}
              onKeyPress={this.blurOnEnter}
              ref={input => this.nameInput = input}
            />
            <input 
              type="date"
              onChange={this.updateDD}
              ref={input => this.dueDateInput = input}
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