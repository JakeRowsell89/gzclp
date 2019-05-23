import getExercisesForDay from './getExercisesForDay'
import { ERRORS } from '../../constants'

describe('getExercisesForDay', () => {
  it('Throws when an invalid day is passed in', () => {
    expect(() => getExercisesForDay()).toThrow(ERRORS.INVALID_DAY)
    expect(() => getExercisesForDay(0)).toThrow(ERRORS.INVALID_DAY)
    expect(() => getExercisesForDay(10)).toThrow(ERRORS.INVALID_DAY)
    expect(() => getExercisesForDay(false)).toThrow(ERRORS.INVALID_DAY)
  })
  it('Returns a basic exercise object a valid day is passed in', () => {
    const exerciseObjects = getExercisesForDay(1)
    exerciseObjects.forEach(exerciseObject => {
      expect(exerciseObject).toHaveProperty('completed')
      expect(exerciseObject).toHaveProperty('name')
      expect(exerciseObject).toHaveProperty('tier')
      expect(typeof exerciseObject.tier).toBe('number')
      expect(typeof exerciseObject.name).toBe('string')
      expect(exerciseObject.completed).toBe(null)
    })
  })
})
