function solve(arr){
    let count = 1
    const temp = []
    const actions = {
        add: x => temp.push(x),
        remove: () => temp.pop(),
    }

    arr.forEach(x => actions[x](count++))
    return temp.length !== 0 ? temp.join("\n") : "Empty"
}

console.log(solve(['add', 
'add', 
'add', 
'add']
))
console.log(solve(['remove', 
'remove', 
'remove']
))