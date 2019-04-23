import getNextWeight from './getNextWeight'
import getIncrement from './getIncrement'

import { EXERCISES, T2_INCREMENT } from '../../constants'

describe('getNextWeight', () => {
  const previousWeight = 123456789

  it('returns null when not passed a previousWeight', () => {
    expect(getNextWeight()).toBe(null)
  })
  it('returns previousWeight when not completed', () => {
    expect(getNextWeight([], previousWeight, false)).toBe(previousWeight)
  })

  it('returns incremented previousWeight if previousWeight for that exercise was completed', () => {
    Object.entries(EXERCISES).forEach(([key, exercise]) => {
      expect(getNextWeight([], previousWeight, true, exercise)).toBe(
        previousWeight + getIncrement(exercise),
      )
    })
  })

  it('returns null if stage 1 and not tier 1', () => {
    expect(getNextWeight([], previousWeight, false, 'donkey', 1, 1)).toBe(null)
  })
  it('returns last stage 1 weight + 7.5 if stage 1 and tier 2', () => {
    const previousAchievedWeight = { amount: 20, unit: 'kg' }
    expect(
      getNextWeight(
        [
          {
            exercises: [
              {
                name: 'donkey',
                completed: true,
                stage: 1,
                weight: previousAchievedWeight,
              },
            ],
          },
        ],
        previousWeight,
        false,
        'donkey',
        2,
        1,
      ),
    ).toBe(previousAchievedWeight.amount + T2_INCREMENT)
  })
})
