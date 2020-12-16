"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const Random = {
    get() {
        return Math.random();
    },
    getArbitrary(min = 0, max = 100) {
        return Math.random() * (max - min) + min;
    },
    getInt(min = 0, max = 100) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    },
    getIntInclusive(min = 0, max = 100) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
};
class Jeu {
    constructor(options = {}) {
        this.essais = [];
        const { min = 0, max = 100 } = options;
        this.rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.entierAlea = Random.getInt(min, max);
    }
    jouer() {
        if (this.essais.length) {
            console.log(`Vous avez déjà joué : ${this.essais.join(' - ')} !!!`);
        }
        this.rl.question('Quel est le nombre ? ', (answer) => {
            console.log('Vous avez saisi : ' + answer);
            const entierSaisi = Number.parseInt(answer, 10);
            if (Number.isNaN(entierSaisi)) {
                console.log('Erreur : il faut saisir un entier');
                return this.jouer();
            }
            this.essais.push(entierSaisi);
            if (entierSaisi < this.entierAlea) {
                console.log('Trop petit');
                this.jouer();
            }
            else if (entierSaisi > this.entierAlea) {
                console.log('Trop grand');
                this.jouer();
            }
            else {
                console.log('Gagné');
                this.rl.close();
            }
        });
    }
}
const game = new Jeu({
    max: 120,
});
game.jouer();
