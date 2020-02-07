'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _timer = require('./lottery2/timer');

var _timer2 = _interopRequireDefault(_timer);

var _base = require('./lottery2/base');

var _base2 = _interopRequireDefault(_base);

var _caculate = require('./lottery2/caculate');

var _caculate2 = _interopRequireDefault(_caculate);

var _interface = require('./lottery2/interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // import 'babel-ployfill';


// import Calculate from './lottery/caculate';

var copyPropperties = function copyPropperties(target, source) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Reflect.ownKeys(source)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
                var desc = Object.getOwnPropertyDescriptor(source, key);
                Object.defineProperty(target, key, desc);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

var mix = function mix() {
    var Mix = function Mix() {
        _classCallCheck(this, Mix);
    };

    for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
        mixins[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = mixins[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var mixin = _step2.value;

            copyPropperties(Mix, mixin);
            copyPropperties(Mix.prototype, mixin.prototype);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return Mix;
};

var Lottery = function (_mix) {
    _inherits(Lottery, _mix);

    function Lottery() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'syy';
        var cname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '11选5';
        var issue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '**';
        var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '**';

        _classCallCheck(this, Lottery);

        var _this = _possibleConstructorReturn(this, (Lottery.__proto__ || Object.getPrototypeOf(Lottery)).call(this));

        _this.name = name;
        _this.cname = cname;
        _this.issue = issue;
        _this.state = state;
        _this.el = '';
        _this.omit = new Map();
        _this.open_code = new Set();
        _this.open_code_list = new Set();
        _this.play_list = new Map();
        _this.number = new Set();
        _this.issue_el = '#curr_issue';
        _this.countdown_el = '#countdown';
        _this.state_el = '.state_el';
        _this.cart_el = '.codelist';
        _this.omit_el = '';
        _this.cur_play = 'r5';
        _this.initPlayList();
        _this.initNumber();
        _this.updateState();
        _this.initEvent();
        return _this;
    }
    /**
     * [状态更新]
     */


    _createClass(Lottery, [{
        key: 'updateState',
        value: function updateState() {
            var self = this;
            this.getState().then(function (res) {
                self.issue = res.issue;
                self.end_time = res.end_time;
                self.state = res.state;
                $(self.issue_el).text(res.issue);
                self.countdown_el(res.end_time, function (time) {
                    $(self.countdown_el).html(time);
                }, function () {
                    setTimeout(function () {
                        self.updateState();
                        self.getOmit(self.issue).then(function (res) {});
                        self.getOpenCode(self.issue).then(function (res) {});
                    }, 500);
                });
            });
        }
        /**
         * [初始化事件]
         */

    }, {
        key: 'initEvent',
        value: function initEvent() {
            var self = this;
            $('#plays').on('click', 'li', self.changePlayNav.bind(self));
            $('.noll-list').on('click', '.btn-boll', self.toggleCodeActive.bind(self));
            $('#confirm_sel_code').on('click', self.addCode.bind(self));
            $('.dxjo').on('click', 'li', self.assistHandle.bind(self));
            $('qkmethod').on('click', '.btn-middle', self.getRandomCode.bind(self));
        }
    }]);

    return Lottery;
}(mix(_timer2.default, _caculate2.default, _interface2.default, _base2.default));

exports.default = Lottery;
