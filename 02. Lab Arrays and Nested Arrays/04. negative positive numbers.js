function numbers(arr){
    return arr.reduce((a, v) => {
        v < 0 ? a.unshift(v) : a.push(v)
        return a
    }, [])
}

console.log(numbers([7, -2, 8, 9]))