import React, { Component } from 'react';
import WorkoutTile from '../WorkoutTile'
import workouts from '../../fixtures/workouts.json'

import './History.css'
class History extends Component {
  render() {
    return (
      <div className="History-page">
        {
          workouts.map((workout, i) => <WorkoutTile key={i} workout={workout} />
          )
        }
      </div>
    )
  }
}

export default History