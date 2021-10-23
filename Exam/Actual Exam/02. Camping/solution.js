class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        name = String(name);
        condition = String(condition);
        money = Number(money);

        if (!(Object.keys(this.priceForTheCamp).includes(condition))) {
            throw new Error(`Unsuccessful registration at the camp.`);
        }

        if (this.listOfParticipants.some(g => g['name'] == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        else {
            this.listOfParticipants.push({
                'name': name,
                'condition': condition,
                'power': 100,
                'wins': 0
            });
        }
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {

        let person = this.listOfParticipants.find(l => l.name === name);

        if (person === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        else {
            let index = this.listOfParticipants.indexOf(person);
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`
        }
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        typeOfGame = String(typeOfGame);
        participant1 = String(participant1);
        participant2 = String(participant2);

        let player1 = this.listOfParticipants.find(l => l.name === participant1);
        let player2 = this.listOfParticipants.find(l => l.name === participant2);

        switch (typeOfGame) {
            case 'Battleship':
                if (player1 === undefined) {
                    throw new Error(`Invalid entered name/s.`);
                }
                else {
                    player1.power = player1.power + 20;
                    return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
                }
            case 'WaterBalloonFights':
                if (player1 === undefined || player2 === undefined) {
                    throw new Error(`Invalid entered name/s.`);
                }
                if (player1.condition !== player2.condition) {
                    throw new Error(`Choose players with equal condition.`);
                }
                let winner = null
                if (player1.power > player2.power) {
                    winner = player1;
                }
                else {
                    winner = player2;
                }
                if (winner !== undefined) {
                    winner.wins++;
                    return `The ${winner.name} is winner in the game ${typeOfGame}.`;
                }
                else {
                    return `There is no winner.`;
                }
        }
    }
    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        for (let person of this.listOfParticipants.sort((a, b) => b.wins - a.wins)) {
            result.push(`${person.name} - ${person.condition} - ${person.power} - ${person.wins}`);
        }
        return result.join('\n');
    }

}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
