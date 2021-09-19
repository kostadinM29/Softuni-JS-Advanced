function sort(arr) {
    return arr
        .sort((a, b) =>
            a.length - b.length === 0
                ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
                : a.length - b.length
        )
        .join("\n")
}

console.log(sort(['alpha', 
'beta', 
'gamma']
))