import React, { Component } from 'react';
import WorkoutTile from '../WorkoutTile'
import workouts from '../../fixtures/workouts'

class Workouts extends Component {
  render() {
    console.log(workouts)
    return (
      <div className="App-page">
        {
          workouts.slice(0, 3).map((workout, i) => {
            return (
              <WorkoutTile key={i} workout={workout} />
            )
          })
        }
      </div>

    )
  }
}

export default Workouts