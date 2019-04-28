const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_WORKOUTS':
      return state.concat(action.payload)
    default:
      return state || []
  }
}

export default workoutReducer
