import React, { Component } from 'react';
import goals from '../../fixtures/goals'
import workouts from '../../fixtures/workouts'
import goalAchievement from '../../lib/goalAchievement'
import './Goals.css'

class Goals extends Component {
  render() {
    return (
      <div className="Goals-page">
        {
          goals
            .map(goal => goalAchievement(goal, workouts))
            .map((goalTier, i) => {
              return goalTier.find(g => g.goal) && (
                <div key={i} className="tier">{
                  goalTier.map((goal, j) =>
                    goal.goal &&
                    (
                      <div key={j} className={goal.accomplished ? "goal accomplished" : "goal"}>
                        <div className="exercise">
                          {goal.exercise}
                          {goal.accomplished && <span role="img" aria-label="green-tick"> ✅</span>}
                        </div>
                        <div className="achieved">{goal.achieved}kg</div>
                        <div className="target">{goal.goal}kg</div>
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

export default Goals