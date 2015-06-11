System.register(['./io', './user'], function (_export) {
  'use strict';

  return {
    setters: [function (_io) {
      for (var _key in _io) {
        _export(_key, _io[_key]);
      }
    }, function (_user) {
      for (var _key2 in _user) {
        _export(_key2, _user[_key2]);
      }
    }],
    execute: function () {}
  };
});