import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import WorkoutTile from '../WorkoutTile'

class Workout extends Component {
  render() {
    console.log(this.props.location.state)
    return (
      <div className="App-page">
        worky
      </div>

    )
  }
}

export default Workout