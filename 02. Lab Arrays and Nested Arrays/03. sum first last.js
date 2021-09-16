function sum(arr){
    arr = arr.map(Number)
    return arr[0] + arr[arr.length-1]
}

console.log(sum(['20', '30', '40']))