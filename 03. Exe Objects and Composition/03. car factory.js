function factory({ model, power, color, carriage, wheelsize }) {
    const getWheels = s => {
        const arr = []
        arr.length = 4
        return s % 2 === 0 ? arr.fill(s - 1) : arr.fill(s)
    }
    const getEngine = p =>{
        let engine = undefined
        if(p <= 90){
            engine = { power: 90, volume: 1800 }
        }
        if(p > 90 && p <= 120){
            engine = { power: 120, volume: 2400 }
        }
        if(p > 120){
            engine = { power: 200, volume: 3500 }
        }
        return engine
    }
    return {
        model,
        engine: getEngine(power),
        carriage: { type: carriage, color },
        wheels: getWheels(wheelsize),
    }
}

console.log(factory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))