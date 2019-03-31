import React, { Component } from 'react';

import "./Exercise.css"

class Exercise extends Component {
  render() {
    const exercise = this.props.exercise
    return (<div className="exercise" >
      <div className="info">
        <div className="name">{exercise.name}</div>
        <div className="reps">{exercise.reps}</div>
        <div className="weight">{exercise.weight.amount}{exercise.weight.unit}</div>
      </div>
      <div className="interactive"></div>
    </div>)
  }
}

export default Exercise