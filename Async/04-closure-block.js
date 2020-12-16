

for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// A - 1s 0 1s 1 1s 2
// B - 1s 0 1 2
// C - 1s 2 2 2
// D - 1s 3 3 3

// ^
// |
// |for { 0, 1, 2 } 3 ..↻..    => => =>
// +---------------------------1s------->


for (let i=0; i<3; i++) {
  // closure (car on utilise let)
  setTimeout(() => {
    console.log(i);
  }, 1000);
}