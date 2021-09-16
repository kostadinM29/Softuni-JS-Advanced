function calc (arr){
    return arr.sort((x, y) => x - y).slice(-Math.ceil(arr.length / 2))
}

console.log(calc([4, 7, 2, 5]))