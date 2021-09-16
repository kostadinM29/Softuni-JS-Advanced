function pie (arr, a, b){
    return arr.slice(arr.indexOf(a), arr.indexOf(b) + 1)
}

console.log(pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))