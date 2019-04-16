import loadWorkouts from './actions/loadWorkouts'
import workouts from '../fixtures/workouts.json'

function initialize(store) {
  // load workouts, custom increments, goals etc
  setTimeout(() => store.dispatch(loadWorkouts(workouts)), 2000)
}

export default initialize