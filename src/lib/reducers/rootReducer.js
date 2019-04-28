import { combineReducers } from 'redux'
import workoutReducer from './workoutReducer'
import goalReducer from './goalReducer'
import activeWorkoutReducer from './activeWorkoutReducer'

const rootReducer = combineReducers({
  activeWorkout: activeWorkoutReducer,
  workouts: workoutReducer,
  goals: goalReducer,
})

export default rootReducer
