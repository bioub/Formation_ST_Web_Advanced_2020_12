
function fakeAjax(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // appel le callback du prochain .then
      resolve(url);

      // appel le callback du prochain .catch
      // reject();
    }, Math.random() * 1000);
  });
}


fakeAjax('/user')
  .then((val) => {
    console.log(val.toUpperCase());
  })