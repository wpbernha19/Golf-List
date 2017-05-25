import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import SignIn from './SignIn'
import SignOut from './SignOut'
import CourseList from './CourseList'
import AddCourseBtn from './AddCourseBtn'
import base from './base'


class App extends Component {
  state = {
    courses: {},
    uid: null,
  }

  componentWillMount() {
    base.syncState(
      'courses',
      {
        context: this,
        state: 'courses'
      }
    )
  }

  authHandler = (authData) => {
    this.setState({ uid: authData.user.uid })
  }

  course() {
    return {
      id: `course-${Date.now()}`,
      name: '',
      completed: false,
      dueDate: '',
    }
  }

  addCourse = () => {
    const courses = {...this.state.courses}
    const course = this.course()
    courses[course.id] = course
    this.setState({ courses })
  }

  saveCourse = (course) => {
    const courses = {...this.state.courses}
    courses[course.id] = course
    this.setState({ courses })
  }

  removeCourse = (course) => {
    const courses = {...this.state.courses}
    courses[course.id] = null
    this.setState({ courses})
  }

  signedIn = () => {
    return this.state.uid
  }

  renderMain = () => {
    const actions = {
      saveCourse: this.saveCourse,
      removeCourse: this.removeCourse,
    }

    return (
      <div>
        <SignOut />
          <AddCourseBtn addCourse={this.addCourse} />
          <CourseList 
            courses={this.state.courses}
            {...actions}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        { this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler} /> }
      </div>
    );
  }
}

export default App;
