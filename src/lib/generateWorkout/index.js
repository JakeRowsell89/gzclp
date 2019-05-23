import getExercisesForDay from './getExercisesForDay'
import getFormat from './getFormat'
import getNextStage from './getNextStage'
import getNextWeight from './getNextWeight'

import { ERRORS } from '../../constants'

const routineDays = 4 // Magic number for days in routine, possibly changeable if other routines supported

function unBasedExercise(exercise) {
  return {
    stage: 1,
    format: getFormat(exercise.tier, 1),
    weight: {
      amount: null,
      unit: 'kg',
    },
  }
}

function addWeightsToExercise(exercise, previousWorkouts) {
  const previousExercises = previousWorkouts
    .map(pw => pw.exercises)
    .reduce((p, c) => {
      const x = c.find(
        e =>
          e.name === exercise.name &&
          e.tier === exercise.tier &&
          e.completed !== null, // possibly not needed
      )
      return x ? p.concat(x) : p
    }, [])
  // get first element
  const lastExercise = previousExercises[0]

  if (!lastExercise) {
    // throw new Error('No workout history, new starter will require testing')
    return unBasedExercise(exercise)
  } else {
    const stage = getNextStage(lastExercise)

    return {
      completed: false,
      tier: exercise.tier,
      name: exercise.name,
      stage,
      format: getFormat(exercise.tier, stage),
      weight: {
        unit: 'kg',
        amount: getNextWeight(
          previousExercises,
          lastExercise.weight.amount,
          lastExercise.completed,
          exercise.name,
          exercise.tier,
          stage,
        ),
      },
    }
  }
}

export function nextDay(previousWorkouts) {
  if (!Array.isArray(previousWorkouts)) {
    throw new Error(ERRORS.MISSING_PARAMS('previousWorkouts'))
  }
  const nextDay = (previousWorkouts[0] && previousWorkouts[0].day + 1) || 1

  return nextDay > routineDays ? 1 : nextDay
}

function generateWorkout(previousWorkouts = [], day) {
  if (!day && typeof day !== 'number') {
    throw new Error(ERRORS.INVALID_DAY)
  }
  const nextWorkoutDay = day || nextDay(previousWorkouts)
  const exercises = getExercisesForDay(nextWorkoutDay)
  const exercisesWithWeights = exercises.map(exercise =>
    addWeightsToExercise(exercise, previousWorkouts),
  )

  return {
    day: nextWorkoutDay,
    exercises: exercisesWithWeights,
    completed: false,
    date: null,
  }
}

export default generateWorkout
