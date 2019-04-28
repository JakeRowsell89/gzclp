const activeWorkoutReducer = (state, action) => {
  switch (action.type) {
    case 'ACTIVATE_WORKOUT':
      return action.payload
    default:
      return state || null
  }
}

export default activeWorkoutReducer
