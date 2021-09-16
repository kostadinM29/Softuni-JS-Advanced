function element(arr){
    arr = arr.filter((_, i) => i % 2 === 0)
    console.log(arr.join(" "))
}

element(['20', '30', '40', '50', '60'])