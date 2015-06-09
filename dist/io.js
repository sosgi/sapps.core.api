System.register([], function (_export) {
    "use strict";

    var IConnection, IHttpConnection, ISocketConnection;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            IConnection = (function () {
                function IConnection() {
                    _classCallCheck(this, IConnection);
                }

                _createClass(IConnection, [{
                    key: "send",

                    /**
                     * Send reguest
                     *
                     * @param {String} method
                     * @param {Object} params
                     * @return {Promise}
                     */
                    value: function send(method, params) {}
                }]);

                return IConnection;
            })();

            _export("IConnection", IConnection);

            IHttpConnection = (function (_IConnection) {
                function IHttpConnection() {
                    _classCallCheck(this, IHttpConnection);

                    if (_IConnection != null) {
                        _IConnection.apply(this, arguments);
                    }
                }

                _inherits(IHttpConnection, _IConnection);

                _createClass(IHttpConnection, [{
                    key: "get",

                    /**
                     * Send reguest
                     *
                     * @param {String} url
                     * @param {Object} params
                     * @return {Promise}
                     */
                    value: function get(url, params) {}
                }, {
                    key: "post",
                    value: function post(url, params) {}
                }, {
                    key: "head",
                    value: function head(url, params) {}
                }, {
                    key: "delete",
                    value: function _delete(url, params) {}
                }, {
                    key: "put",
                    value: function put(url, params) {}
                }]);

                return IHttpConnection;
            })(IConnection);

            _export("IHttpConnection", IHttpConnection);

            ISocketConnection = (function (_IHttpConnection) {
                function ISocketConnection() {
                    _classCallCheck(this, ISocketConnection);

                    if (_IHttpConnection != null) {
                        _IHttpConnection.apply(this, arguments);
                    }
                }

                _inherits(ISocketConnection, _IHttpConnection);

                _createClass(ISocketConnection, [{
                    key: "send",
                    value: function send(action, callback, bind) {}
                }, {
                    key: "on",
                    value: function on(action, callback, bind) {}
                }, {
                    key: "off",
                    value: function off(action, callback, bind) {}
                }]);

                return ISocketConnection;
            })(IHttpConnection);

            _export("ISocketConnection", ISocketConnection);
        }
    };
});