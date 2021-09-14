function calc(type, weight, price){
    let weightInKg = weight / 1000
    let sum = weightInKg * price
    return `I need $${sum.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`
}
console.log(calc('orange', 2500, 1.80))