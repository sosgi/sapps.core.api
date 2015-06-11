System.register([], function (_export) {
    'use strict';

    var IUserManager, IUserListener, UserEvent, LOGIN, LOGOUT;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            IUserManager = (function () {
                function IUserManager() {
                    _classCallCheck(this, IUserManager);
                }

                _createClass(IUserManager, [{
                    key: 'getUser',
                    value: function getUser() {}
                }, {
                    key: 'login',
                    value: function login(_login, password) {}
                }, {
                    key: 'logout',
                    value: function logout() {}
                }]);

                return IUserManager;
            })();

            _export('IUserManager', IUserManager);

            IUserListener = (function () {
                function IUserListener() {
                    _classCallCheck(this, IUserListener);
                }

                _createClass(IUserListener, [{
                    key: 'userEvent',
                    value: function userEvent(event) {}
                }]);

                return IUserListener;
            })();

            _export('IUserListener', IUserListener);

            UserEvent = function UserEvent(type, user) {
                _classCallCheck(this, UserEvent);

                this.type = type;
                this.user = user;
            };

            _export('UserEvent', UserEvent);

            LOGIN = 'login';

            _export('LOGIN', LOGIN);

            LOGOUT = 'logout';

            _export('LOGOUT', LOGOUT);
        }
    };
});