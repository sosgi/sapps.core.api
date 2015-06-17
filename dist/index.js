System.register(['./io', './user', './auth', './consts'], function (_export) {
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
    }, function (_auth) {
      for (var _key3 in _auth) {
        _export(_key3, _auth[_key3]);
      }
    }, function (_consts) {
      for (var _key4 in _consts) {
        _export(_key4, _consts[_key4]);
      }
    }],
    execute: function () {}
  };
});