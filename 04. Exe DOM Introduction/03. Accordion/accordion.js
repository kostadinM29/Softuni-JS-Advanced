function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');

    if(button.innerHTML === "More"){
        text.style.display = "block";
        button.innerHTML = "Less";
    }
    else{
        text.style.display = "none";
        button.innerHTML = "More";
    }
}