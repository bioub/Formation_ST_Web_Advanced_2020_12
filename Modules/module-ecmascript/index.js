import { Clock } from "./clock.js";

const clockEl = document.querySelector('#horloge');
const clock = new Clock(clockEl);
clock.start();
