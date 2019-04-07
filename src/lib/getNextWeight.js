const getIncrement = require('./getIncrement')

function getNextWeight(previousWorkoutsOnDay, previousWeight, completedPrevious, exercise, tier, stage) {
  if (completedPrevious) {
    return previousWeight + getIncrement(exercise)
  } else if (!previousWeight) {
    return null // test a new weight
  } else if (stage === 1 && tier !== 3) { // cycle complete
    if (tier === 1) {
      return null // test a new weight
    } else {
      // find last stage 1 weight and add 7.5kg
      return previousWorkoutsOnDay
        .find(pw => pw.exercises
          .find(e => e.name === exercise && e.stage === 1 && e.completed))
    }
  } else {
    // stage must have switched or non-25 amrap set
    return previousWeight
  }
}

module.exports = getNextWeight