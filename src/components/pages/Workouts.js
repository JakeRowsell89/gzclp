import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import WorkoutTile from '../WorkoutTile'
import { connect } from 'react-redux'
import { generateWorkout } from './../../lib'

class Workouts extends Component {
  render() {
    const workouts = this.props.workouts
    const generatedWorkouts = workouts.length ? [generateWorkout(workouts)] : []

    return (
      <div className="Workouts-page">
        {
          generatedWorkouts
            .concat(workouts)
            .slice(0, 3)
            .map((workout, i) => {
              return i === 0 ?
                <Link key={i} to={{ pathname: "/workout", state: { workout } }}><WorkoutTile key={i} workout={workout} /></Link> :
                <WorkoutTile key={i} workout={workout} />
            })
        }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    ...state,
    workouts: state.workouts
  }
}

export default connect(mapStateToProps)(Workouts)
