import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import { PATHS } from '../constants'

const Footer = () => {
  return (
    <footer className="App-footer">
      <Link to={PATHS.workouts}>
        <span role="img" aria-label="workouts">
          💪
        </span>
      </Link>
      <Link to={PATHS.goals}>
        <span role="img" aria-label="goals">
          🎯
        </span>
      </Link>
      <Link to={PATHS.history}>
        <span role="img" aria-label="goals">
          📈
        </span>
      </Link>
    </footer>
  )
}

export default Footer
