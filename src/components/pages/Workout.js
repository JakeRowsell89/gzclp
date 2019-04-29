import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Exercise from '../Exercise'
import './Workout.css'

const Workout = props => (
  <div className="Workout-page">
    {props.workout.exercises.map((exercise, i) => (
      <Exercise key={i} exercise={exercise} />
    ))}
    <div className="" />
  </div>
)

Workout.propTypes = {
  workout: PropTypes.object,
  'workout.exercises': PropTypes.array,
}

function mapStateToProps(state) {
  return {
    ...state,
    workout: state.activeWorkout,
  }
}

export default connect(mapStateToProps)(Workout)
