function addItem() {
    let input = document.getElementById('newItemText');

    var li = document.createElement("li");
    li.textContent = input.value;

    document.getElementById('items').appendChild(li);
    input.value = '';
}