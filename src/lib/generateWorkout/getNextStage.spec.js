import getNextStage from './getNextStage'

const firstStage = 1
const lastStage = 3
const normalTier = 1
const singleStageTier = 3

describe('getNextStage', () => {
  it('stays on the same stage when the previous workout was completed', () => {
    const stage = 0
    expect(getNextStage({ completed: true, stage: stage })).toEqual(stage)
  })
  it('stays on the same stage when in tier 3 regardless of completion', () => {
    const stage = 0
    expect(getNextStage({ completed: true, stage, tier: singleStageTier })).toEqual(stage)
    expect(getNextStage({ completed: false, stage, tier: singleStageTier })).toEqual(stage)
  })
  it('goes to stage 1 if not completed and at stage 3', () => {
    expect(getNextStage({ completed: false, stage: lastStage, tier: normalTier })).toEqual(firstStage)
  })
  it('goes to the next stage when not completed and not tier 3', () => {
    expect(getNextStage({ completed: false, stage: firstStage, tier: normalTier })).toEqual(firstStage + 1)
  })
})