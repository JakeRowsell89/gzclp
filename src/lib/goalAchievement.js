export default function goalAchievement(goal, workouts) {
  return Object.entries(goal.exercises).map(([exercise, weight, ...x]) => {
    const achievedWeights = workouts
      .map(w => w.exercises)
      .map(e =>
        e.find(e => e.tier === goal.tier && e.name === exercise && e.completed))
      .filter(e => e)
      .map(e => e.weight.amount)
    const maxAchievedWeight = Math.max(...achievedWeights)

    return {
      tier: goal.tier,
      exercise,
      goal: weight,
      achieved: maxAchievedWeight,
      accomplished: maxAchievedWeight >= goal
    }
  })
}
