import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import WorkoutTile from '../WorkoutTile'
import { connect } from 'react-redux'
import { generateWorkout } from './../../lib'
import activateWorkout from '../../lib/actions/activateWorkout'
import store from '../../lib/store'

class Workouts extends Component {
  constructor(props) {
    super(props)

    if (!props.workouts.activeWorkout) {
      // throw if no workouts
      const activeWorkout = generateWorkout(props.workouts)
      this.combinedWorkouts = [activeWorkout].concat(props.workouts)
      store.dispatch(activateWorkout(activeWorkout))
    } else {
      this.combinedWorkouts = [props.workouts.activeWorkout].concat(props.workouts)
    }
  }
  render() {
    return (
      <div className="Workouts-page" >
        {
          this.combinedWorkouts
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
