function addItem() {
    let menu = document.getElementById('menu');
    //const button = document.querySelector("input[type='button']");

    //button.addEventListener('click', onClick);

    //function onClick(ev){
        const text = document.getElementById('newItemText')
        const value = document.getElementById('newItemValue')
        
        let option = document.createElement('option')

        option.textContent  = text.value;
        option.value = value.value;

        text.value = '';
        value.value = '';
        menu.appendChild(option)
    //}
}