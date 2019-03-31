import React, { Component } from 'react';
import "./Workout.css"

class Workout extends Component {
  render() {
    const { workout } = this.props.location.state
    console.log(workout)
    return (
      <div className="Workout-page">
        {
          workout.exercises.map((exercise, i) => (
            <div className="exercise" key={i}>
              <div className="info">
                <div className="name">{exercise.name}</div>
                <div className="reps">{exercise.reps}</div>
                <div className="weight">{exercise.weight.amount}{exercise.weight.unit}</div>
              </div>
              <div className="interactive"></div>
            </div>
          ))
        }
        <div className="">
        </div>
      </div>
    )
  }
}

export default Workout