System.register([], function (_export) {
  'use strict';

  var LOGIN, LOGOUT, USER_LOAD, USER_UNLOAD, USER_UPDATE;
  return {
    setters: [],
    execute: function () {
      LOGIN = 'login';

      _export('LOGIN', LOGIN);

      LOGOUT = 'logout';

      _export('LOGOUT', LOGOUT);

      USER_LOAD = 'user.load';

      _export('USER_LOAD', USER_LOAD);

      USER_UNLOAD = 'user.unload';

      _export('USER_UNLOAD', USER_UNLOAD);

      USER_UPDATE = 'user.update';

      _export('USER_UPDATE', USER_UPDATE);
    }
  };
});