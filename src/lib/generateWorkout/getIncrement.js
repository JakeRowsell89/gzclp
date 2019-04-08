const increments = {
  'Squat': 5,
  'Bench Press': 2.5,
  'Lat Pulldown': 5,
  'Deadlift': 5,
  'Overhead Press': 2.5,
  'Dumbbell Row': 2
}

module.exports = function (exercise) {
  return increments[exercise]
}
