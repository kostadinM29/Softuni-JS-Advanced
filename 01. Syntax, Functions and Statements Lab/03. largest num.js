function largestNum(...args) {
    return `The largest number is ${args.sort((a, b) => b - a)[0]}.`
}
console.log(largestNum(5, -3, 16))