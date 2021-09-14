function calc(...args) {
    let result = 1
    for (let i = 2; i < 9; i++) {
        result = args.every(x => x % i === 0) ? i : result
    }
    
    return result
}
console.log(calc(15, 5))