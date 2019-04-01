import React, { Component } from 'react';
import './WorkoutTile.css';


class Footer extends Component {
  render() {
    return (
      <div className="Workout-tile">
        <div className="date">{this.props.workout.date ? this.props.workout.date : 'Next'}</div>
        {this.props.workout.exercises.map((exercise, i) => (
          <div key={i} className="tile-row">
            <div className="tier">T{exercise.tier}</div>
            <div className="exercise">{exercise.name}</div>
            <div className="weight">{exercise.weight.amount} {exercise.weight.unit}</div>
            <div className="format">{exercise.format}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Footer