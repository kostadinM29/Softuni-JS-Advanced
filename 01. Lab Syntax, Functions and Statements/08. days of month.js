function date(...args){
    let date = new Date(args[1] +1,args[0], 0)
    return date.getDate()
}

console.log(date(2, 2021))