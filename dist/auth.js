System.register([], function (_export) {
    "use strict";

    var IAuthService, IAuthListener, AuthEvent;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            IAuthService = (function () {
                function IAuthService() {
                    _classCallCheck(this, IAuthService);
                }

                _createClass(IAuthService, [{
                    key: "login",
                    value: function login(_login, password) {}
                }, {
                    key: "logout",
                    value: function logout() {}
                }]);

                return IAuthService;
            })();

            _export("IAuthService", IAuthService);

            IAuthListener = (function () {
                function IAuthListener() {
                    _classCallCheck(this, IAuthListener);
                }

                _createClass(IAuthListener, [{
                    key: "authEvent",
                    value: function authEvent(event) {}
                }]);

                return IAuthListener;
            })();

            _export("IAuthListener", IAuthListener);

            AuthEvent = function AuthEvent(type, user) {
                _classCallCheck(this, AuthEvent);

                this.type = type;
                this.user = user;
            };

            _export("AuthEvent", AuthEvent);
        }
    };
});