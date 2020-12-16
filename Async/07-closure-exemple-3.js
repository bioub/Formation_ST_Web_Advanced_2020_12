for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// ^
// |
// |for { st (i=0) - st (i=1) - st (i=2) } (i=3) ..↻..    => => =>
// +------------------------------------------------------1s------->
//                                                        3  3  3

function save(val) {
  // closure car : fonction > fonction
  return function() {
    console.log(val);
  };
}

for (var i=0; i<3; i++) {
  setTimeout(save(i), 1000);
}

for (let i=0; i<3; i++) {
  // closure car : block > fonction
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
