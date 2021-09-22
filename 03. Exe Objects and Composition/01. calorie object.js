function object(arr){
    return arr.reduce((a, v, i) => {
        if (i % 2 === 0) {
            a[v] = Number(arr[i + 1])
        }
        return a
    }, {})
}

console.log(object(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']))