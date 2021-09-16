function sequence(n, k) {
    const arr = [1]
    for (let i = 1; i < n; i++) {
        arr.push(arr.slice(-k).reduce((a, v) => a + v, 0))
    }
    return arr
}

console.log(sequence(6, 3))
console.log(sequence(8, 2))