function pop(arr) {
    const parsedData = arr.reduce((a, b) => {
        const [name, population] = b.split(" <-> ")
        a[name] = (a[name] || 0) + Number(population)
        return a
    }, {})

    return Object.entries(parsedData)
        .map(x => `${x[0]} : ${x[1]}`)
        .join("\n")
}

console.log(pop(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
))