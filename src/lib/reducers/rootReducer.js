import { combineReducers } from 'redux'
import workoutReducer from './workoutReducer'
import goalReducer from './goalReducer'

const rootReducer = combineReducers({
  workouts: workoutReducer,
  goals: goalReducer,
})

export default rootReducer
