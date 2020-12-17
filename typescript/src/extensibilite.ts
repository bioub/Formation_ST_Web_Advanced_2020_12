const coords = {};

// pas possible d'avoir de l'extensibilité
// coords.x = 12;

// pour contourner
coords['x'] = 12;

interface Coords {
  [key: string]: number;
}

const coords2: Coords = {};


coords2.x = 12;
// coords2.y = 'er';

// tant mieux

const divEl = document.createElement('div');
// divEl.innerHtml = 'text';
divEl.innerHTML = 'text';