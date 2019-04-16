import { combineReducers } from 'redux'
import workoutReducer from './workoutReducer'

const initializeReducer = (state = [], action) => {
  switch (action.type) {
    case 'INITIALIZE':
      return state.concat(action.payload)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  initialize: initializeReducer,
  workouts: workoutReducer
})

export default rootReducer
