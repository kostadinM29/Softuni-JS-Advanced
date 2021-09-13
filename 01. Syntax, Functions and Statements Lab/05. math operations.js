function math(x, y, a) {
    const operators = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "%": (x, y) => x % y,
        "**": (x, y) => x ** y,
    }

    return operators[a](x, y)
}

console.log(math(5, 6, '+'))