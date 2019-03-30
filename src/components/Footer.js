import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

import Workouts from './pages/Workouts'


class Footer extends Component {
  render() {
    console.log('rerender')
    return (
      <footer className="App-footer">
        <Link to="/workouts">Workouts</Link>
      </footer>
    )
  }
}

export default Footer