export class Horloge {

  constructor(private _container: HTMLElement) {
  }

  _render() {
    const now = new Date();
    this._container.innerText = now.toLocaleTimeString();
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}
