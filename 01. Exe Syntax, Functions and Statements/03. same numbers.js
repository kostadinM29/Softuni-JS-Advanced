function calc(num){
    const allEqual = arr => arr.every(val => val === arr[0]);
    let digits = num.toString().split('')
    let realDigits = digits.map(Number)
    let sum = 0
    for (var i = 0; i < realDigits.length; i++){
        sum += realDigits[i]
    }

    return `${allEqual(realDigits)}
${sum}`
}
console.log(calc(1234))