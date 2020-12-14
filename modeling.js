let POPSIZE = 5;
let CANSIZE = 2;

class Citizen {
    constructor() {
        this.x = 0;
        this.y = 0;

        let norm = Math.random() * 100;

        if (norm < 68) {
            this.x = Math.random() * 136 - 68;
        } else if (norm < 95) {
            this.x = Math.random() * 27 + 68;

            if (Math.random() * 1) {
                this.x *= -1;
            }

        } else {
            this.x = Math.random() * 5 + 95;

            if (Math.random() * 1) {
                this.x *= -1;
            }
        }

        if (norm < 68) {
            this.y = Math.random() * 136 - 68;
        } else if (norm < 95) {
            this.y = Math.random() * 27 + 68;

            if (Math.random() * 1) {
                this.y *= -1;
            }

        } else {
            this.y = Math.random() * 5 + 95;

            if (Math.random() * 1) {
                this.y *= -1;
            }
        }
    }
}

class Candidate {
    constructor(name) {
        this.name = name;
        this.x = Math.random() * 200 - 100;
        this.y = Math.random() * 200 - 100;
        this.votes = 1;
    }

    acceptVote() {
        this.votes++;
    }
}

class Nation {
    constructor() {
        this.population = [];
        this.candidates = [];

        for (let i = 0; i < POPSIZE; i++) {
            if (i < CANSIZE) {
                this.candidates.push(new Candidate("Candidate " + String.fromCharCode(65 + i)));
            }
            this.population.push(new Citizen());
        }
    }

    census() {
        for (let i = 0; i < POPSIZE; i++) {
            console.log(country.population[i].x + " " + country.population[i].y);
        }

        console.log("\nCandidates\n")
        for (let i = 0; i < CANSIZE; i++) {
            console.log(this.candidates[i].x + " " + this.candidates[i].y);
        }
    }

    distance(person1, person2) {
        return Math.sqrt(Math.pow(person1.x - person2.x, 2), Math.pow(person1.y - person2.y, 2));
    }

    election() {
        let distJ;
        let temp;

        for (let i = 0; i < POPSIZE; i++) {
            distJ = [0, 0];
            distJ[1] = this.distance(this.candidates[0], this.population[i]);

            for (let j = 1; j < CANSIZE; j++) {
                temp = this.distance(this.candidates[j], this.population[i]);

                if (temp < distJ[1]) {
                    distJ[1] = temp;
                    distJ[0] = j;
                }
            }

            this.candidates[distJ[0]].acceptVote();
        }

        this.determineWinner();
    }

    determineWinner() {
        let winner = 0;
        for (let i = 1; i < CANSIZE; i++) {
            if (this.candidates[i].votes > this.candidates[winner].votes) {
                winner = i;
            }
        }

        console.log("Winner Winnner Chicken Dinner: " + this.candidates[winner].name);
    }
}

function main() {
    country = new Nation();

    country.census();
    country.election();
}

main();
