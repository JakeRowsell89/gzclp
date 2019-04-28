import getExercisesForDay from './getExercisesForDay'
import getFormat from './getFormat'
import getNextStage from './getNextStage'
import getNextWeight from './getNextWeight'

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

function addWeightsToExercises(exercises, previousWorkouts, day) {
  // note this assumes a fixed routine, changing the contents of a day WILL break this
  const previousWorkoutsOnDay = previousWorkouts.filter(pw => pw.day === day)
  const lastWorkoutOnDay = previousWorkoutsOnDay[0]
  if (!lastWorkoutOnDay) {
    // throw new Error('No workout history, new starter will require testing')
    return exercises.map(unBasedExercise)
  } else {
    return exercises.map(e => {
      const lastExerciseOnDay = lastWorkoutOnDay.exercises.find(
        le => le.name === e.name,
      )
      const stage = getNextStage(lastExerciseOnDay)

      return {
        completed: false,
        tier: e.tier,
        name: e.name,
        stage,
        format: getFormat(e.tier, stage),
        weight: {
          unit: 'kg',
          amount: getNextWeight(
            previousWorkoutsOnDay,
            lastExerciseOnDay.weight.amount,
            lastExerciseOnDay.completed,
            e.name,
            e.tier,
            stage,
          ),
        },
      }
    })
  }
}

function nextDay(previousWorkouts) {
  const nextDay = previousWorkouts[0].day + 1

  return nextDay > routineDays ? 1 : nextDay
}

function generateWorkout(previousWorkouts, day) {
  if (day !== undefined && typeof day !== 'number') {
    throw new Error('Provided day was not a number')
  }
  const nextWorkoutDay = day || nextDay(previousWorkouts)
  const exercises = getExercisesForDay(nextWorkoutDay)
  const exercisesWithWeights = addWeightsToExercises(
    exercises,
    previousWorkouts,
    nextWorkoutDay,
  )

  return {
    day: nextWorkoutDay,
    exercises: exercisesWithWeights,
    completed: false,
    date: null,
  }
}

export default generateWorkout
