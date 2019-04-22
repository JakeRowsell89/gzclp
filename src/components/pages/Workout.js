import React, { Component } from 'react';

import Exercise from './Exercise'
import "./Workout.css"

class Workout extends Component {
  constructor(props) {
    super(props)
    const workout = this.props.location.workout || {}
    this.workout = workout
    if (!workout) {
      window.open('/')
    }
  }
  render() {


    return (
      <div className="Workout-page">
        {
          this.workout.exercises.map((exercise, i) => (
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