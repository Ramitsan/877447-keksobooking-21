'use strict';

var DEBOUNCE_INTERVAL = 300; // ms

window.debounce = function (cb) {
  var lastTimeout = null;

  return function (...parameters) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      cb(...parameters);
    }, DEBOUNCE_INTERVAL);
  };
};
