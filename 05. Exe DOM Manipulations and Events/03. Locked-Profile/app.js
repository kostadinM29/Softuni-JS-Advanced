function lockedProfile() {
    const elements = Array.from(document.getElementsByTagName('button'));

    for(let element of elements){
        element.addEventListener('click', onClick);
    }

    function onClick(ev){
        const parent = ev.target.parentNode;
        const hiddenFields = parent.children[9];
        const unlockRadio = parent.children[4];

        const isUnlocked = unlockRadio.checked;

        if(isUnlocked){
            toggle(ev.target, hiddenFields)
        }
    }

    const toggle = (btn, content) => {
        if (btn.innerHTML === "Show more") {
            btn.innerHTML = "Hide it"
            content.style.display = "block"
        } else {
            btn.innerHTML = "Show more"
            content.style.display = "none"
        }
    }
}