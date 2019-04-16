const workoutReducer = (state, action) => {
  console.log(state)
  console.log(action.type)
  switch (action.type) {
    case 'LOAD_WORKOUTS':
      return state.concat(action.payload)
    default:
      return state || []
  }

}

export default workoutReducer