System.register([], function (_export) {
    "use strict";

    var IUserService, IUserListener, UserEvent;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            IUserService = (function () {
                function IUserService() {
                    _classCallCheck(this, IUserService);
                }

                _createClass(IUserService, [{
                    key: "getUser",
                    value: function getUser() {}
                }, {
                    key: "update",
                    value: function update(data) {}
                }]);

                return IUserService;
            })();

            _export("IUserService", IUserService);

            IUserListener = (function () {
                function IUserListener() {
                    _classCallCheck(this, IUserListener);
                }

                _createClass(IUserListener, [{
                    key: "userEvent",
                    value: function userEvent(event) {}
                }]);

                return IUserListener;
            })();

            _export("IUserListener", IUserListener);

            UserEvent = function UserEvent(type, user) {
                _classCallCheck(this, UserEvent);

                this.type = type;
                this.user = user;
            };

            _export("UserEvent", UserEvent);
        }
    };
});