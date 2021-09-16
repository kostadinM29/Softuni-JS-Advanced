function aggregate(arr) {
    return `${arr.reduce((a, v) => a + v, 0)}
${arr.reduce((a, v) => a + 1 / v, 0)}
${arr.join("")}`
}

console.log(aggregate([1, 2, 3]))