"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _httpTigger = require("./http-tigger");

Object.keys(_httpTigger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _httpTigger[key];
    }
  });
});