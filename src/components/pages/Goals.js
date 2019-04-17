import React, { Component } from 'react';
import { connect } from 'react-redux'

import goalAchievement from '../../lib/goalAchievement'
import './Goals.css'

class Goals extends Component {
  render() {
    const workouts = this.props.workouts
    return (
      <div className="Goals-page">
        {
          this.props.goals
            .map(goal => goalAchievement(goal, workouts))
            .map((goalTier, i) => {
              return goalTier.find(g => g.goal) && (
                <div key={i} className="tier">{
                  goalTier.map((goal, j) =>
                    goal.goal &&
                    (
                      <div key={j} className={goal.achieved ? "goal accomplished" : "goal"}>
                        <div className="exercise">
                          {goal.exercise}
                          {goal.accomplished && <span role="img" aria-label="green-tick"> ✅</span>}
                        </div>
                        <div className="progress-wrapper">
                          <div className="achieved">{goal.completionPercentage}%</div>
                          <div className="progress-bar" style={{ width: goal.completionPercentage + "%", background: goal.completionPercentage < 70 ? "peru" : "green" }}></div>
                        </div>
                        <div className="target"><span role="img" aria-label="target">🎯</span>{goal.goal}kg</div>
                      </div>
                    )
                  )
                }
                </div>)
            })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    workouts: state.workouts,
    goals: state.goals
  }
}

export default connect(mapStateToProps)(Goals)