(function (global) {
  "use strict";

  class Clock {
    /** @param {HTMLElement} containerEl */
    constructor(containerEl) {
      this._containerEl = containerEl;
    }
    _render() {
      const now = new Date();
      this._containerEl.innerText = now.toLocaleTimeString();
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

  // créé une variable globale Clock
  // window.Clock = Clock;

  global.STMicroelectronics = global.STMicroelectronics || {};
  global.STMicroelectronics.Core = global.STMicroelectronics.Core || {};
  global.STMicroelectronics.Core.Clock = Clock;
})(this);

// ici this === window