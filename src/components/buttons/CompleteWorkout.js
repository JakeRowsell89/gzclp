import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './CompleteWorkout.css'

class CompleteWorkout extends Component {
  render() {
    return (
      <Link to="/Workouts" className="CompleteWorkout-btn" >
        <span role="img" aria-label="CompleteWorkout">
          🎉
        </span>
      </Link >
    )
  }
}

export default CompleteWorkout