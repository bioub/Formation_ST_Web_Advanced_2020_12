const coords = {};

// pas possible d'avoir de l'extensibilité
// coords.x = 12;

// pour contourner
coords['x'] = 12;

interface Extensible {
  [key: string]: any;
}

const coords2: Extensible = {};


coords2.x = 12;
// coords2.y = 'er';

// tant mieux

const divEl = document.createElement('div');
divEl.innerText = 'text';
// divEl.innerHtml = 'text';
divEl.innerHTML = 'text';