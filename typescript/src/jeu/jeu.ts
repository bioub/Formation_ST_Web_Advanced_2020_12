import { createInterface } from 'readline';
import { getInt } from './random';

class Jeu {
  private rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  entierAlea: number;
  essais: number[] = [];

  constructor(options: { min?: number, max?: number } = {}) {
    const { min = 0, max = 100 } = options;
    this.entierAlea = getInt(min, max);
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
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}

export default Jeu;