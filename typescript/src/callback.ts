// function useCallback(cb: (a: number, b: number) => number) {
//   cb(1, 2);
// }


// useCallback((a, b) => a + b);


interface SumCallback {
  (a: number, b: number): number
}

function useCallback(cb: SumCallback) {
  cb(1, 2);
}

useCallback((a, b) => a + b);