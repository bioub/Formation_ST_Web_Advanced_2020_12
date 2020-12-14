export class Clock {
  constructor(containerEl) {
    this._containerEl = containerEl;
  }
  _render() {
    const now = new Date();
    this._containerEl.innerText = now.toLocaleTimeString();
  }
  start() {
    setInterval(() => {
      this._render();
    }, 1000);
  }
}

export const format = 'HH:mm:ss';