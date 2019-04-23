import getIncrement from './getIncrement'
import { T2_INCREMENT } from '../../constants'

function getNextWeight(
  previousWorkoutsOnDay,
  previousWeight,
  completedPrevious,
  exercise,
  tier,
  stage,
) {
  if (completedPrevious) {
    return previousWeight + getIncrement(exercise)
  } else if (!previousWeight) {
    return null // test a new weight
  } else if (stage === 1 && tier !== 3) {
    // cycle complete
    if (tier === 1) {
      return null // test a new weight
    } else {
      // find last stage 1 weight and add 7.5kg
      const lastAchieved = previousWorkoutsOnDay.find(pw =>
        pw.exercises.find(
          e => e.name === exercise && e.stage === 1 && e.completed,
        ),
      )
      return (
        lastAchieved &&
        lastAchieved.exercises.find(
          e => e.name === exercise && e.stage === 1 && e.completed,
        ).weight.amount + T2_INCREMENT
      )
    }
  } else {
    // stage must have switched or non-25 amrap set
    return previousWeight
  }
}

export default getNextWeight
