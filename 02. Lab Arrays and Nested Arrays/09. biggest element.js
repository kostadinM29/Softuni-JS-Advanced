function element(arr){
    let max = Number.MIN_SAFE_INTEGER
    arr.forEach(element => {
        let maxOfArray = Math.max(...element)
        if (maxOfArray > max) {
            max = maxOfArray
        }
    });
    return max
}

console.log(element([[20, 50, 10],
    [8, 33, 145]]
    ))
console.log(element([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
    ))
