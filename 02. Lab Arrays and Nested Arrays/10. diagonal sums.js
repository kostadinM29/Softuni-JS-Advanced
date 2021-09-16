function calc(arr) {
    const calcDiagonal = arr => arr.reduce((a, v, i) => a + v[i], 0)

    return `${calcDiagonal(arr)} ${calcDiagonal(arr.reverse())}`
}

console.log(calc([[20, 40],
    [10, 60]]
   ))