function numbers(arr) {
    return arr
        .filter((_, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
}

console.log(numbers([10, 15, 20, 25]))