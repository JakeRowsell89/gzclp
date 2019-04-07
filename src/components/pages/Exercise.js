import React, { Component } from 'react';

import EmojiButton from '../buttons/EmojiButton'
import Countdown from '../Countdown'

import "./Exercise.css"

function parseExerciseFormat(format) {
  const isAMRAP = format.endsWith('+')
  const [sets, reps] = format.replace('+', '').split('x').map(Number)
  return { sets, reps, isAMRAP }
}

const exerciseStatuses = [
  'STARTED',
  'REST',
  'COMPLETE'
]
class Exercise extends Component {
  /*
    
    State of each exercise:
    -> Not started
    -> started
    -> rest
    -> completed
  */
  constructor(props) {
    super(props)

    const parsedExerciseFormat = parseExerciseFormat(props.exercise.format)

    this.state = {
      exercise: props.exercise,
      exerciseStatus: null,
      failedSets: 0,
      passedSets: 0,
      ...parsedExerciseFormat
    }
    this.startExercise = this.startExercise.bind(this);
    this.passSet = this.passSet.bind(this);
    this.failSet = this.failSet.bind(this);
    this.finishRest = this.finishRest.bind(this);
  }

  startExercise() {
    this.setState(state => ({
      exerciseStatus: exerciseStatuses.slice(0, 1).pop()
    }));
  }

  failSet() {
    this.setState(state => ({
      exerciseStatus: state.failedSets + state.passedSets + 1 < state.sets ? exerciseStatuses.slice(1, 2).pop() : exerciseStatuses.slice(2, 3).pop(),
      failedSets: state.failedSets + 1
    }));
  }

  passSet() {
    this.setState(state => ({
      exerciseStatus: state.failedSets + state.passedSets + 1 < state.sets ? exerciseStatuses.slice(1, 2).pop() : exerciseStatuses.slice(2, 3).pop(),
      passedSets: state.passedSets + 1
    }));
  }

  finishRest() {
    this.setState(state => ({
      exerciseStatus: exerciseStatuses.slice(0, 1).pop()
    }));
  }
  render() {
    const exercise = this.state.exercise

    return (
      <div className="exercise" >
        <div className="info">
          <div className="name">T{exercise.tier} {exercise.name}</div>
          <div className="weight">{exercise.weight.amount}{exercise.weight.unit}</div>
        </div>
        <div className="interactive">
          <div>Sets <span className="passedSets">{this.state.passedSets}</span>{this.state.failedSets > 0 && <span className="failedSets"> + {this.state.failedSets}</span>} / {this.state.sets}</div>
          <div>Reps {this.state.isAMRAP && this.state.passedSets + this.state.failedSets === this.state.sets - 1 ? "AMRAP" : this.state.reps}</div>
          {
            !this.state.exerciseStatus && <EmojiButton emoji="▶️" clickHandler={this.startExercise} />
          }
          {
            this.state.exerciseStatus === 'STARTED' && (<div><EmojiButton emoji="✅" clickHandler={this.passSet} /> <EmojiButton emoji="❌" clickHandler={this.failSet} /></div>)
          }
          {
            this.state.exerciseStatus === 'REST' && <Countdown duration={90} finishRest={this.finishRest} />
          }
          {
            this.state.exerciseStatus === 'COMPLETE' && <div>Completed!</div>
          }
        </div>
      </div>)
  }
}

export default Exercise