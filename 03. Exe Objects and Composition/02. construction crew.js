function crew(obj) {
    if (obj.dizziness === true) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience
        obj.dizziness = false
    }
    return obj
}

console.log(crew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ))