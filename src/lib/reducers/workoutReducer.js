const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_WORKOUTS':
      return action.payload
    default:
      return []
  }

}

export default workoutReducer