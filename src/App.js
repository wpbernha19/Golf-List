import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import CourseList from './CourseList'
import AddCourseBtn from './AddCourseBtn'


class App extends Component {
  state = {
    courses: { }
  }

  course() {
    return {
      id: `course-${Date.now()}`,
      name: '',
    }
  }

  addCourse = () => {
    const courses = {...this.state.courses}
    const course = this.course()
    courses[course.name] = course
    this.setState({ courses })
  }

  saveCourse = (course) => {
    const courses = {...this.state.courses}
    courses[course.id] = course
    this.setState({ courses })
  }

  removeCourse = (course) => {
    const courses = {...this.state.courses}
    delete courses[course.id]
    this.setState({ courses})
  }

  render() {
    const actions = {
      saveCourse: this.saveCourse,
      removeCourse: this.removeCourse,
    }

    return (
      <div className="App">
        <Header />
        <AddCourseBtn addCourse={this.addCourse} />
        <CourseList 
          courses={this.state.courses}
          {...actions}
        />
      </div>
    );
  }
}

export default App;
