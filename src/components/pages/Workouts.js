import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import WorkoutTile from '../WorkoutTile'
import workouts from '../../fixtures/workouts'

class Workouts extends Component {
  render() {
    return (
      <div className="Workouts-page">
        {
          workouts.slice(0, 3).map((workout, i) => {
            return i === 0 ?
              <Link key={i} to={{ pathname: "/workout", state: { workout } }}><WorkoutTile key={i} workout={workout} /></Link> :
              <WorkoutTile key={i} workout={workout} />
          })
        }
      </div>

    )
  }
}

export default Workouts