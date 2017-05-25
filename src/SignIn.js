import React from 'react'

import { auth, githubProvider } from './base'

import './SignIn.css'

const SignIn = () => {
  const authenticate = () => {
    auth.signInWithPopup(githubProvider)
  }
  return (
    <button 
      className="SignIn"
      onClick={() => authenticate(githubProvider)}
    >
      Sign In With GitHub
    </button>
  )
}

export default SignIn