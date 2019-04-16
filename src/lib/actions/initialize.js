function initialize(state = {}) {
  return {
    type: 'INITIALIZE',
    payload: state
  }
}

export default initialize