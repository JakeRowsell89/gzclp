import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './WorkoutTile.css'

const WorkoutTile = props => {
  const day = props.workout.day

  return (
    <div
      className={`Workout-tile ${
        props.workout.completed ? 'complete' : 'incomplete'
      }`}
    >
      <div className="tile-row">
        <div className="day">
          Day
          {(!props.workout.completed && (
            <select defaultValue={day} onChange={props.changeHandler}>
              {[1, 2, 3, 4].map((n, i) => {
                return (
                  <option key={i} value={n}>
                    {n}
                  </option>
                )
              })}
            </select>
          )) ||
            day}
        </div>
        <div className="date">
          {props.workout.date ? (
            props.workout.date
          ) : (
            <Link to={{ pathname: '/workout', workout: props.workout }}>
              <span role="img" aria-label="liftoff">
                🚀
              </span>
            </Link>
          )}
        </div>
      </div>
      {props.workout.exercises.map((exercise, i) => (
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

WorkoutTile.propTypes = {
  workout: PropTypes.object,
  'workout.completed': PropTypes.bool,
  'workout.day': PropTypes.number,
  'workout.date': PropTypes.instanceOf(Date),
  'workout.exercises': PropTypes.array,
  changeHandler: PropTypes.func,
}

export default WorkoutTile
