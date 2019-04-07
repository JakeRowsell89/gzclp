import React, { Component } from 'react';

import Exercise from './Exercise'
import "./Workout.css"

class Workout extends Component {
  constructor(props) {
    super(props)
    this.inProgress = false
  }
  render() {
    const { workout } = this.props.location.state

    return (
      <div className="Workout-page">
        {
          workout.exercises.map((exercise, i) => (
            <Exercise key={i} exercise={exercise} />
          ))
        }
        <div className="">
        </div>
      </div>
    )
  }
}

export default Workout