(function () {
  "use strict";

  class Clock {
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

  // créé une variable globale Clock
  window.STMicroelectronics = window.STMicroelectronics || {};
  window.STMicroelectronics.Clock = Clock;
})();
