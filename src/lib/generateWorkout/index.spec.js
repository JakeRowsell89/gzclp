import { ERRORS } from '../../constants'
import generateWorkout, { nextDay } from './index'

describe('generateWorkout', () => {
  it('throws an error when called with an invalid day', () => {
    expect(() => generateWorkout([], false)).toThrowError(ERRORS.INVALID_DAY)
  })
})

describe('nextDay', () => {
  it('throws when called without previousWorkouts', () => {
    expect(() => nextDay()).toThrow(ERRORS.MISSING_PARAMS('previousWorkouts'))
  })
  it('defaults to return day 1 if called with an empty array of previousWorkouts', () => {
    expect(nextDay([])).toBe(1)
  })
})
