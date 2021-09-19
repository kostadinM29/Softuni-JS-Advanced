function solve(arr) {
    arr= arr.map(x => x.split(" ").map(Number))

    let firstDiagonalSum = 0
    let secondDiagonalSum = 0
    
    let v = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
      firstDiagonalSum += arr[i][i]
      secondDiagonalSum += arr[i][v]
      v--
    }

    if (firstDiagonalSum == secondDiagonalSum) {
        v = arr.length - 1;
        for (let i = 0; i < arr.length; i++) {
          arr[i].map((num, index) => {
            if (index !== i && index !== v) { arr[i][index] = firstDiagonalSum }
          })
          v--;
        }
      }
    
      arr.forEach(line => console.log(line.join(' ')));
}

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)

solve(['1 1 1',
'1 1 1',
'1 1 0']
)