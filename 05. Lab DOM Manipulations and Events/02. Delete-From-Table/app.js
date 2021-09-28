function deleteByEmail() {
    let list = Array.from(document.querySelector('tbody').children);
    const input = document.querySelector('input[name="email"]');

    let result = false;
    for(let element of list){
        if(element.children[1].textContent == input.value){
            element.remove();
            result = true;
        }
        
    }
    if(result){
        document.getElementById('result').textContent = "Deleted.";
    }
    else{
        document.getElementById('result').textContent = "Not found.";
    }
}