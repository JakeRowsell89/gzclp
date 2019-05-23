import { EXERCISES, ERRORS } from '../../constants'

const exercisesForDay = {
  4: [
    {
      tier: 1,
      name: EXERCISES.DEADLIFT,
    },
    {
      tier: 2,
      name: EXERCISES.OHP,
    },
    {
      tier: 3,
      name: EXERCISES.DUMBELL_ROW,
    },
  ],
  3: [
    {
      tier: 1,
      name: EXERCISES.BENCH,
    },
    {
      tier: 2,
      name: EXERCISES.SQUAT,
    },
    {
      tier: 3,
      name: EXERCISES.LAT_PULLDOWN,
    },
  ],
  2: [
    {
      tier: 1,
      name: EXERCISES.OHP,
    },
    {
      tier: 2,
      name: EXERCISES.DEADLIFT,
    },
    {
      tier: 3,
      name: EXERCISES.DUMBELL_ROW,
    },
  ],
  1: [
    {
      tier: 1,
      name: EXERCISES.SQUAT,
    },
    {
      tier: 2,
      name: EXERCISES.BENCH,
    },
    {
      tier: 3,
      name: EXERCISES.LAT_PULLDOWN,
    },
  ],
}

function getExercisesForDay(day) {
  if (!exercisesForDay[day]) {
    throw new Error(ERRORS.INVALID_DAY)
  }
  return exercisesForDay[day].map(exercise =>
    Object.assign({}, exercise, { completed: null }),
  )
}

export default getExercisesForDay
