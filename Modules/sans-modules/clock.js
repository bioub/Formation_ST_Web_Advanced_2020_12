
class Clock {
  /** @param {HTMLElement} containerEl */
  constructor(containerEl) {
    this._containerEl = containerEl;
  }
  _render() {
    const now = new Date();
    this._containerEl.innerText = moment(now);
  }
  start() {
    this._render();
    this._interval = setInterval(() => {
      this._render();
    }, 1000);
  }
  stop() {
    clearInterval(_interval);
  }
}