let POPSIZE = 1000;
let CANSIZE = 2;
let NUMELECTIONS = 10;

class Citizen {
    constructor() {
        this.x = 0;
        this.y = 0;

        let norm = Math.random() * 100;

        if (norm < 68) {
            this.x = Math.random() * 136 - 68;
        } else if (norm < 95) {
            this.x = Math.random() * 27 + 68;

            if (Math.random() * 1 > 0.5) {
                this.x *= -1;
            }

        } else {
            this.x = Math.random() * 5 + 95;

            if (Math.random() * 1 > 0.5) {
                this.x *= -1;
            }
        }

        if (norm < 68) {
            this.y = Math.random() * 136 - 68;
        } else if (norm < 95) {
            this.y = Math.random() * 27 + 68;

            if (Math.random() * 1 > 0.5) {
                this.y *= -1;
            }

        } else {
            this.y = Math.random() * 5 + 95;

            if (Math.random() * 1 > 0.5) {
                this.y *= -1;
            }
        }
    }
}

class Party {
    constructor(name) {
        this.name = name;
        this.x = 0;
        this.y = 0 ;
        this.votes = 0;
    }

    newCandidate(x, y) {
        this.x = Math.random() * 200 - 100;
        this.y = Math.random() * 200 - 100;
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
                this.candidates.push(new Party("Party " + String.fromCharCode(65 + i)));
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

    shift() {
        let choice;

        for (let i = 0; i < POPSIZE; i++) {
            choice = this.determineVote(this.population[i]);

            if (Math.random() * 1 > 0.5) {
                this.population[i].x += this.candidates[choice].x
                this.population[i].x /= 2;

                this.population[i].y += this.candidates[choice].y
                this.population[i].y /= 2;
            }
        }
    }

    determineVote(citizen) {
        let temp;
        let dist = [0, 0];
        dist[1] = this.distance(this.candidates[0], citizen);

        for (let i = 1; i < CANSIZE; i++) {
            temp = this.distance(this.candidates[i], citizen);

            if (temp < dist[1]) {
                dist[1] = temp;
                dist[0] = i;
            }
        }

        return dist[0];
    }

    election() {
        let vote;

        for (let i = 0; i < CANSIZE; i++) {
            this.candidates[i].votes = 1;
            if (i == 0) {
                this.candidates[i].newCandidate(Math.random() * 40 - 20, Math.random() * 40 - 20);
            } else {
                this.candidates[i].newCandidate(Math.random() * 200 - 100, Math.random() * 200 - 100);
            }
        }

        for (let i = 0; i < POPSIZE; i++) {
            vote = this.determineVote(this.population[i]);

            // console.log(this.candidates[vote].name);
            this.candidates[vote].acceptVote();
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

        console.log("Winner Winnner Chicken Dinner: " + this.candidates[winner].name + " with " + this.candidates[winner].votes + " votes");
    }
}

function main() {
    country = new Nation();

    // country.census();
    for (let i = 0; i < NUMELECTIONS; i++) {
        country.election();
        country.shift();
    }
    // country.census();
}

main();
