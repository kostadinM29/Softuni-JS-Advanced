function price(arr) { // judge way
    let products = {}
    for (const element of arr) {
        let [townName, productName, productPrice] = element.split(' | ')
        productPrice = Number(productPrice)

        if (!products.hasOwnProperty(productName)){
            products[productName] = {}
        }
        products[productName][townName] = productPrice
    }
    let result = []
    for (const productName in products) {
        let townsSorted = Object.entries(products[productName]).sort((a, b) => a[1] - b[1])
        let cheapestTown = townsSorted[0]
        result.push(`${productName} -> ${cheapestTown[1]} (${cheapestTown[0]})`)
    }
    return result.join('\n')
}


function price2(arr) { // correct way
    const data = arr
        .map(x => x.split(" | "))
        .reduce((a, v) => {
            const [town, product, price] = v.map(x => (isNaN(x) ? x : Number(x)))
            a[product] = a[product] || { price, town }
            if (a[product].price > price ) {
                a[product] = { price, town }
            }
            return a
        }, {})

    return `${Object.entries(data)
        .map(([name, product]) => `${name} -> ${product.price} (${product.town})`)
        .join("\n")}`
}


console.log(price(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
))

console.log(price2(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
))
