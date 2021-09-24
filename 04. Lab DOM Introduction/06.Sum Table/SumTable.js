function sumTable() {
    const tableItems = document.getElementsByTagName('tr');

    let sum = 0;
    for (let index = 1; index < tableItems.length -1; index++) {
        let element = tableItems[index];
        let cell = element.lastElementChild;
        sum += Number(cell.textContent);
    }
    document.getElementById('sum').textContent = sum;
}