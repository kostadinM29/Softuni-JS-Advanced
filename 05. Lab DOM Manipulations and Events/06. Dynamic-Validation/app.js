function validate() {
    const email = document.getElementById('email');
    email.addEventListener('change', onChange);

    function onChange(ev){
        const email = ev.target.value;
        isValidEmail(email) ? ev.target.classList.remove('error') : ev.target.classList.add('error')
    }

    function isValidEmail(str) {
        if (/^[a-z]+@[a-z]+\.[a-z]+/g.test(str)) return true

        return false
    }
}