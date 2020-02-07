'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interface = function () {
    function Interface() {
        _classCallCheck(this, Interface);
    }

    _createClass(Interface, [{
        key: 'getDmit',

        /**
         * [getOmit 获取遗漏数据]
         * @param {string} issue [当前期号]
         */
        value: function getDmit(issue) {
            var self = this;
            return new Promise(function (resolve, reject) {
                _jquery2.default.ajax({
                    url: '/get/omit',
                    data: {
                        issue: issue
                    },
                    dataType: 'json',
                    success: function success(res) {
                        self.setOmit(res.data);
                        resolve.call(self, res);
                    },
                    error: function error(err) {
                        reject.call(err);
                    }
                });
            });
        }
        /**
         * 
         * @param {string} issue [期号]
         */

    }, {
        key: 'getOpenCode',
        value: function getOpenCode(issue) {
            var self = this;
            return new Promise(function (resolve, reject) {
                _jquery2.default.ajax({
                    url: '/get/opencode',
                    data: {
                        issue: issue
                    },
                    dataType: 'json',
                    success: function success(res) {
                        self.setOpenCode(res.data);
                        resolve.call(self, res);
                    },
                    error: function error(err) {
                        reject.call(err);
                    }
                });
            });
        }
        /**
         * 
         * @param {*} issue 
         */

    }, {
        key: 'getState',
        value: function getState(issue) {
            var self = this;
            return new Promise(function (resolve, reject) {
                _jquery2.default.ajax({
                    url: '/get/state',
                    data: {
                        issue: issue
                    },
                    dataType: 'json',
                    success: function success(res) {
                        resolve.call(self, res);
                    },
                    error: function error(err) {
                        reject.call(err);
                    }
                });
            });
        }
    }]);

    return Interface;
}();

exports.default = Interface;