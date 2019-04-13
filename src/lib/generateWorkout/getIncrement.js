import { EXERCISES } from '../../constants'

const increments = {
  [EXERCISES.SQUAT]: 5,
  [EXERCISES.DEADLIFT]: 5,
  [EXERCISES.BENCH]: 2.5,
  [EXERCISES.OHP]: 2.5,
  [EXERCISES.LAT_PULLDOWN]: 5,
  [EXERCISES.DUMBELL_ROW]: 2
}

function getIncrement(exercise) {
  return increments[exercise]
}

export default getIncrement
