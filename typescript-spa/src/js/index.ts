import { matchRoute } from './router.js';

matchRoute();
window.addEventListener('hashchange', matchRoute);
