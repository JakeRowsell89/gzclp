import { TIERS, STAGES } from '../../constants'
import getFormat from './getFormat'

describe('getFormat', () => {
  it('is a function', () => {
    expect(typeof getFormat).toBe('function')
  })
  TIERS.forEach(tier => {
    STAGES.forEach(stage => {
      it(`returns a string when called with valid tier/stage ${tier}/${stage}`, () => {
        expect(typeof getFormat(tier, stage)).toBe('string')
      })
    })
  })

  it('throws when called with invalid tier/stage', () => {
    expect(() => getFormat(0, 0)).toThrow()
  })
})
