import loadWorkouts from './actions/loadWorkouts'
import loadGoals from './actions/loadGoals'
import workouts from '../fixtures/workouts.json'
import goals from '../fixtures/goals.json'

function initialize(store) {
  // load workouts, custom increments, goals etc
  setTimeout(() => store.dispatch(loadWorkouts(workouts)), 500)
  setTimeout(() => store.dispatch(loadGoals(goals)), 1000)
}

export default initialize