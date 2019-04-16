const goalReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_GOALS':
      return state.concat(action.payload)
    default:
      return state || []
  }

}

export default goalReducer