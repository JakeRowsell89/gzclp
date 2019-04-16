function loadWorkouts(payload) {
  return {
    type: 'LOAD_WORKOUTS',
    payload,
  }
}

export default loadWorkouts