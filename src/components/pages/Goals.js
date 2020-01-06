import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import goalAchievement from '../../lib/goalAchievement'
import './Goals.css'
// import workoutReducer from '../../lib/reducers/workoutReducer'
// import Workout from './Workout'

class Goals extends Component {
  render() {
    const days = 90
    const workouts = this.props.workouts.filter(
      workout =>
        Math.floor((new Date() - new Date(workout.date)) / 86400000) <= days,
    )
    return (
      <div className="Goals-page">
        {this.props.goals
          .map(goal => goalAchievement(goal, workouts))
          .map((goalTier, i) => {
            return (
              goalTier.find(g => g.goal) && (
                <div key={i} className="tier">
                  {goalTier.map(
                    (goal, j) =>
                      goal.goal && (
                        <div
                          key={j}
                          className={
                            goal.achieved ? 'goal accomplished' : 'goal'
                          }
                        >
                          <div className="exercise">
                            {goal.exercise}
                            {goal.accomplished && (
                              <span role="img" aria-label="green-tick">
                                {' '}
                                ✅
                              </span>
                            )}
                          </div>
                          <div className="progress-wrapper">
                            <div className="achieved">
                              {goal.completionPercentage}%
                            </div>
                            <div
                              className="progress-bar"
                              style={{
                                width: goal.completionPercentage + '%',
                                background:
                                  goal.completionPercentage < 70
                                    ? 'peru'
                                    : 'green',
                              }}
                            />
                          </div>
                          <div className="target">
                            <span role="img" aria-label="target">
                              🎯
                            </span>
                            {goal.goal}kg
                          </div>
                        </div>
                      ),
                  )}
                </div>
              )
            )
          })}
      </div>
    )
  }
}

Goals.propTypes = {
  goals: PropTypes.array,
  workouts: PropTypes.array,
}

function mapStateToProps(state) {
  return {
    workouts: state.workouts,
    goals: state.goals,
  }
}

export default connect(mapStateToProps)(Goals)
