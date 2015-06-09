System.register(['./io'], function (_export) {
  'use strict';

  return {
    setters: [function (_io) {
      for (var _key in _io) {
        _export(_key, _io[_key]);
      }
    }],
    execute: function () {}
  };
});