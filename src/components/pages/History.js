import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorkoutTile from '../WorkoutTile'

import './History.css'

class History extends Component {
  render() {
    return (
      <div className="History-page">
        {this.props.workouts.map((workout, i) => (
          <WorkoutTile key={i} workout={workout} />
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    workouts: state.workouts,
  }
}

export default connect(mapStateToProps)(History)
