import React, { Component } from 'react'
import PropTypes from 'prop-types'

import parseExerciseFormat from '../lib/parseExerciseFormat'
import EmojiButton from './buttons/EmojiButton'
import Countdown from './Countdown'

import './Exercise.css'

const exerciseStatuses = ['STARTED', 'REST', 'COMPLETE']
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
      ...parsedExerciseFormat,
    }
    this.startExercise = this.startExercise.bind(this)
    this.passSet = this.passSet.bind(this)
    this.failSet = this.failSet.bind(this)
    this.finishRest = this.finishRest.bind(this)
    // this.setNew5RepMax = this.setNew5RepMax.bind(this)
  }

  startExercise() {
    this.setState(() => ({
      exerciseStatus: exerciseStatuses.slice(0, 1).pop(),
      exercise: Object.assign({}, this.state.exercise, {
        completed: this.state.exercise.completed || false,
      }),
    }))
  }

  failSet() {
    this.setState(state => ({
      exerciseStatus:
        state.failedSets + state.passedSets + 1 < state.sets
          ? exerciseStatuses.slice(1, 2).pop()
          : exerciseStatuses.slice(2, 3).pop(),
      failedSets: state.failedSets + 1,
    }))
  }

  passSet() {
    this.setState(state => ({
      exerciseStatus:
        state.failedSets + state.passedSets + 1 < state.sets
          ? exerciseStatuses.slice(1, 2).pop()
          : exerciseStatuses.slice(2, 3).pop(),
      passedSets: state.passedSets + 1,
    }))
  }

  setNew5RepMax() {
    let n5rm = this.new5RepMax
    console.log('new 5 rep max', this)
  }

  finishRest() {
    this.setState(() => ({
      exerciseStatus: exerciseStatuses.slice(0, 1).pop(),
    }))
  }
  render() {
    const exercise = this.state.exercise

    return (
      <div className="exercise">
        <div className="info">
          <div className="name">
            T{exercise.tier} {exercise.name}
          </div>
          {(exercise.weight.amount && (
            <div className="weight">
              {exercise.weight.amount}
              {exercise.weight.unit}
            </div>
          )) || <div className="test-5rm">Test new 5rm!</div>}
        </div>
        {(exercise.weight.amount && (
          <div className="interactive">
            <div>
              Sets <span className="passedSets">{this.state.passedSets}</span>
              {this.state.failedSets > 0 && (
                <span className="failedSets"> + {this.state.failedSets}</span>
              )}{' '}
              / {this.state.sets}
            </div>
            <div>
              Reps{' '}
              {this.state.isAMRAP &&
              this.state.passedSets + this.state.failedSets ===
                this.state.sets - 1
                ? 'AMRAP'
                : this.state.reps}
            </div>
            {!this.state.exerciseStatus && (
              <EmojiButton emoji="▶️" clickHandler={this.startExercise} />
            )}
            {this.state.exerciseStatus === 'STARTED' && (
              <div>
                <EmojiButton emoji="✅" clickHandler={this.passSet} />{' '}
                <EmojiButton emoji="❌" clickHandler={this.failSet} />
              </div>
            )}
            {this.state.exerciseStatus === 'REST' && (
              <Countdown duration={90} finishRest={this.finishRest} />
            )}
            {this.state.exerciseStatus === 'COMPLETE' && <div>Completed!</div>}
          </div>
        )) || (
          <div className="interactive">
            <div className="5rm-input">
              <input
                type="text"
                value={this.new5RepMax}
                onChange={this.setNew5RepMax}
              />
            </div>
            <EmojiButton emoji="🎖" clickHandler={this.setNew5RepMax} />
          </div>
        )}
      </div>
    )
  }
}

Exercise.propTypes = {
  exercise: PropTypes.object,
}

export default Exercise
