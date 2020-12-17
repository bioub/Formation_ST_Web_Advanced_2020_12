function useCallback(cb: Function) {
  cb();
}

function Test() {}

useCallback(Test);