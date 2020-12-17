// function setTimeoutSync(cb: (val: string) => void, delay: number) {
//   cb('string');
// }

// setTimeoutSync(() => {}, 1000);

interface SetTimeoutCallback {
  (val: string): void;
}

function setTimeoutSync(cb: SetTimeoutCallback, delay: number) {
  cb('string');
}

setTimeoutSync(() => {}, 1000);