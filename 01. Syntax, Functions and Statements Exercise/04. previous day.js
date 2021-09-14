function calc(year, month, day){
    let date = new Date(year, month-1, day)
    date.setDate(date.getDate()-1)
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

console.log(calc(2016, 9, 30)) 
console.log(calc(2016, 10, 1))  