function goalCompletionPercentage(achieved, target) {
  return Math.min(100, Math.floor((achieved / target) * 100))
}

export default function goalAchievement(goal, workouts) {
  return Object.entries(goal.exercises).map(([exercise, weight]) => {
    const achievedWeights = workouts
      .map(w => w.exercises)
      .map(ex =>
        ex.find(
          e => e.tier === goal.tier && e.name === exercise && e.completed,
        ),
      )
      .filter(e => e)
      .map(e => e.weight.amount)
    const maxAchievedWeight = Math.max(...achievedWeights)

    return {
      tier: goal.tier,
      exercise,
      goal: weight,
      achieved: maxAchievedWeight >= weight,
      completionPercentage: goalCompletionPercentage(maxAchievedWeight, weight),
    }
  })
}
