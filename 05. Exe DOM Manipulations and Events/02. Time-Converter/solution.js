function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll("input[type='button']"));
    const fields = Array.from(document.querySelectorAll("input[type='text']"));
    
    for(let button of buttons){
        button.addEventListener('click', onClick);
    }

    const fillObj = (seconds, minutes, hours, days) => ({
        seconds,
        minutes,
        hours,
        days,
    })
    const types = {
        seconds: v => fillObj(v, v / 60, v / 3600, v / 86400),
        minutes: v => fillObj(v * 60, v, v / 60, v / 1440),
        hours: v => fillObj(v * 3600, v * 60, v, v / 24),
        days: v => fillObj(v * 86400, v * 1440, v * 24, v),
    }

    function onClick(ev){
        const [typeOfUnits, value] = [
            ev.target.previousElementSibling.id,
            ev.target.previousElementSibling.value,
        ];

        const data = types[typeOfUnits](value);

        fields.map(f => (f.value = data[f.id]))
    }
}