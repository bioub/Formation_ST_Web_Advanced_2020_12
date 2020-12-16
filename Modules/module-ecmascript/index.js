import { Clock as Horloge } from "./clock.js";

const clockEl = document.querySelector('#horloge');
const clock = new Horloge(clockEl);
clock.start();
