function length(...args) {
    const length = args.reduce((a, v) => a + v.length, 0)
    return `${length}
${Math.round(length / args.length)}`
}
console.log(length('pasta', '5', '22.3'))