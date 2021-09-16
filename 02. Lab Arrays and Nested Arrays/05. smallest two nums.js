function calc(arr){
    return arr
    .sort((x, y) => x - y)
    .slice(0, 2)
    .join(" ")
}

console.log(calc([30, 15, 50, 5]))