  
function calc(words) {
    return words.match(/\w+/g).join(", ").toLocaleUpperCase()
}

console.log(calc('Hi, how are you?'))
console.log(calc('hello'))