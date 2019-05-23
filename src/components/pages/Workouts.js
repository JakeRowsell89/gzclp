import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WorkoutTile from '../WorkoutTile'
import generateWorkout from '../../lib/generateWorkout'
import activateWorkout from '../../lib/actions/activateWorkout'
import store from '../../lib/store'

class Workouts extends Component {
  constructor(props) {
    super(props)

    this.generateNewWorkout = this.generateNewWorkout.bind(this)

    if (!props.activeWorkout) {
      this.generateNewWorkout()
    }
  }

  generateNewWorkout(event) {
    const nextWorkoutDay =
      event && event.target && event.target.value && Number(event.target.value) || 1
    let activeWorkout = generateWorkout(this.props.workouts, nextWorkoutDay)
    store.dispatch(activateWorkout(activeWorkout))
  }
  render() {
    return (
      <div className="Workouts-page">
        {(this.props.activeWorkout ? [this.props.activeWorkout] : [])
          .concat(this.props.workouts)
          .slice(0, 3)
          .map((workout, i) => (
            <WorkoutTile
              key={i}
              workout={workout}
              changeHandler={this.generateNewWorkout}
            />
          ))}
      </div>
    )
  }
}

Workouts.propTypes = {
  workouts: PropTypes.array,
  activeWorkout: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    ...state,
    workouts: state.workouts,
    activateWorkout: state.activateWorkout,
  }
}

export default connect(mapStateToProps)(Workouts)
