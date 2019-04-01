import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

import { PATHS } from '../constants'

class Footer extends Component {
  render() {
    console.log('rerender')
    return (
      <footer className="App-footer">
        <Link to={PATHS.workouts}>
          <span role="img" aria-label="workouts">💪</span>
        </Link>
      </footer>
    )
  }
}

export default Footer