function getNextStage({ completed, stage, tier }) {
  if (completed || tier === 3) {
    return stage
  } else if (stage === 3) {
    return 1
  } else {
    return stage + 1
  }
}

module.exports = getNextStage