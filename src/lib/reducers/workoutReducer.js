const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_WORKOUTS':
      return state.concat(action.payload)
    case 'ACTIVATE_WORKOUT':
      const newState = JSON.parse(JSON.stringify(state))
      newState.activeWorkout = action.payload
      return newState
    default:
      return state || []
  }

}

export default workoutReducer