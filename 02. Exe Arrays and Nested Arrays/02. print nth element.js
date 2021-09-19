function array(arr, s){
    const result = []
    for (let i = 0; i < arr.length; i += s) {
        result.push(arr[i])
    }

    return result
}

console.log(array(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))
console.log(array(['dsa',
'asd', 
'test', 
'tset'], 
2
))