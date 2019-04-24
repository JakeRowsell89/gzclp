function parseExerciseFormat(format) {
  const isAMRAP = format.endsWith('+')
  const [sets, reps] = format
    .replace('+', '')
    .split('x')
    .map(Number)
  return { sets, reps, isAMRAP }
}

export default parseExerciseFormat
