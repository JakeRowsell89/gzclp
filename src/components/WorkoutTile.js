import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './WorkoutTile.css'

class WorkoutTile extends Component {
  render() {
    return (
      <div
        className={`Workout-tile ${
          this.props.workout.completed ? 'complete' : 'incomplete'
        }`}
      >
        <div className="tile-row">
          <div className="day">Day{this.props.workout.day}</div>
          <div className="date">
            {this.props.workout.date ? this.props.workout.date : 'Next'}
          </div>
        </div>
        {this.props.workout.exercises.map((exercise, i) => (
          <div
            key={i}
            className={`tile-row ${
              exercise.completed ? 'complete' : 'incomplete'
            }`}
          >
            <div className="tier">T{exercise.tier}</div>
            <div className="exercise">{exercise.name}</div>
            <div className="weight">
              {exercise.weight.amount} {exercise.weight.unit}
            </div>
            <div className="format">{exercise.format}</div>
          </div>
        ))}
      </div>
    )
  }
}

WorkoutTile.propTypes = {
  workout: PropTypes.object,
  'workout.completed': PropTypes.bool,
  'workout.day': PropTypes.number,
  'workout.date': PropTypes.instanceOf(Date),
  'workout.exercises': PropTypes.array,
}

export default WorkoutTile
