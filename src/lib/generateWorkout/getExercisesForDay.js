import { EXERCISES } from '../../constants'

const exercisesForDay = {
  4: [
    {
      "completed": false,
      "tier": 1,
      "name": EXERCISES.DEADLIFT,
    },
    {
      "completed": false,
      "tier": 2,
      "name": EXERCISES.OHP,
    },
    {
      "completed": false,
      "tier": 3,
      "name": EXERCISES.DUMBELL_ROW,
    }
  ],
  3: [
    {
      "completed": false,
      "tier": 1,
      "name": EXERCISES.BENCH,
    },
    {
      "completed": false,
      "tier": 2,
      "name": EXERCISES.SQUAT
    },
    {
      "completed": false,
      "tier": 3,
      "name": EXERCISES.LAT_PULLDOWN
    }
  ],
  2: [
    {
      "completed": false,
      "tier": 1,
      "name": EXERCISES.OHP,
    },
    {
      "completed": false,
      "tier": 2,
      "name": EXERCISES.DEADLIFT,
    },
    {
      "completed": false,
      "tier": 3,
      "name": EXERCISES.DUMBELL_ROW,
    }
  ],
  1: [
    {
      "completed": false,
      "tier": 1,
      "name": EXERCISES.SQUAT,
    },
    {
      "completed": false,
      "tier": 2,
      "name": EXERCISES.BENCH,
    },
    {
      "completed": false,
      "tier": 3,
      "name": EXERCISES.LAT_PULLDOWN,
    }
  ]
}

function getExercisesForDay(day) {
  return exercisesForDay[day]
}

export default getExercisesForDay
