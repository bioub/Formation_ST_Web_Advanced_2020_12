function get() {
  return Math.random();
}

function getArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { get, getArbitrary, getInt, getIntInclusive };
